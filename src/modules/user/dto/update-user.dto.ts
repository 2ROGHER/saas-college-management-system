import { BaseUserDto } from "../domain/interfaces";

export interface UpdateUserDto extends BaseUserDto {
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
  updatedAt: string;
}
