import mongoose, { Schema} from "mongoose";

const orderItemSchema = new Schema({
    orderId: String,
    name: String,
    productId: String,
    quantity: Number,
    price: Number,
}, {
    timestamps: true
})

const OrderItem = mongoose.models.orderItem || mongoose.model("orderItem", orderItemSchema)
export default OrderItem