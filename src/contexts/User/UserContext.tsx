import { createContext } from 'react';

export interface UserProfile {
	name: string;
	isLogined: boolean;
}

export interface UserContextType {
	profile: UserProfile;
	setProfile: (profile: UserProfile) => void;
}

export const InitialContext: UserContextType = {
    profile: { name: '', isLogined: false},
    setProfile: () => {},
};

export const UserContext = createContext<UserContextType>(InitialContext);