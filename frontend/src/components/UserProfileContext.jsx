import React, { createContext, useState } from 'react';

export const UserProfileContext = createContext();

export const UserProfileProvider = ({ children }) => {
    const [profileImage, setProfileImage] = useState('https://via.placeholder.com/100');

    return (
        <UserProfileContext.Provider value={{ profileImage, setProfileImage }}>
            {children}
        </UserProfileContext.Provider>
    );
};
