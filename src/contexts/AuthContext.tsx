import { createContext, useState } from "react";

type AuthContextType = {
    isLoggedIn: boolean;
    username: string;
    email: string;
    login: (username: string, email: string) => void;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const login = (username: string, email: string): void => {
        setIsLoggedIn(true);
        setUsername(username);
        setEmail(email);
    };

    const logout = (): void => {
        setIsLoggedIn(false);
        setUsername("");
        setEmail("");
    };

    return <AuthContext.Provider value={{ isLoggedIn, username, email, login, logout }}>{children}</AuthContext.Provider>;
};
