export interface LoginRequestParms {
  username: string;
  password: string;
}

export interface User {
  fullname: string;
}

export interface LoginResponse {
  status: string;
  data: User;
  message: string;
}
