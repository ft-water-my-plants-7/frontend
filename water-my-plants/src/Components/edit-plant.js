
import {axiosWithAuth} from '../utils/axiosWithAuth'
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'


const EditPlant = () => {
  const {plant_id} = useParams();

    // const url = window.location.pathname;
    // const id = url.substring(url.lastIndexOf('/') + 1);
    // const realId = parseInt(id);
  
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
  
  
  // this is making sure all data is all submitted at once when the form submits
  const handleSubmit = event => {
    event.preventDefault()
    const {nickname, species, h2o_frequency, image} = plant
    console.log('this is submit',plant)
    // axios.put(`/api/plants/:plant_id`, {nickname, species, h2o_frequency, image})
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
    .catch()
  }, [])
  
  const {nickname, species, h2o_frequency, image} = plant
    return(
        <div>
            <h2>Nickname: {nickname}</h2>
            <h4>Species: {species}</h4>
            <h4>Watering Schedule: {h2o_frequency}</h4>

            <form>
              Nickname<input name='nickname' id= '' value={nickname} onChange={inputChange}/>
              Species<input name='species' id= '' value={species} onChange={inputChange}/>
              How often do you water it a week?<input name='h2o_frequency' id= '' value={h2o_frequency} type='number' onChange={inputChange}/>
              Add an Image<input name='image' id= '' value={image} onChange={inputChange}/>
            </form>
            <button onClick={handleSubmit}>Save Changes</button>
            <h4><span>Delete From Collection</span></h4>
        </div>
    )
}
export default EditPlant