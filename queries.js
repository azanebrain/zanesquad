require('dotenv').config()
var promise = require('bluebird');
const uuid = require('uuid/v4')

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);

var db = pgp({
  host: process.env.host,
  port: process.env.port,
  database: process.env.database,
  user: process.env.user,
  password: process.env.password
});

const FRIEND_REQUEST_STATUSES = {
  ACCEPTED: 'ACCEPTED',
  DECLINED: 'DECLINED',
  OPEN: 'OPEN',
}

function version(req, res, next) {
  res.status(200)
    .json({
      status: 'success',
      data: {
        Version: '0.13.0'
      },
      message: 'Retrieved ALL companies',
    })
}

function getAllCompanies(req, res, next) {
  db.any('select * from companies')
    .then(data => {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL companies'
        })
    })
    .catch(function (err) {
      return next(err);
    });
}
/*
Besides, any, you can use the following Query Result Masks (just to name a few):
* one - a single row is expected
* many - one or more rows are expected
* none - no rows are expected
* result - passes the original object when resolved (we’ll look at an example of this shortly)
*/

function registerUser(req, res, next) {
  db.none('insert into users(guid, email, password, username, fullname)' +
    'values(\'' + uuid() + '\', ${email}, ${password}, ${username}, ${fullname})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one user'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createCoupon(req, res, next) {
  // Get the user
  db.one(`select * from users WHERE guid = '${req.body.userGuid}'`)
    .then(user => {
      // Get the company
      db.one(`select * from companies WHERE guid = '${req.body.companyGuid}'`)
        .then(company => {
          // Create the coupon
          db.none('insert into coupons(guid, code, userid, companyid) ' +
            `values('${uuid()}', '${req.body.Code}', ${user.id}, ${company.id})`)
            .then(() => {
              res.status(200)
                .json({
                  status: 'success',
                  message: 'Created a coupon'
                });
            })
            .catch(function (err) {
              return next(err);
            });

        })
        .catch(function (err) {
          return next(err);
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

/**
 * Updates an existing coupon
 * 
 * req.body: code: The new value for the coupon code 
 * req.params: couponGuid: The coupon to update
 */
function updateCoupon(req, res, next) {
  db.none(`UPDATE coupons SET code='${req.body.code}' WHERE guid='${req.params.couponGuid}'`)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated coupon'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

/**
 * Retrieves a list of a user's couponsn
 * 
 * req.query: userUid: The user who's coupons are being retrieved
 * @returns A list of coupons and their associated company names
 */
function getUsersCoupons(req, res, next) {
  // Get the user
  db.one(`select * from users WHERE guid = '${req.query.userUid}'`)
    .then(user => {
      // Get the coupons
      db.any(`SELECT * from coupons WHERE userid='${user.id}'`)
        .then(coupons => {
          // Get all of the unique companies
          let companyIds = coupons.map(c => c.companyid)
            .filter((elem, pos, arr) => arr.indexOf(elem) == pos)
          // Get the company details for each coupon
          db.many(`SELECT * from companies WHERE id in (${companyIds.toString()})`)
            .then(companies => {
              // Generate the return set
              var data = coupons.map(c => {
                company = companies.find(company => company.id === c.companyid)
                return {
                  guid: c.guid,
                  code: c.code,
                  company: {
                    guid: company.guid,
                    name: company.name,
                  }
                }
              })
              res.status(200)
                .json({
                  status: 'success',
                  data: data,
                  message: 'Retrieved all coupons for user'
                });
            })
            .catch(function (err) {
              return next(err);
            })

        })
        .catch(function (err) {
          return next(err);
        })
    })
    .catch(function (err) {
      return next(err);
    });
}

/**
 * Gets users whose name starts with the provided search term
 *
 * req.query: fullname: The search term
 */
function getUserByFullName(req, res, next) {
  db.many(`SELECT fullname, guid from users WHERE LOWER(fullname) LIKE LOWER('${req.query.fullname}%')`)
    .then(users => {
      res.status(200)
        .json({
          status: 'success',
          data: users,
          message: 'Retrieved users'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

/**
 * Creates a Friend Request in the OPEN status
 *
 * req.body.recipient: The GUID of the user being friended
 * req.body.requester: The GUID of the user requesting to be friends
 */
function createFriendRequest(req, res, next) {
  // Get the requester
  db.one(`select * from users WHERE guid = '${req.body.requester}'`)
    .then(requester => {
      // Get the recipient
      db.one(`select * from users WHERE guid = '${req.body.recipient}'`)
        .then(recipient => {
        // Create the Friend Request
        db.none('insert into friendrequests(guid, recipient, requester) ' +
          `values('${uuid()}', ${recipient.id}, ${requester.id})`)
          .then(() => {
            res.status(200)
              .json({
                status: 'success',
                message: `Created a friend request between ${requester.fullname} and ${recipient.fullname}`
              });
          })
          .catch(function (err) {
            return next(err);
          })
    })
    .catch(function (err) {
      return next(err);
    });
  })
  .catch(function (err) {
    return next(err);
  });
}


/**
 * Updates an friend request to the ACCEPTED status
 * 
 * Creates a friend relationship between two users
 * req.params: requestGuid: The Friend Request being accepted
 */
function acceptFriendRequest(req, res, next) {
  // Get the Requester and Recipient User IDs of the supplied Friend Request
  db.one(`select * from friendrequests WHERE guid = '${req.params.requestGuid}'`)
    .then(friendRequest => {
      // Establish the friend relationship
      db.none(`insert into "friends"(Friender, Friendee) values
        ('${friendRequest.requester}', '${friendRequest.recipient}'),
        ('${friendRequest.recipient}', '${friendRequest.requester}')`)
        .then(() => {
          // Update the friend request
          db.none(`update friendrequests SET status='${FRIEND_REQUEST_STATUSES.ACCEPTED}' where guid='${req.params.requestGuid}'`)
            .then(() => {
              res.status(200)
                .json({
                  status: 'success',
                  message: `Friend Request accepted`
                });
            })
            .catch(function (err) {
              return next(err);
            })
        })
        .catch(function (err) {
          return next(err);
        })
    })
    .catch(function (err) {
      return next(err);
    });
}

/**
 * Declines a friend request to the DECLINED status
 * 
 * Only impacts Friend Requests in the OPEN status
 * req.params: requestGuid: The Friend Request being accepted
 */
function declineFriendRequest(req, res, next) {
  // Get the Friend Request's info
  db.one(`select * from friendrequests WHERE guid = '${req.params.requestGuid}'`)
    .then(friendRequest => {
      if(friendRequest.status !== FRIEND_REQUEST_STATUSES.OPEN) {
        res.status(500)
          .json({
            status: 'failure',
            message: 'The Friend Request cannot be denied because it is not in an open status'
          })
        return
      }
      // Update the friend request
      db.none(`update friendrequests SET status='${FRIEND_REQUEST_STATUSES.DECLINED}' where guid='${req.params.requestGuid}'`)
        .then(() => {
          res.status(200)
            .json({
              status: 'success',
              message: `Friend Request declined`
            });
        })
        .catch(function (err) {
          return next(err);
        })
    })
    .catch(function (err) {
      return next(err);
    });
}

/**
 * Retrieves public user information
 *
 * req.body: username: The username credential
 * req.body: password: The password credential
 */
function retrieveUser(req, res, next) {
  db.one(`SELECT * FROM users WHERE username='${req.body.username}' AND password='${req.body.password}'`)
    .then(user => {
      res.status(200)
        .json({
          status: 'success',
          data: {
            guid: user.guid,
            fullname: user.fullname
          },
          message: 'Successfully logged in'
        })
    })
    .catch(function (err) {
      res.status(500)
        .json({
          status: 'failure',
          message: 'Invalid username or password'
        })
    });
}

module.exports = {
  version: version,
  getAllCompanies: getAllCompanies,
  registerUser: registerUser,
  createCoupon: createCoupon,
  updateCoupon: updateCoupon,
  getUsersCoupons: getUsersCoupons,
  getUserByFullName: getUserByFullName,
  createFriendRequest: createFriendRequest,
  acceptFriendRequest: acceptFriendRequest,
  declineFriendRequest: declineFriendRequest,
  retrieveUser: retrieveUser
};
