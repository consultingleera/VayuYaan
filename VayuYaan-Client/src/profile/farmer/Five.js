import Navbar from '../../common/navbar/Navbar';
import styles from '../profile.module.scss';
import { Stepper } from 'react-form-stepper';

function Five()  {

    return (
        <>
            <Navbar />
            <div className={styles['container']}>
                <div>

                <Stepper 
                    steps={[{}, {}, {}, {}, {}, {}, {}]}
                    activeStep={4}
                />
                <div className={styles['form-title']}>
                    Billing Information
                </div>
                <div className={styles['form-subtitle']}>
                    Fill in billing information for your profile.
                </div>

                <div className={styles['form-body']}>
                    <div className={styles['form-title']}>
                        Payment Method
                    </div>
                    <div className={styles['input-field']}>
                        <input type="text" placeholder="Name on Card" />
                    </div>
                    <div className={styles['input-field']}>
                        <input type="text" placeholder="Card Number" />
                    </div>

                    <div className={styles['row']}>
                        <div className={styles['input-field']}>
                            <input type="text" placeholder="Expiration" />
                        </div>
                        <div className={styles['input-field']}>
                            <input type="text" placeholder="CVV" />
                        </div>
                    </div>

                    <div className={styles['form-footer']}>
                        By Clicking “Confirm Payment” I agree to the companies term of services
                    </div>
                    
                </div>


                <div className={styles['navigate']}>
                    <div className={styles['navigate-btn']}>
                        <button className={styles['grey']}>Back</button>
                    </div>
                    <div className={styles['navigate-btn']} style={{cursor: "pointer"}} onClick={() => window.location="/profile/farmer/6"}>
                        <button className={styles['blue']}>Next</button>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Five;