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
        Version: '0.16.0'
      },
      message: 'Retrieved ALL companies',
    })
}

function getAllCompanies(req, res, next) {
  db.any('select * from companies')
    .then(companies => {
      let data = companies.map(c => {
        return {
          guid: c.guid,
          name: c.name,
          url: c.url,
        }
      })
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
  // Get the company
  db.one(`select * from companies WHERE guid = '${req.body.companyGuid}'`)
    .then(company => {
      // Create the coupon
      db.none('insert into coupons(guid, code, userid, companyid) ' +
        `values('${uuid()}', '${req.body.Code}', ${req.user.id}, ${company.id})`)
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
 * req.query: username: Used to verify the user who's coupons are being retrieved
 * req.query: password: Used to verify the user who's coupons are being retrieved
 * @returns A list of coupons and their associated company names
 * Users must be logged in to use this endpoint
 */
function getUsersCoupons(req, res, next) {
  // Verify the user
  authenticateUser(req.query.username, req.query.password, (options, user, errorMessage) => {
    if ( user ) {
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
              res.status(500)
                .json({
                  status: 'failure',
                  message: 'Company could not be found'
                });
            })

        })
        .catch(function (err) {
          res.status(500)
            .json({
              status: 'failure',
              message: `An error occurred retrieving the user's coupons`
            });
        })
    } else {
      res.status(401)
        .json({
          status: 'unauthorized',
          message: errorMessage.message
        })
    }
  })
}

/**
 * Gets users whose name starts with the provided search term
 *
 * req.query: fullname: The search term
 * Users must be logged in to utilize this method
 */
function getUserByFullName(req, res, next) {
  // Verify the user
  authenticateUser(req.query.username, req.query.password, (options, user, errorMessage) => {
    if (user) {
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
    else {
      res.status(401)
        .json({
          status: 'unauthorized',
          message: errorMessage.message
        })
    }
  })
}

/**
 * Creates a Friend Request in the OPEN status between the current user and someone else
 *
 * req.body.recipient: The GUID of the user being friended
 */
function createFriendRequest(req, res, next) {
  let requester = req.user
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

/**
 * Used by PassportJS to authenticate a user session
 * @param {string} username
 * @param {string} password
 * @param {callback} done A callback function that will return the user as the second parameter if one was found
 */
function authenticateUser (username, password, done) {
  db.one(`SELECT * FROM users WHERE username='${username}' AND password='${password}'`)
    .then(user => {
      return done(null, user);
    })
    .catch(function (err) {
      return done(null, false, { message: 'Incorrect username or password' });
    });
}

/**
 * Allows the user to view all of their friends' coupons for a given company
 *
 * req.params: companyUid: The company being queried
 * req.query: companyUid: The company being queried
 * @return A list of friend coupons for the given company
 * Includes the coupon GUID, code, and the Full Name of the friend who setup that coupon
 */
function getFriendsCouponsByCompany(req, res, next) {
  // Verify the user
  authenticateUser(req.query.username, req.query.password, (options, user, errorMessage) => {
    if (user) {
      // Get the company's ID so it can be used in subsequent requests
      db.one(`SELECT id FROM companies WHERE guid='${req.params.companyGuid}'`)
        .then(company => {
          // Get the user's friends
          db.many(`SELECT users.id, users.fullname
            FROM users
            INNER JOIN friends ON users.id=friends.friendee
            WHERE Friender='${user.id}'`)
            .then(friends => {
              // friends: [ { id: 1, fullname: 'User 1' }, { id: 42, fullname: 'User 42' } ]
              let friendIds = friends.map(f => f.id)
              // Show the company, the code, the friend's name (and username?)
              db.any(`SELECT * FROM coupons WHERE userid IN (${friendIds}) AND companyid='${company.id}'`)
                .then(coupons => {
                  let data = coupons.map(c => {
                    return {
                      guid: c.guid,
                      code: c.code,
                      friendFullname: friends.find(f => f.id === c.userid).fullname
                    }
                  })
                  res.status(200)
                    .json({
                      status: 'success',
                      data: data,
                      message: `Retrieved friends' coupons`
                    })
                })
                .catch(function (err) {
                  res.status(500)
                    .json({
                      status: 'failure',
                      message: 'No coupons were found'
                    })
                });
            })
            .catch(err => {
              res.status(500)
                .json({
                  status: 'failure',
                  message: 'No friends were found for this user'
                })
            })
        })
        .catch(err => {
          res.status(500)
            .json({
              status: 'failure',
              message: 'The company could not be found'
            })
        })
    } else {
      res.status(401)
        .json({
          status: 'unauthorized',
          message: errorMessage.message
        })
    }
  })
}


/**
 * Gets a list of the current user's open friend requests
 *
 * @returns All of the OPEN friend requests targeted at the current user
 * This endpoint requires an authenticated user
 */
function getUsersFriendRequests(req, res, next) {
  // Verify the user
  authenticateUser(req.query.username, req.query.password, (options, user, errorMessage) => {
    if (user) {
      let queryString = `SELECT users.guid, users.fullname, users.username
        FROM users
        INNER JOIN friendrequests ON users.id=friendrequests.requester
        WHERE Recipient='${user.id}' and status='${FRIEND_REQUEST_STATUSES.OPEN}'`
      db.any(queryString)
        .then(data => {
          res.status(200)
            .json({
              status: 'success',
              data: data,
              message: 'Successfully retrieved Friend Requests'
            })
        })
        .catch(err => {
          res.status(500)
            .json({
              status: 'failure',
              message: 'An error occurred retrieving open Friend Requests'
            })
        })
    } else {
      res.status(401)
        .json({
          status: 'unauthorized',
          message: errorMessage.message
        })
    }
  })
}

/**
 * Creates a new company entity
 *
 * @param req.body.name {string} The name of the company
 * @param req.body.url {string} The URL of the company's homepage
 * This endpoint is only accessible to authorized users
 */
function createCompany(req, res, next) {
  // Company names are lowercase
  db.none(`insert into companies(guid, name, url) values('${uuid()}', '${req.body.name.toLowerCase()}', '${req.body.url}')`)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one company'
        });
    })
    .catch(function (err) {
      res.status(500)
        .json({
          status: 'failure',
          message: 'An error occurred trying to add the company'
        });
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
  retrieveUser: retrieveUser,
  passportFindUser: authenticateUser,
  getFriendsCouponsByCompany: getFriendsCouponsByCompany,
  getUsersFriendRequests: getUsersFriendRequests,
  createCompany: createCompany,
};
