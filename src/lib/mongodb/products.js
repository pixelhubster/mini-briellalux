import mongoose, { Schema } from "mongoose"

const productSchema = new Schema(
    {
        name: String,
        price: Number,
        shipping: String,
        quantity: Number,
        images: [],
        category: String,
        description: String,
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.models.Products || mongoose.model("Products", productSchema);
export default Product;