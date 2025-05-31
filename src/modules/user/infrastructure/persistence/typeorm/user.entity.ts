import { Entity, ObjectIdColumn } from 'typeorm';
import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { UserStatus } from '../../../domain/enums/';

/**
 * Class UserEntity
 *
 * This class represents a User entity.
 * This class is responsible to map the user data to the user entity.
 * It contains the user fields and their types.
 * The fields are:
 * - id: the user id, it is a uuid and the primary key of the entity.
 * - firstName: the user first name, it is a string.
 * - lastName: the user last name, it is a string.
 * - dni: the user dni, it is a string.
 * - address: the user address, it is a string.
 * - phone: the user phone, it is a string.
 * - pictures: the user pictures, it is an array of strings.
 * - birthDate: the user birth date, it is a date.
 * - status: the user status, it is an enum of UserStatus.
 * - emails: the user emails is a simple array of strings.
 * - password: the user password, it is a string.
 * - createdAt: the date when the user was created, it is a date.
 * - updatedAt: the date when the user was updated, it is a date.
 *
 * @author Roger Mestanza
 * @version 1.0.0
 * @since 2025-01-01
 * @license MIT
 */
@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  @ObjectIdColumn({
    type: 'uuid',
    generated: 'uuid',
    unique: true,
    nullable: false,
    name: 'id',
    primary: true,
  })
  id: string;

  @Column({ type: 'string', length: 20, name: 'first_name' })
  firstName: string;

  @Column({ type: 'string', length: 30, name: 'last_name' })
  lastName: string;

  @Column({ type: 'string', length: 20, unique: true, name: 'dni' })
  dni: string;

  @Column({
    type: 'string',
    length: 50,
    nullable: true,
    default: null,
    name: 'address',
  })
  address: string;

  @Column({
    type: 'string',
    length: 15,
    nullable: true,
    default: null,
    name: 'phone',
  })
  phone: string;

  @Column({
    type: 'simple-array',
    nullable: true,
    default: [],
    name: 'pictures',
  })
  pictures: string[];

  @Column({ type: 'date', nullable: true, default: null, name: 'birth_date' })
  birthDate: Date;

  @Column({
    type: 'simple-enum',
    enum: UserStatus,
    default: UserStatus.ACTIVE,
    name: 'status',
  })
  status: string;

  @Column({ type: 'simple-array', nullable: true, default: [], name: 'email' })
  emails: string[];

  @Column({
    type: 'string',
    length: 255,
    name: 'password',
    nullable: false,
    default: '',
    select: false,
  })
  password: string;

  @Column({
    type: 'date',
    name: 'created_at',
    default: new Date(),
    select: false,
    nullable: true,
  })
  createdAt: Date;

  @Column({
    type: 'date',
    name: 'updated_at',
    default: new Date(),
    select: false,
    nullable: true,
  })
  updatedAt: Date;
}
