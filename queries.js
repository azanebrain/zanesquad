var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);

var db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: 'foobar'
});

function getAllCompanies(req, res, next) {
  db.any('select * from companies')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL companies'
        });
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

module.exports = {
  getAllCompanies: getAllCompanies,
};
