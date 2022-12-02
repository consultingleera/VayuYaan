import Navbar from '../../common/navbar/Navbar';
import styles from '../profile.module.scss';
import { Stepper } from 'react-form-stepper';
import Upload from '../../common/upload/Upload';

function Six()  {

    return (
        <>
            <Navbar />
            <div className={styles['container']}>
                <div>

                <Stepper 
                    steps={[{}, {}, {}, {}, {}, {}, {}]}
                    activeStep={6}
                />
                <div className={styles['form-title']}>
                    Let's verify your farm operation.
                </div>
                <div className={styles['form-subtitle']}>
                    Please submit a copy of your farm's utility bill. This can be an electric bill, or alternatively a water bill.
                </div>

                <div className={styles['form-body']}>
                    <div className={styles['form-title']}>
                        Farm Utility Bill
                    </div>

                    <div className={styles['row']}>
                        <div className={styles['input-field']}>
                            <input type="text" placeholder="Statement Agreement ID" />
                        </div>
                        <div className={styles['input-field']}>
                            <input type="text" placeholder="Date of bill statement" />
                        </div>
                    </div>
                    
                </div>

                {/* <Upload text={'Upload pdf/image of utility bill'} /> */}

                <div className={styles['navigate']}>
                    <div className={styles['navigate-btn']}>
                        <button className={styles['grey']}>Back</button>
                    </div>
                    <div className={styles['navigate-btn']} style={{cursor: "pointer"}} onClick={() => window.location="/profile/farmer/7"}>
                        <button className={styles['blue']}>Next</button>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Six;