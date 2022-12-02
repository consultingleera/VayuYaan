import Navbar from '../../common/navbar/Navbar';
import styles from '../profile.module.scss';
import { Stepper } from 'react-form-stepper';
import Upload from '../../common/upload/Upload';

function Four()  {

    return (
        <>
            <Navbar />
            <div className={styles['container']}>
                <div>

                <Stepper 
                    steps={[{}, {}, {}, {}, {}, {}, {}]}
                    activeStep={3}
                />
                <div className={styles['form-title']}>
                    Let's verify your farm.
                </div>
                <div className={styles['form-subtitle']}>
                    Fill in more data regarding your farm certification.
                </div>

                <div className={styles['form-body']}>
                    <div className={styles['form-title']}>
                        Land Ownership Certificate
                    </div>
                    <div className={styles['input-field']}>
                        <input type="text" placeholder="Name of Land Owner" />
                    </div>
                    <div className={styles['input-field']}>
                        <input type="text" placeholder="Address" />
                    </div>
                    <div className={styles['input-field']}>
                        <input type="text" placeholder="City" />
                    </div>

                    <div className={styles['row']}>
                        <div className={styles['input-field']}>
                            <input type="text" placeholder="Country" />
                        </div>
                        <div className={styles['input-field']}>
                            <input type="text" placeholder="Zip Code" />
                        </div>
                    </div>

                    <div className={styles['row']}>
                        <div className={styles['input-field']}>
                            <input type="text" placeholder="Total area (square feet)" />
                        </div>
                        <div className={styles['input-field']}>
                            <input type="text" placeholder="Date of certificate issue" />
                        </div>
                    </div>
                    
                </div>

                {/* <Upload text={'Upload pdf/image of certificate'} /> */}

                <div className={styles['navigate']}>
                    <div className={styles['navigate-btn']}>
                        <button className={styles['grey']}>Back</button>
                    </div>
                    <div className={styles['navigate-btn']} style={{cursor: "pointer"}} onClick={() => window.location="/profile/farmer/5"}>
                        <button className={styles['blue']}>Next</button>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Four;