# ZaneSquad API - Node MVP

This is an attempt at using Node as the API instead of .NETCore.

I will be following this tutorial: https://mherman.org/blog/designing-a-restful-api-with-node-and-postgres/

It uses the Bluebird package. I don't like using packages that do ES6 just to do ES6, but I don't really have the time to run into issues caused by not following the tutorial.

Features:

* GET Companies: A simple "retrieve all"
* POST User: A simple "create"
* POST Coupon: This is the most complex endpoint. It takes a company and user and uses those guids to create a coupon

# Run

Run with `npm start`

Endpoints will be exposed at http://localhost:3000 

## Environments

Environment variables are configured through the `dotenv` package and `.env` files. In order to connect the API to the database, you need to set the correct connection strings in `.env`.

The `.env.example` file has been provided as a boilerplate for configurations.

Make a copy of it and rename it to `.env` to have the API connect to a locally running instance of the `database` project.

When you want to connect to other environments, simply modify the values in the `.env` file. If you want to save different environment configurations, simply create files (such as `test.env`, `staging.env`). They will be ignored by git, so only visible to you.

## Docker

Docker can be used to run the API.

Build the initial image:

```
docker build -t zanesquadapi .
```

Run the API:

```
docker run -p 3000:3000 --env-file=.env -d zanesquadapi
```

To emulate how it will run in Zeit:

```
docker run -p 443:443 -e PORT=443 -d zanesquadapi
```

# Deployment

The API is hosted on [zeit](https://zeit.co)'s Now platform.

## Now

Once you install the command line tool for Zeit's Now platform, you will be able to deploy any version of the code through the simple `now` terminal command.

Once you kick off a build, Zeit will tell you where to find the deployed feature branch following a format like this:

```
squad-api-XYZ.now.sh
```

Where "XYZ" will be some kind of hash.

## Features

Deploy a feature branch from the command line:

```
now
```

## Environment Variables

Refer to [the docs](https://zeit.co/docs/features/env-and-secrets) for more information about how environment variables are handled by Now.

Now handles variables through secrets:

```
# Create the secret
now secret add acme-api-key my-value-here
# Assign the secret
now -e MY_VARIABLE=@acme-api-key
# Or set it through the `env` property in `now.json`
"env": {
  "MY_VARIABLE": "@acme-api-key"
}
```

By using secrets and the `now.json` file, you can easily deploy with the simple `now` command.

## Port 443

The `PORT` environment variable is required so that the app doesn't run on its default port of 3000. Zeit will automatically detect what port to use, and since the Express Hello World page runs on the default port, Zeit won't try to expose port 3000.


## Launching Production

Use Now Alias to "launch" a specific version to end users:

```
now alias zanesquadapi-HASH.now.sh zanesquad-api
```

The app will be available at https://zanesquad-api.now.sh

# Source

This project is based on the incredibly helpful article by [Michael Herman](https://mherman.org/) found here: https://mherman.org/blog/designing-a-restful-api-with-node-and-postgres/ . This article helped me kick off a Node-Postgres starter that I could easily manipulate for the unique features of this project.

# Dependencies

- [cors](https://www.npmjs.com/package/cors) - Enables CORS with various options
- [dotenv](https://www.npmjs.com/package/dotenv) - Used for environment variables
- [uuid](https://www.npmjs.com/package/uuid) - Used for generating GUIDs
- passport
- passport-local

# LICENSE

ZANESQUAD is proteted under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html) (or GPL 3). Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.

In other words: Feel free to fork, share, and modify the code for your own purposes, but you must also use the GPL3 license
