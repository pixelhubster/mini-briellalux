import mongoose, { Schema} from "mongoose";

const orderSchema = new Schema({
    userid: String,
    status: String,
    total_price: Number,
    refcode: String
}, {
    timestamps: true
})

const Orders = mongoose.models.orders || mongoose.model("orders", orderSchema)
export default Orders