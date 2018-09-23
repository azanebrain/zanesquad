CREATE TABLE "coupons" (
  Id        serial			                    primary key,
  Guid      uuid 			                      NOT NULL,
  Code      varchar(255)	                  NOT NULL,
  UserId    serial references users(id)     NOT NULL,
  CompanyId serial references companies(id) NOT NULL,
  UNIQUE (UserId, CompanyId)
);
