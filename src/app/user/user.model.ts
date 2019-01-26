export interface LoginRequestParms {
  username: string;
  password: string;
}

export interface User {
  fullname: string;
  guid: string; // GUID
}

export interface UserCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  status: string;
  data: User;
  message: string;
}

export interface UserSearchResponse {
  status: string;
  data: User[];
  message: string;
}
