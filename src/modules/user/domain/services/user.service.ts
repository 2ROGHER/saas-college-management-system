import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../infrastructure/persistence/repositories';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { CreateUserDto } from '../../dto';
import { UserEntityMapper } from '../../infrastructure/mappers';

/**
 * Class representing the UserService.
 * This service is responsible for user-related operations.
 * This class service represents the (Service Layer) of the application.
 * It contains the user methods and their implementations.
 * It acts as a bridge between the controller and the repository.
 * This is a [input port] for the application.
 * It is a [Domain Service]
 * @author Roger Mestanza
 */
@Injectable()
export class UserService {
  constructor(private readonly __userRepository: UserRepository) {}

  // This method is repsonsible to handle the get all users request.
  // This method handle the business service logic of the domain

  createUser(user: User) {
    // Here we need to map the CreateUserDto to the User model.
    // This is a good place to validate the user data.
    return this.__userRepository.create(UserEntityMapper.toEntity(user));
  }

  findOneUser(id: string) {
    return this.__userRepository.findOne(id);
  }

  findAllUsers(page: number, size: number) {
    return this.__userRepository.findAll(page, size);
  }

  updateUserById(id: string, user: User) {
    return this.__userRepository.update(id, UserEntityMapper.toEntity(user));
  }

  updatePartialUserById(id: string, user: User) {
    return this.__userRepository.updatePartial(
      id,
      UserEntityMapper.toEntity(user),
    );
  }

  deleteUserById(id: string) {
    return this.__userRepository.delete(id);
  }
}
