export interface userDataType {
  name: string;
  password: string;
}
export interface authResponse {
  jwt: string;
  message: string;
  status: boolean;
}
export interface registerProps {
  email: string;
  password: string;
  role: "ROLE_ADMIN" | "ROLE_CUSTOMER";
  fullName: string;
}
