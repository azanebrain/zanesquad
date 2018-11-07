-- Initial Friend Requests

-- Default Friend Requests
insert into "friendrequests" (Guid, Requester, Recipient) values
('a965f72a-dde3-11e8-9f32-f2801f1b9fd1', '1', '3');

-- Accepted Friend Requests
insert into "friendrequests" (Guid, Requester, Recipient, Status) values
('d1410e02-e297-11e8-9f32-f2801f1b9fd1', '1', '4', 'ACCEPTED');
