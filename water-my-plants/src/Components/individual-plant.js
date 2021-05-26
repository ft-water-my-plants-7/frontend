import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
const IndividualPlant = (props) => {
    const {plant} = props
    const history = useHistory()
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
            </div>
        </div>
    )
}

export default IndividualPlant

const Image = styled.img`
    width: 250px;
    height: 250px;
`