module.exports = class ClientGroup {
  constructor(clients) {
    this.clients = clients;
  }

  getFullNames() {
    return this.clients.map((x) => x.getFullName()).join(', ');
  }
};
