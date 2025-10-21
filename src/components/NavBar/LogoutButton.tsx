import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";

const LogoutButton: React.FC = () => {
    const { logout, isAuthenticated } = useAuth0();

    const handleLogout = async () => {
        await logout({
            logoutParams: {
                returnTo: "/",
            },
        });
    };
    if (isAuthenticated) return <Button onClick={handleLogout}>Logout</Button>;
    return;
};

export default LogoutButton;
