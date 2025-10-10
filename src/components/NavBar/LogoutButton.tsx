import Button from "react-bootstrap/Button";

type LogoutButtonProps = {
    onLogoutClick: () => void;
};

const LogoutButton: React.FC<LogoutButtonProps> = ({ onLogoutClick }) => {
    return <Button onClick={onLogoutClick}>Logout</Button>;
};

export default LogoutButton;
