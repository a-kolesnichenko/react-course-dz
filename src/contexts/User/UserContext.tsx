import { createContext } from 'react';

export interface UserProfile {
	name: string | null;
	isLogined: boolean;
}

export interface UserContextType {
	profile: UserProfile;
	setProfile: (profile: UserProfile) => void;
}

const initialContext: UserContextType = {
    profile: { name: null, isLogined: false},
    setProfile: () => {},
};

export const UserContext = createContext<UserContextType>(initialContext);