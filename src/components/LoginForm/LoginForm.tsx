import styles from './LoginForm.module.css';
import FormInput from '../FormInput/FormInput.tsx';
import Button from '../Button/Button.tsx';
import { useState, useEffect, useRef, useContext } from 'react';
import { UserContext, type UserContextType } from '../../contexts/User/UserContext.tsx';
import type { MouseEvent } from 'react'

function LoginForm() {

    const { profile, setProfile } = useContext<UserContextType>(UserContext);
    
    const [name, setName] = useState('');
    const inputRef = useRef<HTMLInputElement | null>(null);
    
   	useEffect(() => {
        if (!profile.isLogined) {
            if (inputRef?.current) {
                inputRef.current.value = '';
                inputRef.current.focus();
            }
        }
	}, [profile]);

    function login(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
       
        const profileData = {name: name, isLogined: true};
        setProfile(profileData);  
    }

    return (
        <form className={styles['login-form']} >
            <FormInput ref={inputRef} placeholder="Ваше имя" value={name} onChange={(e) => setName(e.target.value)} />
            <Button onClick={login}>Войти в профиль</Button>
        </form>
    );
}

export default LoginForm;