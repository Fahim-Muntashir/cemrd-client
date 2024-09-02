"use server";

export async function submitPublication(formData: FormData) {
    console.log(formData, "from af");

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/publications/add-publication`, {
        method: 'POST',
        credentials: 'include',
        body: formData,
    });

    const result = await response.json();
    return result;

}

export async function getAllPublications() {

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/publications/all-publications`, {
        method: 'GET',
        credentials: 'include',
    });

    const result = await response.json();
    return result.data;
}

export async function getSinglePublication(id: string) {

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/publications/${id}`, {
        method: 'GET',
        credentials: 'include',
    });

    const result = await response.json();
    return result.data;
}
