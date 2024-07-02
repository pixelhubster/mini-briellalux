import { NextResponse } from "next/server";
import connectMongoDB from "../../../lib/mongodb";
import Product from "../../../lib/mongodb/products"

export async function POST(request) {
    const { description, price, quantity, category, images, name, shipping,} = await request.json();
    await connectMongoDB()
    await Product.create({description, price, quantity, category, images, shipping, name})
    return NextResponse.json({message: "Product Added"}, {status: 201})
}

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams
    let ids = searchParams.get("id")
    await connectMongoDB()
    let product;
    if (!ids) {
        product = await Product.find()
    } else {
        let parsedIds = ids.split(",");
        product = await Product.find({_id: { $in: parsedIds }})
    }
    return NextResponse.json(product)
}