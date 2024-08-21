'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { MoreHorizontal, UserCog, Trash, Ban } from 'lucide-react'

type Role = 'Admin' | 'Moderator' | 'User'

interface User {
    id: number
    name: string
    email: string
    role: Role
    photo: string
}

const initialUsers: User[] = [
    {
        id: 1,
        name: "Olivia Martin",
        email: "olivia.martin@email.com",
        role: "Admin",
        photo: "/placeholder.svg?height=40&width=40",
    },
    {
        id: 2,
        name: "Jackson Lee",
        email: "jackson.lee@email.com",
        role: "User",
        photo: "/placeholder.svg?height=40&width=40",
    },
    {
        id: 3,
        name: "Isabella Nguyen",
        email: "isabella.nguyen@email.com",
        role: "Moderator",
        photo: "/placeholder.svg?height=40&width=40",
    },
    {
        id: 4,
        name: "William Kim",
        email: "william.kim@email.com",
        role: "User",
        photo: "/placeholder.svg?height=40&width=40",
    },
]

export default function Page() {
    const [userList, setUserList] = useState<User[]>(initialUsers)
    const [selectedUser, setSelectedUser] = useState<User | null>(null)
    const [isRoleDialogOpen, setIsRoleDialogOpen] = useState(false)
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
    const [isBlockDialogOpen, setIsBlockDialogOpen] = useState(false)
    const [newRole, setNewRole] = useState<Role>('User')

    const handleRoleChange = (userId: number, role: Role) => {
        setSelectedUser(userList.find(user => user.id === userId) || null)
        setNewRole(role)
        setIsRoleDialogOpen(true)
    }

    const confirmRoleChange = () => {
        if (selectedUser) {
            setUserList(prevUsers =>
                prevUsers.map(user =>
                    user.id === selectedUser.id ? { ...user, role: newRole } : user
                )
            )
        }
        setIsRoleDialogOpen(false)
    }

    const handleDeleteUser = (userId: number) => {
        setSelectedUser(userList.find(user => user.id === userId) || null)
        setIsDeleteDialogOpen(true)
    }

    const confirmDeleteUser = () => {
        if (selectedUser) {
            setUserList(prevUsers => prevUsers.filter(user => user.id !== selectedUser.id))
        }
        setIsDeleteDialogOpen(false)
    }

    const handleBlockUser = (userId: number) => {
        setSelectedUser(userList.find(user => user.id === userId) || null)
        setIsBlockDialogOpen(true)
    }

    const confirmBlockUser = () => {
        if (selectedUser) {
            // In a real application, you would implement the blocking logic here
            console.log(`User ${selectedUser.id} blocked`)
        }
        setIsBlockDialogOpen(false)
    }

    const getRoleBadgeColor = (role: Role): string => {
        switch (role) {
            case 'Admin':
                return 'bg-red-100 text-red-800'
            case 'Moderator':
                return 'bg-yellow-100 text-yellow-800'
            default:
                return 'bg-green-100 text-green-800'
        }
    }

    return (
        <div className="w-full container overflow-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[80px]">Photo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {userList.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>
                                <Avatar>
                                    <Image src={user.photo} alt={user.name} width={40} height={40} />
                                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                            </TableCell>
                            <TableCell className="font-medium">{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                                <Badge className={getRoleBadgeColor(user.role)}>
                                    {user.role}
                                </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="h-8 w-8 p-0">
                                            <span className="sr-only">Open menu</span>
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                        <DropdownMenuItem onClick={() => handleRoleChange(user.id, 'Admin')}>
                                            <UserCog className="mr-2 h-4 w-4 text-red-600" />
                                            <span>Change Role to Admin</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => handleRoleChange(user.id, 'Moderator')}>
                                            <UserCog className="mr-2 h-4 w-4 text-yellow-600" />
                                            <span>Change Role to Moderator</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => handleRoleChange(user.id, 'User')}>
                                            <UserCog className="mr-2 h-4 w-4 text-green-600" />
                                            <span>Change Role to User</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem onClick={() => handleDeleteUser(user.id)}>
                                            <Trash className="mr-2 h-4 w-4 text-red-600" />
                                            <span>Delete User</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => handleBlockUser(user.id)}>
                                            <Ban className="mr-2 h-4 w-4 text-orange-600" />
                                            <span>Block User</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <AlertDialog open={isRoleDialogOpen} onOpenChange={setIsRoleDialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Change User Role</AlertDialogTitle>
                        <AlertDialogDescription>
                            Are you sure you want to change {selectedUser?.name}&apos;s role to {newRole}?
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={confirmRoleChange}>Confirm</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete User</AlertDialogTitle>
                        <AlertDialogDescription>
                            Are you sure you want to delete {selectedUser?.name}? This action cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={confirmDeleteUser} className="bg-red-600 hover:bg-red-700">Delete</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            <AlertDialog open={isBlockDialogOpen} onOpenChange={setIsBlockDialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Block User</AlertDialogTitle>
                        <AlertDialogDescription>
                            Are you sure you want to block {selectedUser?.name}? They will no longer be able to access the system.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={confirmBlockUser} className="bg-orange-600 hover:bg-orange-700">Block</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}