import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

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
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "username:",
                    type: "text",
                    placeholder: "Your Username"
                },
                password: {
                    label: "password",
                    type: "password",
                    placeholder: "password"
                }
            },
            async authorize(credentials) {
                const res = await fetch("http://localhost:3000/api/signup", {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                  })
                  const user = await res.json()
            
                  // If no error and we have user data, return it
                  if (res.ok && user) {
                    return user
                  }
                  // Return null if user data could not be retrieved
                  return null
            }
        })
    ],
}
