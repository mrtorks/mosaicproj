class Employee {
  constructor() {
    this.employeeName = employeeName;
    this.id = id;
    this.activeOrders = [];
    this.hours = 8;
    this.isBooked = true;
  }

  set employeeName(value) {
    this.employeeName = value;
  }

  set addOrder(order) {
    this.activeOrders.push(order);
  }

  get activeOrders() {
    return this.activeOrders.join(" , ");
  }
}

export default Employee;
