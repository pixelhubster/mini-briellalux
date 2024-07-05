import { NextResponse } from "next/server"
import { validateNumber, validateName, validateEmail, validatePassword } from "../../../lib/validate"
import connectMongoDB from "../../../lib/mongodb"
import Users from "../../../lib/mongodb/user"
import bcrypt from "bcrypt"

async function POST(req) {
    let { firstname, lastname, email, number, password } = await req.json()
    firstname = firstname.trim()
    lastname = lastname.trim()
    email = email.trim()
    password = password.trim()
    try {
        if (!validateName(firstname)) throw new Error("Firstname cannot contain digits and symbols")
        if (!validateName(lastname)) throw new Error("Lastname cannot contain digits and symbols")
        if (!validateEmail(email)) throw new Error("Email is invalid")
        if (!validateNumber(number)) throw new Error("Number is invalid")
        if (!validatePassword(password)) throw new Error("Password must be 6 or more")
        await connectMongoDB()
        const regEmail = await Users.findOne({ email });
        const regNumber = await Users.findOne({ number });
        if (regEmail) throw new Error("Email already registered")
        if (regNumber) throw new Error("Phone number already used")
        const passhash = await bcrypt.hash(password, 10)
        await Users.create({ firstname, lastname, email, number, password: passhash })
        return NextResponse.json({ message: "Registration succesfull" }, { status: 200 })
    } catch (error) {
        console.log(error.message)
        return NextResponse.json({ error: error.message }, { status: 201 })
    }
}

export { POST }