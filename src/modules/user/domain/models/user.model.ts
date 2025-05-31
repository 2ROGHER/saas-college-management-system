import { UserStatus } from '../enums/';

/**
 * La capa de dominio en (Clean Architecture y Hexagona Architecture) representa el corazón de la aplicación o el negocio
 * no conoce que existe la capa de infraestructura o la capa de presentación u otra capa u no (tiene dependencia de frameworks o librerías externas ni bases de datos).
 * Esta capa contiene las entidades, los casos de uso y las reglas de negocio.
  * This class represents a User entity in the system.
  * It contains properties such as id, firstName, lastName, dni, address, phone,
  * It class represents the (core) of the business logic of the application.
  * This represents the (core) of the Hexagonal Architecture.

 */
export class User {
  private _id: string;
  private _firstName: string;
  private _lastName: string;
  private _dni: string;
  private _address: string;
  private _phone: string;
  private _pictures: string[];
  private _birthDate: Date = new Date();
  private _status: UserStatus = UserStatus.ACTIVE;

  private _emails: string[];
  private _password: string;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    dni: string,
    address: string,
    phone: string,
    pictures: string[],
    birthDate: Date,
    status: UserStatus,
    password: string,
    emails: string[],
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._dni = dni;
    this._address = address;
    this._phone = phone;
    this._pictures = pictures;
    this._birthDate = birthDate;
    this._status = status;
    this._emails = emails;
    this._password = password;
    this._createdAt = createdAt || new Date();
    this._updatedAt = updatedAt || new Date();
  }

  // ======================
  //      Getters Methods
  // ======================
  get id(): string {
    return this._id;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get dni(): string {
    return this._dni;
  }

  get address(): string {
    return this._address;
  }

  get phone(): string {
    return this._phone;
  }

  get pictures(): string[] {
    return this._pictures;
  }

  get bornDate(): Date {
    return this._birthDate;
  }

  get status(): UserStatus {
    return this._status;
  }

  get emails(): string[] {
    return this._emails;
  }

  get password(): string {
    return this._password;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  // ======================
  //      Setters Methods
  // ======================
  set id(id: string) {
    this._id = id;
  }

  set firstName(firstName: string) {
    this._firstName = firstName;
    this._updatedAt = new Date();
  }

  set lastName(lastName: string) {
    this._lastName = lastName;
    this._updatedAt = new Date();
  }

  set dni(dni: string) {
    this._dni = dni;
    this._updatedAt = new Date();
  }

  set address(address: string) {
    this._address = address;
    this._updatedAt = new Date();
  }

  set phone(phone: string) {
    this._phone = phone;
    this._updatedAt = new Date();
  }

  set pictures(pictures: string[]) {
    this._pictures = pictures;
    this._updatedAt = new Date();
  }

  set birthDate(birthDate: Date) {
    this._birthDate = birthDate;
    this._updatedAt = new Date();
  }

  set status(status: UserStatus) {
    this._status = status;
    this._updatedAt = new Date();
  }

  set emails(email: string) {
    this._emails.push(email);
    this._updatedAt = new Date();
  }

  set password(password: string) {
    this._password = password;
    this._updatedAt = new Date();
  }

  // ======================
  //      Owner Methods
  // ======================
  updateDetails(firstName?: string, lastName?: string): void {
    if (firstName) this._firstName = firstName;
    if (lastName) this._lastName = lastName;
    this._updatedAt = new Date();
  }

  static build(data: any): User {
    return new User(
      data.id,
      data.firstName,
      data.lastName,
      data.dni,
      data.address,
      data.phone,
      data.pictures,
      data.birthDate,
      data.status,
      data.password,
      data.emails,
      data.createdAt,
      data.updatedAt,
    );
  }
}
