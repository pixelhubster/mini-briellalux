import { NextResponse } from "next/server"
import connectMongoDB from "../../../lib/mongodb"
import Shipping from "@/lib/mongodb/shipping"
import { getServerSession } from "next-auth"
import { nextOption } from "../auth/[...nextauth]/option"

async function POST(req) {
    const data = await getServerSession(nextOption)
    const { name, state, city, address, altaddress, phonenumber, altphonenumber} = await req.json()
    console.log(data)
    if (data) {
        try {
            await connectMongoDB()
            Shipping.create({ userid: data.user._id, name, state, city, address, altaddress, phonenumber, altphonenumber})
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
        const prod = await Shipping.find({ userid: data.user._id})
        return NextResponse.json(prod, { status: 200})
    } catch(error) {
        console.log(error)
    }
}

async function DELETE(req) {
    const data = await getServerSession(nextOption)
    const {searchParams}  = req.nextUrl
    const id = searchParams.get("id")
    try {
        await connectMongoDB()
        const prod = await Shipping.findOneAndDelete({ userid: data.user._id, _id:id})
        return NextResponse.json(prod, { status: 200})
    } catch(error) {
        console.log(error)
    }
}
export { POST, GET, DELETE }