const Product = require('../Products');

describe('Product', () => {
  describe('productName', () => {
    it('тест на наличие атрибутов класса `Product`', () => {
      const cola = 'Coka-cola';
      const product = new Product({ productName: cola });
      expect(product.productName).toBe(cola);
    });

    it('должно быть успешно обновленно', () => {
      const chips1 = 'Lays';
      const product = new Product({ productName: chips1 });
      const chips2 = 'Lays';
      product.productName = chips2;
      expect(product.productName).toBe(chips2);
    });
  });

  describe('expirationTime', () => {
    it('тест на наличие атрибутов класса `Product`', () => {
      const time = 72;
      const product = new Product({
        productName: 'Coka-cola',
        expirationTime: time,
      });
      expect(product.expirationTime).toBe(time);
    });
  });

  describe('type', () => {
    it('тест на наличие атрибутов класса `Product`', () => {
      const food = 'еда';
      const product = new Product({
        productName: 'Мясо',
        expirationTime: 12,
        type: food,
      });
      expect(product.type).toBe(food);
    });
  });

  describe('timeAfterManufacture', () => {
    it('тест на наличие атрибутов класса `Product`', () => {
      const time = 12;
      const product = new Product({
        productName: 'Мясо',
        expirationTime: 12,
        type: 'food',
        timeAfterManufacture: time,
      });
      expect(product.timeAfterManufacture).toBe(time);
    });

    it('Устанавливает значение по умолчанию', () => {
      const product = new Product({
        productName: 'Мясо',
        expirationTime: 12,
        type: 'food',
      });
      expect(product.timeAfterManufacture).toBe(0);
    });
  });
});
