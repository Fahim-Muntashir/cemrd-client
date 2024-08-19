"use server";


export const SocialLogin = async (values: any) => {

    console.log(values);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/social-login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
        cache: "no-store"
    })

    const userInfo = await res.json();
    return userInfo;
}