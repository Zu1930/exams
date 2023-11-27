module.exports = class Client {
  constructor(firstName, lastName, middleName, phone, discount) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
    this.phone = phone;
    this.discount = discount;
  }

  getFullName() {
    return `${this.firstName} ${this.middleName} ${this.lastName}`;
  }
};
