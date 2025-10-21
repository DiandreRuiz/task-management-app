import React from "react";
import dotenv from "dotenv";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Auth0ProviderWithNavigateProps = {
    children: React.ReactNode;
};

const Auth0ProviderWithNavigate: React.FC<Auth0ProviderWithNavigateProps> = ({ children }) => {
    const DOMAIN = "dev-2u70c1requq1vsqk.us.auth0.com";
    const AUTH0_CLIENTID = "q7xzrwLjo9HpHMsRF44VuawVERsCjiOe";
    const AUTH0_REDIRECT_URI = "http://localhost:5173/dashboard";
    const navigate = useNavigate();

    const onRedirectCallback = (appState: any) => {
        navigate((appState && appState.returnTo) || window.location.pathname);
    };

    if (!(DOMAIN && AUTH0_CLIENTID && AUTH0_REDIRECT_URI)) {
        return null;
    }

    return (
        <Auth0Provider
            domain={DOMAIN}
            clientId={AUTH0_CLIENTID}
            authorizationParams={{
                redirect_uri: AUTH0_REDIRECT_URI,
                scope: "openid profile email",
            }}
            onRedirectCallback={onRedirectCallback}
            cacheLocation="localstorage"
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithNavigate;
