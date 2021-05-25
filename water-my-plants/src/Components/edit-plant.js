
import axios from 'axios'
import React, {useState, useEffect} from 'react'


const EditPlant = () => {

    //States
    const [plant, setPlant] = useState({
      nickname:'',
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
    // console.log(plant)
  }

  const {nickname, species, h2o_frequency, image} = plant


  // this is making sure all data is all submitted at once when the form submits
  const handleSubmit = event => {
    event.preventDefault()
    console.log('this is submit',plant)
    // axios.put(`/api/plants/:plant_id`, {nickname, species, h2o_frequency, image})
  }

    // useEffect(() => {
    //   axios.get(`/api/plants/${plant_id}`)
    //   setPlant(res.data)
    // },[])
    

    return(
        <div>
            <h2>Name of plant</h2>
            <h4>latin name</h4>
            <p>Watering Schedule</p>
            <form>
              Nickname<input name='nickname' id= '' value={nickname} onChange={inputChange}/>
              Species<input name='species' id= '' value={species} onChange={inputChange}/>
              How often do you water it?<input name='h2o_frequency' id= '' value={h2o_frequency} type='number' onChange={inputChange}/>
              Add an Image<input name='image' id= '' value={image} onChange={inputChange}/>
            </form>
            <button onClick={handleSubmit}>Save Changes</button>
            <h4><span>Delete From Collection</span></h4>
        </div>
    )
}
export default EditPlant