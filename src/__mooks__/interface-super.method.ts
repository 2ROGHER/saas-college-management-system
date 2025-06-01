import { Injectable } from '@nestjs/common';
import { Observable, from, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUserRepository } from 'src/modules/user/domain/repositories';

interface User {
  id: string;
  email: string;
  dni: string;
  [key: string]: any;
}

@Injectable()
export class UserRepository implements IUserRepository {
  private users: User[] = [];

  create(user: User): Observable<User> {
    user.id = (Math.random() * 1000000).toFixed(0);
    this.users.push(user);
    return of(user);
  }

  findOne(id: string): Observable<User | undefined> {
    const user = this.users.find((u) => u.id === id);
    return of(user);
  }

  findAll(page: number, size: number): Observable<User[]> {
    const start = (page - 1) * size;
    const end = start + size;
    return of(this.users.slice(start, end));
  }

  update(id: string, user: User): Observable<User | undefined> {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) return of(undefined);
    this.users[index] = { ...user, id };
    return of(this.users[index]);
  }

  updatePartial(id: string, user: Partial<User>): Observable<User | undefined> {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) return of(undefined);
    this.users[index] = { ...this.users[index], ...user, id };
    return of(this.users[index]);
  }

  delete(id: string): Observable<boolean> {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) return of(false);
    this.users.splice(index, 1);
    return of(true);
  }

  findOneByEmail(email: string): Observable<User | undefined> {
    const user = this.users.find((u) => u.email === email);
    return of(user);
  }

  findOneByDni(dni: string): Observable<User | undefined> {
    const user = this.users.find((u) => u.dni === dni);
    return of(user);
  }
}
