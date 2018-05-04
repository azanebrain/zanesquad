CREATE TABLE companies (
  id			serial			primary key,
  guid			uuid 			NOT NULL,
  name			varchar(100)	NOT NULL,
  websiteurl	varchar(100) 	NOT NULL,
  description	varchar(500) 	NOT null
  -- Logo: Image
  -- base64? 
  -- text or bytea? http://engineering.pivotal.io/post/bytea_versus_text_in_postgresql/
);

