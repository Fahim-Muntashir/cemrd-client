
const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div className="min-h-screen">asdf
                {children}
            </div>
        </div>
    );
};

export default CommonLayout;