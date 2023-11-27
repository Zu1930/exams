const Client = require('../Client');

describe('Класс Пользователь', () => {
  it('позволяет задать имя', () => {
    const firstName = 'Иван';
    const client = new Client(firstName);
    expect(client.firstName).toBe(firstName);
  });
  it('позволяет задать фамилию', () => {
    const lastName = 'Иванов';
    const client = new Client('Иван', lastName);
    expect(client.lastName).toBe(lastName);
  });
  it('позволяет задать отчество', () => {
    const middleName = 'Иванович';
    const client = new Client('Иван', 'Иванов', middleName);
    expect(client.middleName).toBe(middleName);
  });
  it('позволяет задать телефон', () => {
    const phone = '+70001231212';
    const client = new Client('Иван', 'Иванов', 'Иванович', phone);
    expect(client.phone).toBe(phone);
  });
  it('позволяет задать персональную скидку', () => {
    const discount = 10;
    const client = new Client('Иван', 'Иванов', 'Иванович', '+70001231212', discount);
    expect(client.discount).toBe(discount);
  });
  it('позволяет получить Ф.И.О.', () => {
    const client = new Client('Иван', 'Иванов', 'Иванович');
    const fio = client.getFullName();
    expect(fio).toBe('Иван Иванович Иванов');
  });
});
