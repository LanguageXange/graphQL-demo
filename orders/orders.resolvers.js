import { getAllOrders } from "./orders.model.js";

export const Query = {
  orders: () => {
    return getAllOrders();
  },
};
