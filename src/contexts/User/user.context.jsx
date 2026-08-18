import { UserContext } from './UserContext.jsx';
import { useLocalStorage } from '../../hooks/use-localstorage.hook.js';

export const UserContextProvider = ({ children }) => {

	const [profile, setProfile] = useLocalStorage('profile', {name: null, isLogined: false});

	return (
       <UserContext.Provider value={{ profile, setProfile }}>
		{children}
	  </UserContext.Provider>
      );
};