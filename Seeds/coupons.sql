-- Initial coupons

insert into "coupons" (Guid, Code, UserId, CompanyId) values
-- User1 has a coupon for Uber
('8ef9afb0-bec3-11e8-a355-52926945912a', 'ubercode1', '1', '1'
),
-- User1 has a coupon for AirBnB
('8ef9b366-bec3-11e8-a355-72437ad17fb1', 'airbnbcode1', '1', '2'
),
-- User1 has a coupon for SiteGround
('8ef9b5e6-bec3-11e8-a355-348f6cf51099','sitegroundcode1', '1', '3'
),
-- User2 has a coupon for SiteGround
('d2bd8f0a-bec3-11e8-a355-529269fb1459','sitegroundcode2', '2', '3'
),
-- User2 has a coupon for BirdTramsportation
('8ef9bb40-bec3-11e8-a355-e29373494f6c', 'birdcode2', '2', '4'
),
-- User2 has a coupon for Robinhood
('8ef9be24-bec3-11e8-a355-8754944842be', 'robinhoodcode2', '2', '5'
);
