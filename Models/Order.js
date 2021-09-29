import randomUUID from "crypto";
import Employee from "./Employee";

class Order {
  constructor() {
    this.orderOwner = orderOwner;
    this.duration = duration;
    this.uniqId = randomUUID();
    this.isCancelled = false;
    this.isActive = true;
  }

  set isCancelled() {
    this.isCancelled = true;
  }
  set isActive() {
    this.isActive= false;
  }
}

export default Order;
