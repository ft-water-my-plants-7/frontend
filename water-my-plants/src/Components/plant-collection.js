import React, {useState, useEffect} from 'react'
import IndividualPlant from './individual-plant';
import NoPlant from './no-plant';
import Header from "./header";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import {useHistory} from 'react-router-dom'
import styled from 'styled-components';

const PlantCollection = () => {
    const [plants, setPlants] = useState([])
    const history = useHistory()
    const user_id = localStorage.getItem('user_id')
    useEffect(() => {
        axiosWithAuth()
        .get(`/api/users/${user_id}/plants`)
        .then((res) => {
            setPlants(res.data)

        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
    console.log(plants)
    
    return(
        <div>
            <Header />
            {plants.length === 0 ? (<NoPlant /> ) : (
                <div>
                    <h2>Water my Plants</h2>
                    <button onClick={() => history.push('/add')}>Add Plant</button>
                    <Container>
                        {plants.map((plant) => {
                            console.log('THISD PLANT',plant.plant_id)
                            return (
                            <IndividualPlant key={plant.plant_id} setPlants={setPlants} plant={plant} plants={plants}/>
                        )})}
                    </Container>
                </div>
                
            )}

        </div>
    )
}
export default PlantCollection

const Container = styled.div`
    display: flex;
    flex-direction: row;
    
`