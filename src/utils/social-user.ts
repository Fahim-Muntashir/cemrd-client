'use server'
import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";

export const socialUser = async() => {
    const session = await getServerSession(authOptions);
    console.log(session);
    return session;
}

