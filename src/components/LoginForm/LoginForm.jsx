import styles from './LoginForm.module.css';
import FormInput from '../FormInput/FormInput.jsx';
import Button from '../Button/Button.jsx';
import { useState, useEffect, useRef } from 'react';
import { useLocalStorage } from '../../hooks/use-localstorage.hook.js';


function LoginForm({onLogin, profile}) {

    const [userName, setUserName] = useState('');
    const inputRef = useRef(null);
    const [_, setProfile] = useLocalStorage('profile');

   	useEffect(() => {
        console.log('profile changed');	
        if (!profile.isLogined) {
            setUserName('');
            inputRef.current.focus();
        }
	}, [profile]);

    function enterProfile(e) {
        e.preventDefault();
        const profileData = {userName: userName, isLogined: true};
        setProfile(profileData);        
        onLogin(profileData);
    }

    return (
        <form className={styles['login-form']}>
            <FormInput ref={inputRef} placeholder="Ваше имя" value={userName} onChange={(e) => setUserName(e.target.value)} />
            <Button onClick={enterProfile}>Войти в профиль</Button>
        </form>
    );
}

export default LoginForm;