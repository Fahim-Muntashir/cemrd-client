import Navbar from "@/components/Shared/Navbar/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div className="min-h-screen">
                <Navbar></Navbar> {children}
            </div>
        </div>
    );
};

export default CommonLayout;