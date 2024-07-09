import mongoose, { Schema} from "mongoose";

const notificationSchema = new Schema({
    userid: String,
    header: String,
    info: String
}, {
    timestamps: true
})

const Notification = mongoose.models.notification || mongoose.model("notification", notificationSchema)
export default Notification