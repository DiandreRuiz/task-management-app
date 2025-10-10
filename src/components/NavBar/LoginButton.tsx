import Button from "react-bootstrap/Button";

type LoginButtonProps = {
    onLoginClick: () => void;
};

const LoginButton: React.FC<LoginButtonProps> = ({ onLoginClick }) => {
    return <Button onClick={onLoginClick}>Login</Button>;
};

export default LoginButton;
