import mongoose, { Schema } from "mongoose";

const shippingSchema = new Schema({
    userid: String,
    name: String,
    state: String,
    city: String,
    address: String,
    altaddress: String,
    phonenumber: Number,
    altphonenumber: Number
}, {
    timestamps: true,
})

const Shipping = mongoose.models.shipping || mongoose.model("shipping", shippingSchema)
export default Shipping