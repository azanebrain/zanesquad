export interface CreateFriendRequestPayload {
  recipient: string; // GUID
}

export interface CreateFriendRequestResponse {
  recipient: string; // GUID
  requester: string; // GUID
}

export interface FriendRequest {
  guid: string;
  fullname: string;
  username: string;
}

export interface FriendRequestListResponse {
  status: string;
  data: FriendRequest[];
  message: string;
}
