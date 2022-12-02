import Navbar from '../../common/navbar/Navbar';
import styles from '../profile.module.scss';
import { Stepper } from 'react-form-stepper';

function Three()  {

    return (
        <>
            <Navbar />
            <div className={styles['container']}>
                <div>

                <Stepper 
                    steps={[{}, {}, {}, {}, {}, {}, {}]}
                    activeStep={2}
                />
                <div className={styles['form-title']}>
                    Farm Information
                </div>
                <div className={styles['form-subtitle']}>
                    Fill more details about your farm.
                </div>

                <div className={styles['form-body']}>
                    <div className={styles['form-title']}>
                        Farm Plot
                    </div>
                    <div className={styles['input-check']}>
                        <div className={styles['plot-type']}>Plot Type</div>
                        <input type="checkbox" id="Livestock" name="Livestock" />
                        <label for="Livestock">Livestock</label>

                        <input type="checkbox" id="Crops" name="Crops" />
                        <label for="Crops">Crops</label>

                        <input type="checkbox" id="Fruits" name="Fruits" />
                        <label for="Fruits">Fruits</label>

                        <input type="checkbox" id="Nursery" name="Nursery" />
                        <label for="Nursery">Nursery</label>

                    </div>
                    <div className={styles['input-field']}>
                        <input type="text" placeholder="Type (in detail)" />
                    </div>
                </div>

                <div className={styles['navigate']}>
                    <div className={styles['navigate-btn']}>
                        <button className={styles['grey']}>Back</button>
                    </div>
                    <div className={styles['navigate-btn']} style={{cursor: "pointer"}} onClick={() => window.location="/profile/farmer/4"}>
                        <button className={styles['blue']}>Next</button>
                    </div>
                </div>
                </div>
                
            </div>
        </>
    )
}

export default Three;