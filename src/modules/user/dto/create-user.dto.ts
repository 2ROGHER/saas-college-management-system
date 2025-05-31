import { UserStatus } from '../domain/enums';
import { BaseUserDto } from '../domain/interfaces';

/**
 * @description
 * This class represents the Data Transfer Object (DTO) for creating a user.
 * It is used to transfer data between two different layers of the application,
 * specifically from the controller to the service layer.
 * @author Roger Mestanza
 * @version 1.0.0
 * @since 2025-01-01
 *
 */
export interface CreateUserDto extends BaseUserDto {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly dni: string;
  readonly address: string;
  readonly phone: string;
  readonly pictures: string[];
  readonly birthDate: Date;
  readonly status: UserStatus;
  readonly emails: string[];
  readonly password: string;
  readonly createdAt: string;
  readonly updatedAt: string;
}
