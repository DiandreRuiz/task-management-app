import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Container from "react-bootstrap/Container";

type LoginLogoutButtonsProps = {
    isLoggedIn: boolean;
};

const loginClickHandler = (): void => {
    console.log("Login");
};

const logoutClickHandler = (): void => {
    console.log("Logout");
};

const LoginLogoutButtons: React.FC<LoginLogoutButtonsProps> = ({ isLoggedIn }) => {
    return (
        <>
            {isLoggedIn && (
                <Container className="d-flex gap-2 justify-content-center">
                    <LoginButton onLoginClick={loginClickHandler} />
                    <LogoutButton onLogoutClick={logoutClickHandler} />
                </Container>
            )}
        </>
    );
};

export default LoginLogoutButtons;
