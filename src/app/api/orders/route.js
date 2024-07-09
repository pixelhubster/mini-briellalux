import { NextResponse } from "next/server"
import connectMongoDB from "../../../lib/mongodb"
import Orders from "@/lib/mongodb/orders"
import { getServerSession } from "next-auth"
import { nextOption } from "../auth/[...nextauth]/option"

async function POST(req) {
    const data = await getServerSession(nextOption)
    const { name, state, city, address, altaddress, phonenumber, altphonenumber} = await req.json()
    console.log(data)
    if (data) {
        try {
            await connectMongoDB()
            Orders.create({ userid: data.user._id, name, state, city, address, altaddress, phonenumber, altphonenumber})
            return NextResponse.json({ message: "done"}, {status: 200})
        } catch(error) {
            return NextResponse.json({ message: "Error"}, { status: 201})
        }
    }
}

async function GET(req) {
    const data = await getServerSession(nextOption)
    try {
        await connectMongoDB()
        const prod = await Orders.find({ userid: data.user._id})
        return NextResponse.json(prod, { status: 200})
    } catch(error) {
        console.log(error)
    }
}

export { GET, POST}