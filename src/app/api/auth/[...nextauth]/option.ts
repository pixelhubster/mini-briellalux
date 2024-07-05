import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import connectMongoDB from '@/lib/mongodb/index'
import User from "@/lib/mongodb/user"
// @ts-expect-error
import bcrypt from "bcrypt"

export const nextOption: NextAuthOptions = {
    providers: [
        Credentials({
            name: "credentials",
            credentials: {
                username: { label: "username", type: "text"},
                password: { label: "password", type: "text"}
            },
            async authorize(credentials: any): Promise<any> {
                const { username, password} = credentials
                console.log("done")
                console.log(username, password)
                try {
                    await connectMongoDB()
                    const user = await User.findOne({ email: username }) || await User.findOne({ number: username })
                    if (user === null) throw new Error("User isn't registered");
                    const hash = await bcrypt.compare(password, user.password)
                    if (!hash) throw new Error("Credentials Invalid")
                    return user
                } catch(error: any) {
                    throw new Error(error?.message)
                }
            }
        })

    ],
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: "/signin",
    }
}