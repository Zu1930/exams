const SalesmanGroup = require('../SalesmanGroup');
const Salesman = require('../Salesman');

describe('Класс Группа продавцов', () => {
  let salesmen;
  beforeEach(() => {
    salesmen = [
      new Salesman('Олег', 'Олегов', 'Олегович', '+71111231213', new Date('2005-05-05')),
      new Salesman('Иван', 'Иванов', 'Иванович', '+71111231212', new Date('2006-10-11')),
    ];
  });
  it('позволяет задать список продавцов', () => {
    const group = new SalesmanGroup(salesmen);
    expect(group.salesmen).toEqual(salesmen);
  });
  it('позволяет получить Ф.И.О. продавцов', () => {
    const group = new SalesmanGroup(salesmen);
    expect(group.getFullNames()).toBe('Олег Олегович Олегов, Иван Иванович Иванов');
  });
});
