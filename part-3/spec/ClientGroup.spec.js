const ClientGroup = require('../ClientGroup');
const Client = require('../Client');

describe('Класс Группа клиентов', () => {
  let clients;
  beforeEach(() => {
    clients = [
      new Client('Иван', 'Иванов', 'Иванович', '+70001231212', 10),
      new Client('Олег', 'Олегов', 'Олегович', '+70001231213', 5),
    ];
  });
  it('позволяет задать список клиентов', () => {
    const group = new ClientGroup(clients);
    expect(group.clients).toEqual(clients);
  });
  it('позволяет получить Ф.И.О. клиентов', () => {
    const group = new ClientGroup(clients);
    expect(group.getFullNames()).toBe('Иван Иванович Иванов, Олег Олегович Олегов');
  });
});
