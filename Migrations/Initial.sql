  CREATE TABLE companies (
    id			serial			primary key,
    guid			uuid 			NOT NULL,
    name			varchar(100)	NOT NULL
  );
