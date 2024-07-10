import mongoose, { Schema} from "mongoose";

const cartSchema = new Schema({
    userid: String,
    productid: String,
    quantity: Number,
}, {
    timestamps: true
})

const Cart = mongoose.models.cart || mongoose.model("cart", cartSchema)
export default Cart