import { UserContext } from './UserContext.tsx';
import { useLocalStorage } from '../../hooks/use-localstorage.hook.tsx';
import type { UserContextProviderProps } from './UserContextProvider.props.ts';
import type { UserProfile } from './UserContext.tsx';


export const UserContextProvider = ({ children }: UserContextProviderProps) => {

	const [profile, setProfile] = useLocalStorage<UserProfile>('profile', {name: null, isLogined: false});

	return (
       <UserContext.Provider value={{ profile, setProfile }}>
		{children}
	  </UserContext.Provider>
      );
};