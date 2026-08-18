import styles from './LoginForm.module.css';
import FormInput from '../FormInput/FormInput.jsx';
import Button from '../Button/Button.jsx';
import { useState, useEffect, useRef, useContext } from 'react';
import { UserContext } from '../../contexts/User/UserContext.jsx';

function LoginForm() {

    const { profile, setProfile } = useContext(UserContext);
    
    const [name, setName] = useState('');
    const inputRef = useRef(null);
    
   	useEffect(() => {
        if (!profile.isLogined) {
            inputRef.current.value = '';
            inputRef.current.focus();
        }
	}, [profile]);

    function login(e) {
        e.preventDefault();              
       
        const profileData = {name: name, isLogined: true};
        setProfile(profileData);  
    }

    return (
        <form className={styles['login-form']}>
            <FormInput ref={inputRef} placeholder="Ваше имя" value={name} onChange={(e) => setName(e.target.value)} />
            <Button onClick={login}>Войти в профиль</Button>
        </form>
    );
}

export default LoginForm;