import NextAuth from "next-auth/next";
import { nextOption } from "./option";


const handler = NextAuth(nextOption);
export {handler as GET, handler as POST}