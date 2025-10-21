import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";

const LoginButton: React.FC = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const handleLogin = async () => {
        await loginWithRedirect({
            appState: {
                returnTo: "/dashboard",
            },
            authorizationParams: {
                prompt: "login",
            },
        });
    };

    // We don't return anything if the user is logged in
    if (!isAuthenticated) return <Button onClick={handleLogin}>Log In</Button>;
    return null;
};

export default LoginButton;
