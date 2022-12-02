import styles from '../dashboard.module.scss';
import Navbar from '../../common/navbar/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../../utils/constants';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

function FarmManagement() {
    
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user || user.role !== 'admin') {
        window.location = "/adminaccess"
    }

    const [farms, setFarms] = useState([]);
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [currentFarm, setCurrentFarm] = useState();

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [zipcode, setZipcode] = useState('');

    useEffect(() => {
        axios.get(`${url}/api/farm/`, {
            "Content-Type": "application/json",
        })
            .then(function (response) {
                console.log(response);
                setFarms(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    console.log('drones', farms);

    const deleteFarm = (id) => {
        axios.delete(`${url}/api/farm/delete/${id}`, {
            "Content-Type": "application/json",
        })
            .then(function (response) {
                console.log(response);
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const editFarm = (id) => {
        setShowEditPopup(true);
        const curFarm = farms.filter(function(farm) {
            return farm._id === id;
        })
        setCurrentFarm(curFarm)
        setName(curFarm[0].name)
        setAddress(curFarm[0].address)
        setZipcode(curFarm[0].zipcode)
    }

    const editFarmRequest = () => {
        axios.put(`${url}/api/farm/edit/${currentFarm[0]._id}`,{
            name: name,
            address: address,
            zipcode: zipcode,
            city: currentFarm[0].city,
            country: currentFarm[0].country,
            area: currentFarm[0].area,
            dateofissue: currentFarm[0].dateofissue,
            utilitybill: currentFarm[0].utilitybill,
            driverlicense: currentFarm[0].driverlicense,
        }, {
            "Content-Type": "application/json",
        })
            .then(function (response) {
                console.log(response);
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    console.log('currentDrone', currentFarm)

    return (
        <>
            <Navbar />
            <div className={styles['container']}>

                {
                    showEditPopup &&
                    <div className={styles['modal']}>
                        <div className={styles['modal-content']}>
                            <form>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
                                <input type="text" value={zipcode} onChange={(e) => setZipcode(e.target.value)} placeholder="Zipcode" />
                                <button onClick={editFarmRequest}>Submit</button>
                            </form>
                        </div>
                    </div>
                }

                <div className={styles['sidebar']}>
                    <div className={styles['title']}>
                        Dashboard
                    </div>
                    <div className={styles['options']} style={{cursor: "pointer"}}>
                        <div className={styles['option']} onClick={() => window.location='/dashboard/farmer/management'}>
                            Farmers Management
                        </div>
                        <div className={styles['option']} onClick={() => window.location='/dashboard/drone/management'}>
                            Drone Management
                        </div>
                        <div className={styles['option']} onClick={() => window.location='/dashboard/pilot/management'}>
                            Pilots Management
                        </div>
                        <div className={styles['option-select']} onClick={() => window.location='/dashboard/farm/management'}>
                            Farms Management
                        </div>
                    </div>
                </div>
                <div className={styles['body']}>
                    <div className={styles['info-container']}>
                        <div className={styles['header']}>
                            Farm Management
                        </div>
                        <div className={styles['sub-header']}>
                            <div className={styles['row']}>
                                {/* <buton className={styles['slt-drones']}>Simulated Drones</buton> */}
                                <buton className={styles['create-slt']} onClick={() => window.location = "/profile/farm/1"}>Create Farm</buton>
                            </div>
                        </div>
                    </div>

                    <div className={styles['table']}>
                        <div className={styles['title']}>
                            All Farms
                        </div>
                        <div className={styles['display']}>
                            <table>
                                <tr>
                                    <th>Farm ID#</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>ZipCode</th>
                                    <th>Delete</th>
                                    <th>Modify</th>
                                </tr>
                                {
                                    farms.map((farm, index) => {
                                        return (
                                            <tr key={farm._id}>
                                                <td>{farm._id}</td>
                                                <td>{farm.name}</td>
                                                <td>{farm.address}</td>
                                                <td>{farm.zipcode}</td>
                                                <td><button onClick={() => deleteFarm(farm._id)}>Delete</button></td>
                                                <td><button onClick={() => editFarm(farm._id)}>Edit</button></td>
                                            </tr>
                                        )
                                    })
                                }
                                
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FarmManagement;