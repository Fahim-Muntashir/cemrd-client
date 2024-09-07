'use server'

export const getFacultyProfileInfo = async (id: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/faculty-details/${id}`, {
        cache: 'no-store',
        method: 'GET',
        credentials: 'include',
    });

    const result = await response.json();
    return result.data;
}
export const getAllFaculty = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/all-faculty/`, {
        cache: 'no-store',
        method: 'GET',
        credentials: 'include',
    });

    const result = await response.json();
    return result.data;
}

