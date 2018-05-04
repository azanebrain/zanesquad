# The Squad Database

This is the database for The Squad. It is a Postgres database running in a Docker container.


## Run the DB:

Spin up a docker container with Postgres:

```
docker run --name squaddb -p 5432:543s2 -e POSTGRES_PASSWORD=foobar postgres:alpine -d
```

Now you can start the container with `docker start squaddb`

## Connect to the DB

* user: postgres
* pass: see `docker run` command
* network: localhost
* port: 5432
* database: postgres

## Run migrations and seeds

Migrations can be found in the DBeaver project export in `./data/General/Scripts/Squad\ Migrations.sql`

Initial seeds for development can be found in the DBeaver project export in `./data/General/Scripts/Squad\ Seeds.sql`
