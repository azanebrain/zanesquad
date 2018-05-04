# The Squad

This practice project allows friends to share coupon codes for their favorite companies.

This document contains general overview of the entire project. The different parts of the application can be found in orphan branches:

* [API](https://github.com/azanebrain/zanesquad/tree/api/master)
* [Database](https://github.com/azanebrain/zanesquad/tree/db/master)
* [Web Client](https://github.com/azanebrain/zanesquad/tree/webclient/master)

## Data Structure

Assumptions: A user can only have 1 code per service

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

## Actions

This list aggregates the actions users will be able to take on the site

* Register
* Login
* Add a service (select existing, or add new)
* Update coupon code of existing service
* Remove my service
* Add a friend
* Remove a friend
* View friend's coupons

