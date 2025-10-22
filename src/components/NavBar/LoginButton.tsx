import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";

const LoginButton: React.FC = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const [errorState, setErrorState] = useState<string | null>(null);

    const handleLogin = async () => {
        try {
            await loginWithRedirect({
                appState: {
                    returnTo: "/dashboard",
                },
                authorizationParams: {
                    prompt: "login",
                },
            });
            setErrorState(null);
        } catch (error: unknown) {
            if (error instanceof Error) {
                setErrorState(error.message);
            } else {
                setErrorState(String(error));
            }
        }
    };

    // We don't return anything if the user is logged in
    if (errorState)
        return (
            <div className="alert alert-danger" role="alert">
                {errorState}
            </div>
        );
    if (!isAuthenticated) return <Button onClick={handleLogin}>Log In</Button>;
    return null;
};

export default LoginButton;
