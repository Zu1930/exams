class Product {
  constructor(productName, expirationTime, type) {
    this.productName = productName;
    this.expirationTime = expirationTime;
    this.type = type;
    this.timeAfterManufacture = 0;
  }
}

module.exports = Product;
