"use server";


export const addMessage = async (data: any) => {
    console.log(data);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/messages/add-message`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        cache: "no-store"
    })

    const message = await res.json();


    return message;
}