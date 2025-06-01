import { Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/modules/user/domain/repositories';

import { UserEntity } from '../typeorm';

import { Observable, from, map } from 'rxjs';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private readonly __prismaService: PrismaService) {}
  // ===================================================================
  //    NOTE: This class represents the [output port] of the application.
  //    Here we need to mapper the domain models to the database
  //    entities (UserEntity to Prisma User model).
  // ===================================================================
  create(user: UserEntity): Observable<UserEntity> {
    // Ensure 'email' is present and is a string (not 'emails' as array)
    return from(this.__prismaService.user.create({ data: user })).pipe(
      map((row) => row as UserEntity),
    );
  }

  findOne(id: string): Observable<UserEntity> {
    return from(this.__prismaService.user.findUnique({ where: { id } })).pipe(
      map((row) => row as UserEntity),
    );
  }

  findAll(page: number, size: number): Observable<UserEntity[]> {
    return from(
      this.__prismaService.user.findMany({
        skip: (page - 1) * size,
        take: size,
        orderBy: { createdAt: 'desc' }, // Optional: Order by createdAt or any other field
        where: {}, // Optional: Add any filtering conditions here
      }),
    ).pipe(map((row) => row as UserEntity[]));
  }

  update(id: string, user: UserEntity): Observable<UserEntity> {
    return from(
      this.__prismaService.user.update({ where: { id }, data: user }),
    ).pipe(map((row) => row as UserEntity));
  }

  updatePartial(id: string, user: UserEntity): Observable<UserEntity> {
    return from(
      this.__prismaService.user.update({ where: { id }, data: user }),
    ).pipe(map((row) => row as UserEntity));
  }

  delete(id: string): Observable<UserEntity> {
    return from(this.__prismaService.user.delete({ where: { id } })).pipe(
      map((row) => row as UserEntity),
    );
  }
  findOneByEmail(email: string): Observable<unknown> {
    throw new Error('Method not implemented.');
  }
  findOneByDni(dni: string): Observable<unknown> {
    throw new Error('Method not implemented.');
  }
}
