import { useState } from 'react';
import styles from './auth.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { url } from '../utils/constants';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };

    const onLogin = () => {
        axios.post(`${url}/api/user/login`, {
            email: formData.email,
            password: formData.password  
        })
        .then(function (response) {
            console.log(response);
            localStorage.setItem('user', JSON.stringify(response.data.data[0]))
            console.log('user', JSON.parse(localStorage.getItem('user')));
            if (response.data.data[0].role === "farmer")    {
                window.location = "/dashboard/farmer/myBookings";
            }
            if (response.data.data[0].role === "pilot")    {
                window.location = "/dashboard/pilot";
            }
            if (response.data.data[0].role === "admin")    {
                window.location = "/dashboard/drone/management";
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    console.log(formData)

    return (
        <div className={styles['container']}>
            <div className={styles['banner']}>
                <img src='https://i.imgur.com/XPQO6IV_d.webp' />
            </div>
            <div className={styles['form']}>
                <div className={styles['header']}>
                    Log In
                </div>
                <div className={styles['input-field']}>
                    <div className={styles['input-item']}>
                        <input type="text" name="email" onChange={handleChange} placeholder="E-mail"  />
                    </div>
                    <div className={styles['input-item']}>
                        <input type="password" name="password" onChange={handleChange} placeholder="Password"  />
                    </div>

                    <div className={styles['input-button']}>
                        <button onClick={onLogin}>Log in</button>
                    </div>
                </div>
                <div className={styles['form-footer']}>
                    Don't have an account? Sign up
                </div>

                <div className={styles['google-auth']}>
                    <button><FontAwesomeIcon icon="fa-brands fa-google" />Log in with Google</button>
                </div>
            </div>
            
        </div>
    )
}

export default Login;