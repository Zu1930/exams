const Salesman = require('../Salesman');

describe('Класс Продавец', () => {
  it('позволяет задать имя', () => {
    const firstName = 'Петр';
    const salesman = new Salesman(firstName);
    expect(salesman.firstName).toBe(firstName);
  });
  it('позволяет задать фамилию', () => {
    const lastName = 'Петров';
    const salesman = new Salesman('Петр', lastName);
    expect(salesman.lastName).toBe(lastName);
  });
  it('позволяет задать отчество', () => {
    const middleName = 'Петрович';
    const salesman = new Salesman('Петр', 'Петров', middleName);
    expect(salesman.middleName).toBe(middleName);
  });
  it('позволяет задать телефон', () => {
    const phone = '+70003211212';
    const salesman = new Salesman('Петр', 'Петров', 'Петрович', phone);
    expect(salesman.phone).toBe(phone);
  });
  it('позволяет задать дату приема на работу', () => {
    const date = new Date();
    const salesman = new Salesman('Петр', 'Петров', 'Петрович', '+70001231212', date);
    expect(salesman.hireDate).toBe(date);
  });
  it('позволяет получить Ф.И.О.', () => {
    const salesman = new Salesman('Петр', 'Петров', 'Петрович');
    const fio = salesman.getFullName();
    expect(fio).toBe('Петр Петрович Петров');
  });
});
