
export async function getAllUsers() {

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/all-users`, {
        method: 'GET',
        credentials: 'include',
    });

    const result = await response.json();
    return result.data;
}


export async function updateUserRole(id: string, role: { role: string }) {

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(role),
    });

    if (!response.ok) {
        throw new Error(`Failed to update role: ${response.statusText}`);
    }

    const result = await response.json();
    return result;
}
