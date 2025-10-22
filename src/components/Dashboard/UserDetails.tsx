import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import type { User } from "@auth0/auth0-react";

type userData = {
    userName: string | undefined;
    userPhoto: string | undefined;
};

const mapToUserData = (user: User | undefined): userData => {
    return { userName: user?.name, userPhoto: user?.picture };
};

const UserDetails: React.FC = () => {
    const { user } = useAuth0();
    const userData = mapToUserData(user);

    return (
        <div className="pt-2 pb-1 m-0">
            <img src={userData.userPhoto} alt="Profile picture" referrerPolicy="no-referrer" className="rounded-3 mb-2" />
            <h4 className="m-0">{userData.userName}</h4>
        </div>
    );
};

export default UserDetails;
