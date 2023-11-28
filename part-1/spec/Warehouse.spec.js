const Warehouse = require('../Warehouse');
const Product = require('../Products');

describe('Тесты для класса "Warehouse" ', () => {
  let warehouse;
  let product1;
  let product2;
  let product3;
  let product4;
  let product5;
  let product6;
  let product7;
  let product8;
  let arrProduct;

  beforeEach(() => {
    product1 = new Product({
      productName: 'яйца',
      expirationTime: 24,
      type: 'foods',
    });
    product2 = new Product({
      productName: 'мясо',
      expirationTime: 12,
      type: 'foods',
    });
    product3 = new Product({
      productName: 'кола',
      expirationTime: 1000,
      type: 'drinks',
    });
    product4 = new Product({
      productName: 'хлеб',
      expirationTime: 17,
      type: 'foods',
    });
    product5 = new Product({
      productName: 'замороженная пицца',
      expirationTime: 72,
      type: 'foods',
    });
    product6 = new Product({
      productName: 'яблочный свежевыжатый сок',
      expirationTime: 6,
      type: 'drinks',
    });
    product7 = new Product({
      productName: 'мыло',
      expirationTime: 1200,
      type: 'хозяйственные товары',
    });

    product8 = {
      productName: 'замороженная пицца',
      expirationTime: 72,
      type: 'foods',
      timeAfterManufacture: 17,
    };

    arrProduct = [
      {
        productName: 'мясо',
        expirationTime: 12,
        type: 'foods',
        timeAfterManufacture: 17,
      },
      {
        productName: 'хлеб',
        expirationTime: 17,
        type: 'foods',
        timeAfterManufacture: 17,
      },
      {
        productName: 'яблочный свежевыжатый сок',
        expirationTime: 6,
        type: 'drinks',
        timeAfterManufacture: 17,
      },
    ];

    warehouse = new Warehouse();
  });

  describe('Проверка наличия методов экземпляра класса Warehouse', () => {
    it('У экземпляра склада присутствует метод acceptanceOfGoods', () => {
      expect(warehouse.acceptanceOfGoods).toBeDefined();
    });

    it('У экземпляра склада присутствует метод passTime ', () => {
      expect(warehouse.passTime).toBeDefined();
    });

    it('У экземпляра склада присутствует метод revision ', () => {
      expect(warehouse.revision).toBeDefined();
    });
  });

  describe('Тестирование работы методов Warehouse', () => {
    describe('Метод acceptanceOfGoods', () => {
      it('Метод acceptanceOfGoods не принимает на склад товары не из категорий "foods" и "drinks" ', () => {
        warehouse.acceptanceOfGoods([product7]);
        expect(warehouse.foods).toEqual([]);
        expect(warehouse.drinks).toEqual([]);
      });

      it('Метод acceptanceOfGoods принимает на склад товары и сортирует их по типу', () => {
        warehouse.acceptanceOfGoods([
          product1,
          product2,
          product3,
          product4,
          product5,
          product6,
          product7,
        ]);

        expect(warehouse.foods).toEqual([
          product1,
          product2,
          product4,
          product5,
        ]);
        expect(warehouse.drinks).toEqual([product3, product6]);
      });
    });

    describe('Метод passTime', () => {
      it('Метод passTime принимает число и увеличивает свойство timeAfterManufacture  для каждого продукта на складе на указанное количество времени ', () => {
        warehouse.acceptanceOfGoods([product1, product4, product3]);
        warehouse.passTime(5);
        expect(warehouse.foods[0].timeAfterManufacture).toBe(5);
        expect(warehouse.drinks[0].timeAfterManufacture).toBe(5);
      });

      it('Метод passTime не мутирует исходные данные', () => {
        warehouse.acceptanceOfGoods([product1, product4, product5]);
        warehouse.passTime(5);
        expect(warehouse.foods[0]).not.toBe(product1);
        expect(warehouse.foods[1]).not.toBe(product4);
        expect(warehouse.foods[2]).not.toBe(product5);
      });

      it('Метод passTime корректно работает при нескольких применениях', () => {
        warehouse.acceptanceOfGoods([product1, product4, product7]);
        warehouse.passTime(12);
        warehouse.passTime(5);
        expect(warehouse.foods[0].timeAfterManufacture).toBe(17);
        expect(warehouse.foods[1].timeAfterManufacture).toBe(17);
        expect(product7.timeAfterManufacture).toBe(0);
      });
    });

    describe('Метод revision', () => {
      it('Метод revision возвращает все продукты в которых timeAfterManufacture больше или равен expirationTime', () => {
        warehouse.acceptanceOfGoods([
          product1,
          product2,
          product3,
          product4,
          product6,
        ]);
        warehouse.passTime(17);
        const result = warehouse.revision();
        expect(result).toEqual(arrProduct);
      });

      it('Метод revision не осталяет на складе просроченные продукты', () => {
        warehouse.acceptanceOfGoods([product5, product2]);
        warehouse.passTime(17);
        warehouse.revision();
        expect(warehouse.foods).toEqual([product8]);
      });
    });
  });
});
