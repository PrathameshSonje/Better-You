import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { connectToDatabase } from "@/lib/dbconfig";
import axios from "axios";


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
            await connectToDatabase();
            const currUser = JSON.stringify(user);
            console.log(currUser);
            axios.post('http://localhost:3000/api/signup', user)
                .then((resp) => console.log(resp))
                .catch((e) => console.log(e));
            return true
        },
    }
}
