class Product {
  constructor({ productName, expirationTime, type, timeAfterManufacture = 0 }) {
    this.productName = productName;
    this.expirationTime = expirationTime;
    this.type = type;
    this.timeAfterManufacture = timeAfterManufacture;
  }
}

module.exports = Product;
