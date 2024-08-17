'use client'
import { Button } from '@/components/ui/button';
import { getUserInfo, removeUser } from '@/services/auth.service';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { RiLogoutBoxLine } from "react-icons/ri";

export default function AccountMenu() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const userInfo = getUserInfo();

    const router = useRouter()

    const handleLogout = () => {
        removeUser();
        router.refresh()
    }

    console.log(userInfo);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2"
            >
                <img
                    src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.2070558022.1715361181&semt=ais_hybrid"
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                />
            </button>

            {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                    <Link href="/dashbord/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Profile
                    </Link>
                    <Link href="/dashbord/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Dashbord
                    </Link>

                    < Button className='w-full rounded-none text-white font-bold' variant={"destructive"} onClick={handleLogout}>
                        <RiLogoutBoxLine className='text-xl mr-3' />
                        Logout

                    </Button>
                </div>
            )}
        </div>
    );
}
