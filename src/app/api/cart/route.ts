import { getServerSession } from "next-auth";
import { nextOption } from "../auth/[...nextauth]/option";
import connectMongoDB from "@/lib/mongodb";
import Cart from "@/lib/mongodb/cart"
import { NextResponse } from "next/server";

async function GET() {
    const data = await getServerSession(nextOption)
    if (data) {
        try {
            await connectMongoDB()
            const result = await Cart.find({ userid: data.user._id})
            return NextResponse.json(result, { status: 200})
        } catch(error) {
            return NextResponse.json({message: error}, { status: 201})
        }
    }
}
async function POST(req: Request) {
    const { productid, quantity } = await req.json()
    const data = await getServerSession(nextOption)
    if (data) {
        try {
            await connectMongoDB()
            await Cart.create({ userid: data.user._id, productid, quantity })
            return NextResponse.json({ message: "done"}, { status: 200}) 
        } catch(error) {
            return NextResponse.json({message: error}, { status: 201})
        }
    }
}
async function PUT(req: Request) {
    const { quantity, _id, productid }  = await req.json()
    const data = await getServerSession(nextOption)
    if (data) {
        try {
            await connectMongoDB()
            const result = await Cart.findOneAndUpdate({_id, productid, userid: data.user._id}, { quantity })
            console.log(result)
            return NextResponse.json({ message: "done"}, { status: 200})
        } catch(error) {
            return NextResponse.json({message: error}, { status: 201})
        }
    }
}
async function DELETE(req: Response) {
    const { productid } = await req.json()
    const data = await getServerSession(nextOption)
    if (data) {
        try {
            await connectMongoDB()
            const result = await Cart.findOneAndDelete({productid, userid: data.user._id})
            return NextResponse.json({message: "done"}, { status: 200})
        } catch(error) {
            return NextResponse.json({message: error}, { status: 201})
        }
    }
}

export { GET, POST, DELETE, PUT}