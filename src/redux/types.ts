export interface userInitialState {
  user: null | userType;
  loggedIn: boolean;
  loading: boolean;
  error: null | string | undefined;
  jwt: null | string;
  users: [] | userType[];
}

interface userType {
  id: number;
  password: string;
  email: string;
  role: "ROLE_ADMIN" | "ROLE_CUSTOMER";
  fullName: string;
}
