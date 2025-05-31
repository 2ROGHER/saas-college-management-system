import { User } from '../../domain/models/user.model';
import { UserEntity } from '../persistence/typeorm';

export class UserEntityMapper {
  public static toEntity(user: User): UserEntity {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      dni: user.dni,
      address: user.address,
      phone: user.phone,
      pictures: user.pictures,
      birthDate: user.birthDate,
      status: user.status,
      password: user.password,
      emails: user.emails,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
