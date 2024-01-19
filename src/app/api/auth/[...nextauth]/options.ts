import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { connectToDatabase } from "@/lib/dbconfig";
import axios from "axios";
import { User } from "@/models/userModel";
import { error } from "console";


export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET as string,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
    ],
    callbacks: {
        async signIn({ user }) {
            try {
                await connectToDatabase();

                const existingUser = await User.findOne({ email: user.email });

                if (existingUser) {
                    console.log('User already exists');
                    return true;
                }

                const newUser = new User({
                    name: user.name,
                    email: user.email
                });

                await newUser.save();

                console.log('New user created');
                return true;
            } catch (error) {
                console.error('Error during sign-in:', error);
                return false;
            }
        }

    }
}
