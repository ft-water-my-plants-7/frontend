
import {axiosWithAuth} from '../utils/axiosWithAuth'
import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import styled from 'styled-components'

const EditPlant = () => {
  const {plant_id} = useParams();
  const history = useHistory()
  
  //States
  const [plant, setPlant] = useState({
    nickname: '',
    species:'',
    h2o_frequency:1,
    image:'',
  })
  
  //Event handlers
  const inputChange = event => {
    setPlant({
      ...plant,
      [event.target.name]: event.target.value
    })
  }
  
  useEffect(() => {
    axiosWithAuth()
    .get(`/api/plants/${plant_id}`)
    .then((res) => {
      console.log('THIS IS RES DATA',res.data)
      const resData = res.data
      if(resData.image === null) {
        resData.image = ''
      }
      setPlant(res.data)
    })
    .catch((err) =>{
      console.log(err)
    })
  }, [])

  // this is making sure all data is all submitted at once when the form submits
  const handleSubmit = event => {
    event.preventDefault()
    const {nickname, species, h2o_frequency, image} = plant
    //destructured plant object
    console.log('this is submit',plant)
    axiosWithAuth()
    .put(`/api/plants/${plant_id}`, {nickname, species, h2o_frequency, image})
    .then((res) => {
      history.push("/collection")
    })
    .catch((err) => {
      console.log(err)
    })
  }
  
  const {nickname, species, h2o_frequency, image} = plant
    return(
        <div>
          <Container>
              <Image src = {plant.image} alt = 'Plant'/>
              <h2>Nickname: {nickname}</h2>
              <h4>Species: {species}</h4>
              <h4>Watering {h2o_frequency} times a week</h4>
          </Container>

            <Form>
              Nickname<input name='nickname' id= '' value={nickname} onChange={inputChange}/>
              Species<input name='species' id= '' value={species} onChange={inputChange}/>
              How often do you water it a week?<input name='h2o_frequency' id= '' value={h2o_frequency} type='number' onChange={inputChange}/>
              Add an Image<input name='image' id= '' value={image} onChange={inputChange}/>
            </Form>
            <button onClick={handleSubmit}>Save Changes</button>
        </div>
    )
}
export default EditPlant

const Image = styled.img`
    width: 250px;
    height: 250px;
`
const Container = styled.div`
    padding: 50px;
    margin: 50px;
    
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 20%;
  margin-right: 20%;
  align-items: center;
  margin-top: -70px;
  padding-bottom: 50px;

`