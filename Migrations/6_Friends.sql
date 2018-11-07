-- The Friends table is a lookup table that shows which users have decided to become friends

CREATE TABLE "friends" (
  Id       serial 			               primary key,
  Friender serial references users(id) NOT NULL,
  Friendee serial references users(id) NOT NULL,
  UNIQUE (Friender, Friendee)
);
