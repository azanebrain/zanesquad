  CREATE TABLE "users" (
    Id        serial			  primary key,
    Guid      uuid 			    NOT NULL,
    Email     varchar(255)	NOT NULL UNIQUE,
    Password  varchar(255)	NOT NULL,
    Username  varchar(100)	NOT NULL UNIQUE
  );
