const Warehouse = require('../Warehouse');
const Product = require('../Products');

describe('Склад', () => {
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
    product1 = new Product('яйца', 24, 'еда');
    product2 = new Product('мясо', 12, 'еда');
    product3 = new Product('кола', 1000, 'напитки');
    product4 = new Product('хлеб', 17, 'еда');
    product5 = new Product('замороженная пицца', 72, 'еда');
    product6 = new Product('яблочный свежевыжатый сок', 6, 'напитки');
    product7 = new Product('мыло', 1200, 'хозяйственные товары');
    product8 = {
      productName: 'мясо',
      expirationTime: 12,
      type: 'еда',
      timeAfterManufacture: 17,
    };

    arrProduct = [
      {
        productName: 'мясо',
        expirationTime: 12,
        type: 'еда',
        timeAfterManufacture: 17,
      },
      {
        productName: 'хлеб',
        expirationTime: 17,
        type: 'еда',
        timeAfterManufacture: 17,
      },
      {
        productName: 'яблочный свежевыжатый сок',
        expirationTime: 6,
        type: 'напитки',
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
      it('Метод acceptanceOfGoods не принимает на склад товары не из категорий "еда" и "напитки', () => {
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
      it('Метод passTime принимает число и прибавляет его к свойству timeAfterManufacture каждому продукту на складе ', () => {
        warehouse.acceptanceOfGoods([product1, product4, product3]);
        warehouse.passTime(5);
        expect(warehouse.foods[0].timeAfterManufacture).toBe(5);
        expect(warehouse.drinks[0].timeAfterManufacture).toBe(5);
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
        console.log(warehouse);
        warehouse.acceptanceOfGoods([
          product1,
          product2,
          product3,
          product4,
          product6,
        ]);
        warehouse.passTime(17);
        const result = warehouse.revision();
        console.log(result);
        expect(result).toEqual(arrProduct);
      });
      it('Метод revision не осталяет на складе просроченные продукты', () => {
        warehouse.acceptanceOfGoods([product5, product2]);
        warehouse.passTime(17);
        warehouse.revision();
        console.log(warehouse.foods);
        expect(warehouse.foods).toEqual([product8]);
      });
    });
  });
});
