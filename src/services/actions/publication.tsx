"use server";

export async function submitPublication(formData: FormData) {
    console.log(formData, "from af");

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/publications/add-publication`, {
        method: 'POST',
        credentials: 'include',
        body: formData,
    });

    const result = await response.json();
    console.log(result);
}
