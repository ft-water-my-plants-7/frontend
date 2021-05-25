import styled from 'styled-components'
const IndividualPlant = (props) => {
    const {plant} = props
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
                
                <h4>Location</h4>
                <h5>{plant.locating}</h5>
                
                <h4>Notes</h4>
                <h5>{plant.notes}</h5>
            </div>
        </div>
    )
}

export default IndividualPlant

const Image = styled.img`
    width: 250px;
    height: 250px;
`