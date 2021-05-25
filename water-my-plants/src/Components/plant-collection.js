import React, {useState, useEffect} from 'react'
import IndividualPlant from './individual-plant';
import NoPlant from './no-plant';
import Header from "./header";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import {useHistory} from 'react-router-dom'

const PlantCollection = () => {
    const [plants, setPlants] = useState([])
    const history = useHistory()
    console.log(plants)
    const user_id = localStorage.getItem('user_id')
    useEffect(() => {
        axiosWithAuth()
        .get(`/api/users/${user_id}/plants`)
        .then((res) => {
            console.log(res)
            setPlants(res.data)

        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
    return(
        <div>
            <Header />
            {plants.length === 0 ? (<NoPlant /> ) : (
                <div>
                    <h2>Water my Plants</h2>
                    <div>
                    <button onClick={() => history.push('/add')}>Add Plant</button>
                        {plants.map((plant) => (
                            <IndividualPlant key={plant.id} setPlants={setPlants} plant={plant}/>
                        ))}
                    </div>
                </div>
                
            )}

        </div>
    )
}
export default PlantCollection