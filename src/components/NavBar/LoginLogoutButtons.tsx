import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Container from "react-bootstrap/Container";

const LoginLogoutButtons: React.FC = () => {
    return (
        <Container className="d-flex gap-2 justify-content-center">
            <LoginButton />
            <LogoutButton />
        </Container>
    );
};

export default LoginLogoutButtons;
