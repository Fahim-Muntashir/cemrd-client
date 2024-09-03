'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { updateUserRole } from "@/services/actions/users";

import { UserCog } from 'lucide-react';
import { useRouter } from "next/navigation";

import React from 'react';
import { toast } from "sonner";

const RoleChange = ({ user }) => {
    const router = useRouter();
    const handleRoleChange = async (id, role) => {
        const res = await updateUserRole(id, { role: role });
        console.log(res);
        if (res.success) {
            toast.success("data us");
            router.refresh();
        }
    }

    return (
        <div>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => handleRoleChange(user.id, 'ADMIN')}>
                    <UserCog className="mr-2 h-4 w-4 text-red-600" />
                    <span>Change Role to Admin</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleRoleChange(user.id, 'FACULTY')}>
                    <UserCog className="mr-2 h-4 w-4 text-yellow-600" />
                    <span>Change Role to Moderator</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleRoleChange(user.id, 'USER')}>
                    <UserCog className="mr-2 h-4 w-4 text-green-600" />
                    <span>Change Role to User</span>
                </DropdownMenuItem>


                {/* <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleDeleteUser(user.id)}>
                    <Trash className="mr-2 h-4 w-4 text-red-600" />
                    <span>Delete User</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleBlockUser(user.id)}>
                    <Ban className="mr-2 h-4 w-4 text-orange-600" />
                    <span>Block User</span>
                </DropdownMenuItem> */}


            </DropdownMenuContent>
        </div>
    );
};

export default RoleChange;