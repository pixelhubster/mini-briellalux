import { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            _id: string,
            number: number,
        } & DefaultSession["user"]
    }
}