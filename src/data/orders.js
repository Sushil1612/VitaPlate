export const orderStatus = {
  NEW: 'new',
  PENDING: 'pending',
  COMPLETED: 'completed',
  REJECTED: 'rejected'
};

export const orderTypes = {
  TIFFIN: 'tiffin',
  PACKAGE: 'package',
  SUBSCRIPTION: 'subscription'
};

export const initialOrders = [
  {
    id: 1,
    type: orderTypes.TIFFIN,
    customer: "Rahul Sharma",
    items: [{ name: "Veg Thali", qty: 2 }],
    status: orderStatus.PENDING,
    date: '2023-11-20',
    amount: 240
  },
  {
    id: 2,
    type: orderTypes.TIFFIN,
    customer: "Priya Patel",
    items: [{ name: "Non-Veg Thali", qty: 1 }],
    status: orderStatus.NEW,
    date: '2023-11-21',
    amount: 150
  },
  {
    id: 3,
    type: orderTypes.PACKAGE,
    customer: "Amit Singh",
    items: [{ name: "Weekly Meal Plan", qty: 1 }],
    status: orderStatus.COMPLETED,
    date: '2023-11-18',
    amount: 1200
  }
];