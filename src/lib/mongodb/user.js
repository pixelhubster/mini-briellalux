import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    number: Number,
    password: String
}, {
    timestamps: true,
})

const Users = mongoose.models.users || mongoose.model("users", userSchema)
export default Users