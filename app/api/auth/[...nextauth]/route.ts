
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import {PrismaClient } from '@prisma/client';

// pages: {
//     signIn: '/auth/signin',
//     signOut: '/auth/signout',
//     error: '/auth/error', // Error code passed in query string as ?error=
//     verifyRequest: '/auth/verify-request', // (used for check email message)
//     newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
//   }

const client = new PrismaClient();

 export const handler = NextAuth({
    providers: [
  CredentialsProvider({
    name: "email",
  
    credentials: {
      email: { label: "Email", type: "text", placeholder: "lavkushwaha@gmail.com" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {

    const user = await client.user.findFirst({
      where: {
        email: credentials?.email,
        password: credentials?.password
      }
    });

    if (user) {
      return {
        id: user.id.toString(),
        name: user.name,
        email: user.email,
      };
    } else {
      const newuser = await client.user.create({
        data: {
          email: credentials?.email ?? "",
          password: credentials?.password,
        }
      });
      return {
        id: newuser.id.toString(),
        name: newuser.name,
        email: newuser.email,
      };
    }
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
  }),
],

 callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        
        const existingUser = await client.user.findUnique({
          where: {
            email: profile?.email 
          }
        })
        if (!existingUser) {
          await client.user.create({
            data: {
              name: profile?.name,
              email: profile?.email ?? "",
              password: null
            }
          });
        }
      }
      return true;
    },
  },
 secret: process.env.NEXTAUTH_SECRET
 })


export const GET = handler;
export const POST = handler;


