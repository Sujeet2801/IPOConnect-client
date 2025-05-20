import { Outlet, useLocation } from "react-router-dom";
import AuthModal from "../../page/auth/Auth";
import { useAuth } from "../../hooks/useAuth";

const Layout = () => {
    const location = useLocation();
    const isAuthRoute = location.pathname === "/login" || location.pathname === "/register";
    const { loading } = useAuth();

    if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;

    if (isAuthRoute) return <AuthModal />;

    return (
        <>
        <div className="flex">
            <main className="">
                <Outlet />
            </main>
        </div>
        </>
    );
};

export default Layout;
