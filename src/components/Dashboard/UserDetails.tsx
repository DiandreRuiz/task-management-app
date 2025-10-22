import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserDetails: React.FC = () => {
    const { user } = useAuth0();
    console.log(JSON.stringify(user));

    return (
        <div className="pt-2 pb-1 m-0">
            <img src={user?.picture} alt="Profile picture" referrerPolicy="no-referrer" className="rounded-3 mb-2" />
            <h4 className="m-0">{user ? user.name : null}</h4>
        </div>
    );
};

export default UserDetails;
