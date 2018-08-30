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
