import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "../../../server/lib/mongoClient";

export const authOptions = {
	adapter: MongoDBAdapter(clientPromise),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
			profile(profile) {
				console.log(profile);
				return {
					id: profile.sub,
					name: profile.name,
					email: profile.email,
					image: profile.picture,
					role: profile.role ?? "user",
					emailVerified: "true",
					unlockedPowers: [],
				};
			},
		}),
		CredentialsProvider({
			name: "Email",
			credentials: {
				email: { label: "Email", type: "email", placeholder: "example@example.com" },
				password: { label: "Password", type: "password" },
			},
		}),
	],
	callbacks: {
		async session({ session, user, token }) {
			return {
				session,
				user,
				token,
			};
		},
	},
};

export default NextAuth(authOptions);
