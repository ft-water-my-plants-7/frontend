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
        <Container>
            <Image src = {plant.image} alt = 'Plant'/>
            <div>
                <h2>Nickname: {plant.nickname}</h2>
                <h3>Species: {plant.species}</h3>
            </div>
            <div>
                <h4>Watering Schedule</h4>
                <h5>Water {plant.h2o_frequency} times a week</h5>
                
                <button onClick={() => history.push(`/Edit/${plant.plant_id}`)}>Edit</button>
                <button onClick={deleteHandler}>Delete</button>
            </div>
        </Container>
    )
}

export default IndividualPlant

const Image = styled.img`
    width: 250px;
    height: 250px;
`

const Container = styled.div`
    padding: 50px;
    border: 1px solid grey;
    margin: 50px;
    
`