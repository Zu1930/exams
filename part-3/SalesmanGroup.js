module.exports = class SalesmanGroup {
  constructor(salesmen) {
    this.salesmen = salesmen;
  }

  getFullNames() {
    return this.salesmen.map((x) => x.getFullName()).join(', ');
  }
};
