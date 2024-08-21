"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { signIn } from 'next-auth/react'
import { socialUser } from "../../utils/social-user";
import { storeUserInfo } from "@/services/auth.service";

export const Social = () => {
    const handleSocialLogin = async (provider: string) => {

        await signIn(`${provider}`, {
            callbackUrl: "/",
        });
        await socialUser()

        try {
            const res = await socialUser()
            console.log(res);
            if (res?.data?.accessToken) {
                storeUserInfo({ accessToken: res?.data?.accessToken })
            }
        } catch (err: any) {
            console.log(err.message);
        }

    }

    return (
        <div className="flex items-center w-full gap-x-2">
            <Button onClick={() => handleSocialLogin("google")} className="w-full"
                size="lg"
                variant="outline"
            >
                <FcGoogle className="h-5 w-5"

                />
            </Button>
            <Button onClick={() => handleSocialLogin("github")} className="w-full"
                size="lg"
                variant="outline"
            >
                <FaGithub className="h-5 w-5"

                />
            </Button>
        </div>
    )
}