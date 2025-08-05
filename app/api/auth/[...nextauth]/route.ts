
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import { PrismaClient } from '@prisma/client';


const client = new PrismaClient();

 const handler = NextAuth({
    providers: [
  CredentialsProvider({
    name: "email",
  
    credentials: {
      email: { label: "Email", type: "text", placeholder: "lavkushwaha@gmail.com" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
      const email = req.body?.email;
      const password= req.body?.password;

      const  users = await client.user.findFirst({
    where: {
     username: email,
     password:password
    }
      })

      if(users){
         return {
        name: "lav kumar",
        id: "19",
        username: "lavkushwaha062"      
      }
      }
      // If authentication fails, return null
      return null;
    }
  }),
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID ?? "",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
  })

],
 secret: process.env.NEXTAUTH_SECRET
 })


export const GET = handler;
export const POST = handler;

