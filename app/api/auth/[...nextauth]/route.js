import { connectMongoDB } from "/lib/mongodb";
import User from "/models/User";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';

// Define authOptions object
const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            
            async authorize(credentials) {
                const {email, password} = credentials;
                
                try {
                    await connectMongoDB();
                    const user = await User.findOne({ email });

                    if (!user) return null;
                    
                    const passwordsMatch = await bcrypt.compare(password, user.password);

                    if (!passwordsMatch) return null;
                    
                    console.log('User with ID: ', user._id, ' and Email of: ', user.email, ' has logged in successfully!')

                    return user;
                } catch (error) {
                    console.log('Login Error: ', error)
                }

            }
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET, 
    pages: {
        signIn: '/login',
    }
};

// Create NextAuth handler
const handler = NextAuth(authOptions);

// Export handler for both GET and POST requests
export { handler as GET, handler as POST };
