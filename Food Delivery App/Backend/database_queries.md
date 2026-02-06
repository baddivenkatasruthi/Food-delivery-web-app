## Sample MongoDB Queries Used in Project

### 1. Save Order
Used when a user places an order.

await Order.create(orderData);

### 2. Get All Orders (Admin)
Used by admin to view all orders.

Order.find();

### 3. Get Restaurant-wise Orders
Used to fetch orders for a specific restaurant/canteen.

Order.find({ restaurantId: id });

### 4. Update Order Status
Used by admin to update order progress.

Order.findByIdAndUpdate(id, { status: "Delivered" });

### 5. Sales Report
Used by admin to calculate total sales.

Order.aggregate([
  { $group: { _id: null, total: { $sum: "$totalAmount" }}}
]);
