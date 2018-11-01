  CREATE TABLE "friendrequests" (
    Id        serial			                primary key,
    Guid      uuid 			                  NOT NULL,
    Requester serial references users(id) NOT NULL,
    Recipient serial references users(id) NOT NULL,
    Status    varchar(100)                NOT NULL DEFAULT 'OPEN',
    UNIQUE (Requester, Recipient)
  );
