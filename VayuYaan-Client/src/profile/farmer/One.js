import Navbar from '../../common/navbar/Navbar';
import styles from '../profile.module.scss';
import { Stepper } from 'react-form-stepper';

function One()  {

    return (
        <>
            <Navbar />
            <div className={styles['container']}>
                <div>

                <Stepper 
                    steps={[{}, {}, {}, {}, {}, {}, {}]}
                    activeStep={0}
                />
                <div className={styles['form-title']}>
                    Farmer Information
                </div>
                <div className={styles['form-subtitle']}>
                    Fill in the data for your profile. It will only take a couple of minutes.
                </div>

                <div className={styles['form-body']}>
                    <div className={styles['input-field']}>
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className={styles['input-field']}>
                        <input type="text" placeholder="Phone Number" />
                    </div>
                    <div className={styles['input-field']}>
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className={styles['input-field']}>
                        <input type="text" placeholder="Birthday" />
                    </div>
                    <div className={styles['input-field']}>
                        <input type="text" placeholder="Gender" />
                    </div>
                </div>

                <div className={styles['navigate']}>
                    <div className={styles['navigate-btn']}>
                        <button className={styles['grey']}>Back</button>
                    </div>
                    <div className={styles['navigate-btn']} style={{cursor: "pointer"}} onClick={() => window.location="/profile/farmer/2"}>
                        <button className={styles['blue']}>Next</button>
                    </div>
                </div>
                </div>
                
            </div>
        </>
    )
}

export default One;