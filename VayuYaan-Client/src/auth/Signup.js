import { useState } from 'react';
import styles from './auth.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { url } from '../utils/constants';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
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

    const onSignUp = () => {
        axios.post(`${url}/api/user/signup`, {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            password: formData.password  
        })
        .then(function (response) {
            console.log(response);
            toast.success(response.message);
        })
        .catch(function (error) {
            console.log(error);
            toast.error(error.message);
        });
    }

    console.log(formData)

    return (
        <div className={styles['container']}>
            <ToastContainer />
            <div className={styles['banner']}>
                <img src='https://i.imgur.com/XPQO6IV_d.webp' />
            </div>
            <div className={styles['form']}>
                <div className={styles['header']}>
                    Sign Up
                </div>
                <div className={styles['input-field']}>
                    <div className={styles['input-item']}>
                        <input type="text" name="name" placeholder="Name" onChange={handleChange} value={formData.name} />
                    </div>
                    <div className={styles['input-item']}>
                        <input type="text" name="phone" placeholder="Phone" onChange={handleChange} value={formData.phone} />
                    </div>
                    <div className={styles['input-item']}>
                        <input type="text" name="email" placeholder="E-mail" onChange={handleChange} value={formData.email} />
                    </div>
                    <div className={styles['input-item']}>
                        <input type="password" name="password" placeholder="Password" onChange={handleChange} value={formData.password} />
                    </div>
                    <div className={styles['input-button']}>
                        <button  onClick={() => window.location="/profile"}>Sign Up</button>
                    </div>
                </div>
                <div className={styles['form-footer']}>
                    Already have an account? Log in
                </div>

                <div className={styles['google-auth']}>
                    <button><FontAwesomeIcon icon="fa-brands fa-google" />Sign up with Google</button>
                </div>
            </div>
            
        </div>
    )
}

export default Signup;