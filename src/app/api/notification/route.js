import { NextResponse } from "next/server"
import connectMongoDB from "../../../lib/mongodb"
import { getServerSession } from "next-auth"
import { nextOption } from "../auth/[...nextauth]/option"
import Notification from "../../../lib/mongodb/notification"

async function GET(req) {
    const data = await getServerSession(nextOption)
    try {
        await connectMongoDB()
        const prod = await Notification.find({ userid: data.user._id})
        return NextResponse.json(prod, { status: 200})
    } catch(error) {
        console.log(error)
    }
}

export { GET }