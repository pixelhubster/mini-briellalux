import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "../../../lib/mongodb";
import Product from "../../../lib/mongodb/products"
import mongoose from "mongoose";
import { split } from "postcss/lib/list";
import { parse } from "path";

export async function POST(request) {
    const { description, price, quantity, category, images, name, shipping,} = await request.json();
    await connectMongoDB()
    await Product.create({description, price, quantity, category, images, shipping, name})
    return NextResponse.json({message: "Product Added"}, {status: 201})
}

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams
    let ids = searchParams.get("id")
    // let parsed = ids.split(",")
    
    await connectMongoDB()
    let product;
    if (!ids) {
        product = await Product.find()
    } else {
        let parsedIds = ids.split(",");
        console.log("parsed", parsedIds)
        product = await Product.find({_id: { $in: parsedIds }})
        console.log(product)
    }
    return NextResponse.json(product)
}