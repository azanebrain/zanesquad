-- Add a URL column
ALTER TABLE "companies"
ADD COLUMN URL varchar(250) NOT NULL DEFAULT 'http://AJZane.com';

update companies set url='https://uber.com' where name='Uber'
update companies set url='https://airbnb.com' where name='AirBnB'
update companies set url='https://siteground.com' where name='SiteGround'
update companies set url='https://www.bird.co' where name='Bird Transportation'
update companies set url='https://robinhood.com' where name='Robinhood'

-- Convert all company names to lowercase
UPDATE "companies" SET name=lower(name)

-- Make the NAME column unique
ALTER TABLE "companies" ADD UNIQUE (name);
