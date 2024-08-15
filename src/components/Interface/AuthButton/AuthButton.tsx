
import { Button } from "@/components/ui/button";
import { getUserInfo, removeUser } from "@/services/auth.service";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
    const userInfo = getUserInfo();

    const router = useRouter()

    const handleLogout = () => {
        removeUser();
        router.refresh()
    }

    return (
        <>
            {userInfo?.userId ?

                (< Button color="error" onClick={handleLogout}>Logout</Button>
                ) :
                (< Button variant="destructive">

                    <Link href={'/login'}>Login
                    </Link>

                </Button>)}
        </>
    );
};

export default AuthButton;