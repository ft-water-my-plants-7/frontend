import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'
const IndividualPlant = (props) => {
    const {plant, setPlants, plants} = props
    const history = useHistory()
    const user_id = localStorage.getItem('user_id')
    const reaload = () => {
        window.location.reload()
    }
    
    const deleteHandler = (plant_id) => {
        axiosWithAuth()
        .delete(`/api/plants/${user_id}/${plant.plant_id}`)
        .then((res) => {
            reaload()
            setPlants(plants.filter((plant) => plant.plant_id !== plant_id))
            history.push('/collection')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return(
        <div>
            <Image src = {plant.img} alt = 'Plant'/>
            <div>
                <h2>{plant.nickname}</h2>
                <h3>{plant.species}</h3>
            </div>
            <div>
                <h4>Watering Schedule</h4>
                <h5>{plant.h2o_frequency}</h5>
                
                <button onClick={() => history.push(`/Edit/${plant.plant_id}`)}>Edit</button>
                <button onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    )
}

export default IndividualPlant

const Image = styled.img`
    width: 250px;
    height: 250px;
`