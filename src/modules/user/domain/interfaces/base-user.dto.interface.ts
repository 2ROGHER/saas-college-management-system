import { UserStatus } from "../enums";

export interface BaseUserDto {
  id: string;
  firstName: string;
  lastName: string;
  dni: string;
  address: string;
  phone: string;
  pictures: string[];
  birthDate: Date;
  status: string;
  emails: string[];
  password: string;
  createdAt: string;
  updatedAt: string;
}
