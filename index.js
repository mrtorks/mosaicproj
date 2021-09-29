import express from "express";
import readline from "readline";
import Employee from "./Models/Employee.js";
import Order from "./Models/Order.js";
import * as path from "path";
const __dirname = path.resolve();
const app = express();
app.listen(3000, () => console.log("Example app listening on port 3000!"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.post("/createOrder", function (req, res) {
  const employee = new Employee();
  const order = new Order();
  employee.employeeName = req.body.name;
  order.orderOwner = req.body.name;
  employee.addOrder = req.body.orderInfo;
  res.redirect(path.join(__dirname, "views", "orders.html"));
});
app.use(
  express.urlencoded({
    extended: false,git
  })
);
app.use(express.json());
app.post(
  ("/createOrder",
  (req, res, next) => {
    const employee = new Employee();
    const order = new Order();
  })
);
