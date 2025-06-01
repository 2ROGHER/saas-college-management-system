import { Observable } from 'rxjs';
import { UserEntity } from '../../infrastructure/persistence/typeorm';


export interface IUserRepository {
  // ========================
  //     CRUD METHODS
  // ========================
  create(user: UserEntity): Observable<unknown>;
  findOne(id: string): Observable<unknown>;
  findAll(page: number, size: number): Observable<unknown>;
  update(id: string, user: UserEntity): Observable<unknown>;
  updatePartial(id: string, user: UserEntity): Observable<unknown>;
  delete(id: string): Observable<unknown>;

  // ========================
  //     CUSTOM METHODS
  // ========================

  findOneByEmail(email: string): Observable<unknown>;
  findOneByDni(dni: string): Observable<unknown>;
}
