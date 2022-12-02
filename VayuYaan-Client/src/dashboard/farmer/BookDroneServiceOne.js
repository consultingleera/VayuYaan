import styles from '../dashboard.module.scss';
import Navbar from '../../common/navbar/Navbar';
import { Stepper } from 'react-form-stepper';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../../utils/constants';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BookDroneServiceOne()   {

    const [farms, setFarms] = useState();

    useEffect(() => {
        axios.get(`${url}/api/farm/`, {
            "Content-Type": "application/json",
        })
            .then(function (response) {
                console.log(response.data.data);
                setFarms(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
                alert("error")
            });
    }, [])

    console.log('farms', farms)

    return (
        <>
            <Navbar />
            <div className={styles['container']}>
                <div className={styles['sidebar']}>
                    <div className={styles['title']}>
                        Dashboard
                    </div>
                    <div className={styles['options']} style={{cursor: "pointer"}}>
                        <div className={styles['option']} onClick={() => window.location='/dashboard/farmer/maintenance'}>
                            Maintenance
                        </div>
                        <div className={styles['option-select']} onClick={() => window.location='/dashboard/farmer/bookDroneServiceOne'}>
                            Book Drone Service
                        </div>
                        <div className={styles['option']} onClick={() => window.location='/dashboard/farmer/myBookings'}>
                            My Bookings
                        </div>
                        <div className={styles['option']} onClick={() => window.location='/dashboard/farmer/serviceReports'}>
                            Service Reports
                        </div>
                        <div className={styles['option']} onClick={() => window.location='/profile/farmer'}>
                            Profile
                        </div>
                        <div className={styles['option']} onClick={() => window.location='/dashboard/farmer/dronesimulation'}>
                            Simulation Management
                        </div>
                    </div>
                </div>
                <div className={styles['body']}>
                    <div className={styles['info-container']}>
                        <Stepper 
                            steps={[{}, {}, {}]}
                            activeStep={0}
                        />
                        <div className={styles['header']}>
                            Step 1: Farm Selection
                        </div>
                        <div className={styles['sub-header']}>
                        Please select the farm you would like your drone service on.
                        </div>
                    </div>

                    {/* <div className={styles['row']}>
                        <img src="https://i.picsum.photos/id/676/536/354.jpg?hmac=AUe7ybcPXLBm37YhZd49jpbOql4HORAAWX-WUPSOhjg" />
                        <img src="https://i.picsum.photos/id/676/536/354.jpg?hmac=AUe7ybcPXLBm37YhZd49jpbOql4HORAAWX-WUPSOhjg" />
                    </div> */}

                    {
                        farms &&
                        <div className={styles['show-farms']}>
                        {
                            farms.map((farm, index) => {
                                return (
                                    <div className={styles['show-farm']} key={farm._id}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="https://i.picsum.photos/id/676/536/354.jpg?hmac=AUe7ybcPXLBm37YhZd49jpbOql4HORAAWX-WUPSOhjg" />
                                        <Card.Body>
                                            <Card.Title>{farm.name}</Card.Title>
                                            <Card.Text>{farm.address}</Card.Text>
                                            <Card.Text>{farm.zipcode}</Card.Text>
                                            <Button variant="primary" style={{ fontSize: "16px" }} onClick={() => window.location=`/dashboard/farmer/bookDroneServiceTwo/${farm._id}`}>Select</Button>
                                        </Card.Body>
                                    </Card>
                                    </div>
                                )
                            })
                        }
                    </div>
                    }

                    <br/>

                    {/* <center>
                        <div className={styles['navigate-btn']}>
                            <button className={styles['blue']} onClick={() => window.location="/dashboard/farmer/bookDroneServiceTwo"}>Next</button>
                        </div>
                    </center> */}

                </div>
            </div>
        </>
    )
}

export default BookDroneServiceOne;