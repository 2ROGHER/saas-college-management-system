import { CreateUserDto } from '../../dto';
import { User } from '../../domain/models/user.model';
import { BaseUserDto } from '../../domain/interfaces';

export class UserMapper {
  public static toDomain<T extends BaseUserDto>(user: T): User {
    return new User(
      user.id,
      user.firstName,
      user.lastName,
      user.dni,
      user.address,
      user.phone,
      user.pictures,
      user.birthDate,
      user.status as any,
      user.password,
      user.emails,
      user.createdAt as any,
      user.updatedAt as any,
    );
  }

  public static toDto(user: User): CreateUserDto {
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
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
    } as CreateUserDto;
  }
}
