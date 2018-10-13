# ZaneSquad API - Node MVP

This is an attempt at using Node as the API instead of .NETCore.

I will be following this tutorial: https://mherman.org/blog/designing-a-restful-api-with-node-and-postgres/

It uses the Bluebird package. I don't like using packages that do ES6 just to do ES6, but I don't really have the time to run into issues caused by not following the tutorial.

Features:

* GET Companies: A simple "retrieve all"
* POST User: A simple "create"
* POST Coupon: This is the most complex endpoint. It takes a company and user and uses those guids to create a coupon


