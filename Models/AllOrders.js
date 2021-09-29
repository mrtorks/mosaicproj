import Employee from "./Employee";
import Order from "./Order";

class AllOrders {
  constructor() {
    this.orders = [];
  }

  set addOrder(order) {
    this.orders.push(order);
  }

  get orders() {
    return this.orders;
  }
}

export default AllOrders;
