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
                username: { label: "username", type: "text" },
                password: { label: "password", type: "text" }
            },
            async authorize(credentials: any): Promise<any> {
                const { username, password } = credentials
                try {
                    await connectMongoDB()
                    const user = await User.findOne({ email: username }) || await User.findOne({ number: username })
                    if (user === null) throw new Error("User isn't registered");
                    const hash = await bcrypt.compare(password, user.password)
                    if (!hash) throw new Error("Credentials Invalid")
                    return {
                        _id: user._id,
                        name: user.firstname + " " + user.lastname,
                        email: user.email,
                        number: user.number,
                    }

                } catch (error: any) {
                    throw new Error(error?.message)
                }
            }
        })

    ],
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                return {
                    ...token,
                    _id: (user as any)._id,
                    number: (user as any).number,
                }
            }
            return token
        },
        async session({ session, token}) {
            session.user._id = token._id as string
            session.user.number = token.number as number
            return session
        },
    },
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: "/signin",
    }
}