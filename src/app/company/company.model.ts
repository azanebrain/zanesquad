export interface CreateCompanyPayload {
  name: string;
  url: string;
}

export interface CreateCompaniesResult {
  status: string;
  messag: string;
}

export interface Company {
  guid: string; // GUID
  name: string;
  url: string;
}

export interface RetrieveCompaniesResult {
  data: Company[];
  message: string;
  status: string;
}
