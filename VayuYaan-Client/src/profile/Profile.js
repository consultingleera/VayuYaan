import styles from './profile.module.scss';
import Navbar from '../common/navbar/Navbar';

function Profile()  {
    
    return (
        <div>
            <Navbar />
            <div className={styles['container']}>
                <div className={styles['details']}>
                    <div className={styles['header']}>
                        Welcome! Let's finish your registration.
                    </div>

                    <div className={styles['form']}>
                        <div className={styles['title']}>
                            Select Role to Register As
                        </div>
                        <br/><br/><br/>
                        <div className={styles['roles']}>
                            <div className={styles['role']} style={{cursor: "pointer"}} onClick={() => window.location="/profile/farmer/1"}>
                                <img src="https://picsum.photos/200" />
                                <div className={styles['role-label']}>
                                    Farmer
                                </div>
                            </div>
                            <div className={styles['role']}>
                                or
                            </div>
                            <div className={styles['role']} style={{cursor: "pointer"}} onClick={() => window.location="/profile/pilot/1"}>
                                <img src="https://picsum.photos/200" />
                                <div className={styles['role-label']}>Pilot</div>
                            </div>
                        </div>

                        <div className={styles['next-step']}>
                            <button>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
