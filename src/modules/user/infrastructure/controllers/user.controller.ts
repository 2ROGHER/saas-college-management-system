import { Body, Controller, Delete, Param, Query } from '@nestjs/common';
import { UserService } from '../../domain/services/user.service';
import { Get, Put, Post, Patch } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../../dto';
import { UserMapper } from '../../application/mappers';

/**
 * This class is responsible for handling user-related HTTP requests.
 * It defines the endpoints for user operations such as creating, updating, and retrieving users.
 * It layer is the Controller Layer of the application.
 * It acts as a bridge between the HTTP requests and the UserService.
 * This is a [input port] for the application.

 * It hanldes the communication responsibility between the HTTP layer and the service layer.
 */
@Controller({ path: '/api/v1/users', version: '1' })
export class UserController {
  constructor(private readonly __userService: UserService) {}

  // ====================================
  //       CRUD CONTROLLER METHODS
  // ====================================

  @Post('')
  create(@Body() user: CreateUserDto) {
    return this.__userService.createUser(UserMapper.toDomain(user));
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.__userService.findOneUser(id);
  }

  @Get('')
  findAll(@Query('page') page: number = 1, @Query('size') size: number = 10) {
    return this.__userService.findAllUsers(page, size);
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() user: UpdateUserDto) {
    return this.__userService.updateUserById(id, UserMapper.toDomain(user));
  }

  @Patch('/:id')
  updatePartial(@Param('id') id: string, @Body() user: UpdateUserDto) {
    return this.__userService.updatePartialUserById(
      id,
      UserMapper.toDomain(user),
    );
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.__userService.deleteUserById(id);
  }

  // ====================================
  //     OTHER METHODS OF CONTROLLER
  // ====================================
}
