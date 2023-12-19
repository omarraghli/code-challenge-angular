import { Role } from "./role";

export interface UserDTO {
    firstName: string;
    lastName: string;
    birthDate: Date;
    city: string;
    country: string;
    avatar: string;
    company: string;
    jobPosition: string;
    mobile: string;
    username: string;
    email: string;
    password: string;
    role: Role;
  }
  

  