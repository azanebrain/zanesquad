# The Squad

This practice project allows friends to share coupon codes for their favorite companies.

This document contains a general overview of the entire project. The different parts of the application can be found in orphan branches:

* [API](https://github.com/azanebrain/zanesquad/tree/api/master)
* [Database](https://github.com/azanebrain/zanesquad/tree/db/master)
* [Web Client](https://github.com/azanebrain/zanesquad/tree/webclient/master)

## Data Structure

Assumptions: A user can only have 1 code per company

### Users
* ID
* GUID
* Name: string
* Username: string (needed when using FaceBook auth?)
* Email: string 
* Pass: string
* Companies: CompanyDocument[]
* Friends: Uuid[] // Other user guids
* InviteCount: int
* InvitedBy: Guid
* Permissions: string[]

### Companies
* ID
* GUID
* Name: String
* WebsiteURL: string
* Description: string
* Logo: Image

### CompanyDocument
* CompanyGUID: Uuid
* CouponCode: string
* CouponDescription: string

## Actions

This list aggregates the actions users will be able to take on the site

* Register
* Login
* Add a company (select existing, or add new)
* Update coupon code of existing company
* Update coupon description of existing company
* Remove my company
* Add a friend
* Remove a friend
* View friend's coupons

## Roadmap

[x] Initial project setup: Orphan branches to separate API, DB, client, and project info
[x] File restructure
[ ] Tests for getting a response of companies
[ ] Add User entity, migration, etc
[ ] As a user, add an existing company to my portfolio
[ ] As a user add a coupon to my company
[ ] As a user add a new company
[ ] Update an existing coupon
[ ] Remove a company
[ ] Introduce the concept of "this user" (register and login?)
[ ] Add a friend
[ ] Remove a friend
[ ] View a friend's coupons

