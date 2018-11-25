# The Squad Database

This is the database for ZaneSquad. It is a Postgres database running in a Docker container.

# Run the DB locally:

Spin up a docker container with Postgres:

```
docker run --name zanesquaddb -p 5432:5432 -e POSTGRES_PASSWORD=foobar postgres:alpine -d
```

Now you can start the container with `docker start zanesquaddb`

## Connect to the DB

* user: postgres
* password: see `docker run` command
* network: localhost
* port: 5432
* database: postgres

## Run migrations and seeds

Migrations can be found in the DBeaver project export in `./data/General/Scripts/Squad\ Migrations.sql`, although these will be moved to the API project

Initial seeds for development can be found in the DBeaver project export in `./data/General/Scripts/Squad\ Seeds.sql`

## Migrations and Seeds

When setting up a new databse you will need to run migrations and seeds.

Tun the SQL scripts found in the Migrations folder in the following order:

* Migrations/1_Initial
* Seeds/companies
* Migrations/2_Users
* Seeds/users
* Migrations/3_Coupons
* Seeds/coupons
* Migrations/4_User_fullname
* Migrations/5_Friend_requests
* Seeds/friend_requests
* Migrations/6_Friends
* Seeds/friends
* Migrations/7_Companies

# Hosted DB

The hosted DB runs in Siteground.

Environments:
* Live: zanesqua_live
* Test: zanesqua_test
