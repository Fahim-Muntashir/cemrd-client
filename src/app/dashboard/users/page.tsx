
import UsersTable from '@/components/dashboard/UsersTable'
import { getAllUsers } from '@/services/actions/users'


type Role = 'Admin' | 'Moderator' | 'User'

interface User {
    id: number
    name: string
    email: string
    role: Role
    photo: string
    status: string
}


const UserPage = async () => {

    const initialUsers = await getAllUsers();
    console.log(initialUsers);
    return (
        <UsersTable initialUsers={initialUsers}></UsersTable>
    )
}

export default UserPage;