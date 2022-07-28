export interface User {}

export interface UserLogin {
  usr_email: string;
  usr_password: string;
}

export interface UserRegister {
  usr_fullname: string;
  usr_email: string;
  usr_party: string;
  usr_gender: string;
  usr_password: string;
}
