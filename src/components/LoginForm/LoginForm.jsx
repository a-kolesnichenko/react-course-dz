import styles from './LoginForm.module.css';
import FormInput from '../FormInput/FormInput.jsx';
import Button from '../Button/Button.jsx';
import { useState, useEffect, useRef } from 'react';

function LoginForm({onLogin, profile}) {

    const [name, setName] = useState('');
    const inputRef = useRef(null);
    
   	useEffect(() => {
        console.log('profile changed');	
        if (!profile.isLogined) {
            inputRef.current.value = '';
            inputRef.current.focus();
        }
	}, [profile]);

    function login(e) {
        e.preventDefault();              
        onLogin(name);
    }

    return (
        <form className={styles['login-form']}>
            <FormInput ref={inputRef} placeholder="Ваше имя" value={name} onChange={(e) => setName(e.target.value)} />
            <Button onClick={login}>Войти в профиль</Button>
        </form>
    );
}

export default LoginForm;