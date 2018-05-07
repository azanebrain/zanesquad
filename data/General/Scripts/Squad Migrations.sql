-- Set the database

-- Companies:
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

-- Users:

CREATE TABLE users (
  id			serial			primary key,
  guid			uuid 			NOT NULL,
  name			varchar(100)	NOT NULL,
  username    	varchar(100) 	NOT NULL,
  email       	varchar(100) 	NOT NULL,
  pass        	varchar(100) 	NOT NULL,
  companies   	json			NOT NULL,
  friends		uuid []			NOT NULL,
  inviteCount	int				NOT NULL,
  invitedBy   	uuid			NOT NULL,
  permissions 	varchar(100) []	NOT NULL
);

