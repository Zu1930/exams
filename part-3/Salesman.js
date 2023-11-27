module.exports = class Salesman {
  constructor(firstName, lastName, middleName, phone, hireDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
    this.phone = phone;
    this.hireDate = hireDate;
  }

  getFullName() {
    return `${this.firstName} ${this.middleName} ${this.lastName}`;
  }
};
