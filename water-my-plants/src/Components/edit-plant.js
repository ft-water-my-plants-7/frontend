
import axios from 'axios'
import React, {useState, useEffect} from 'react'


const EditPlant = () => {

    //States
    const [plant, setPlant] = useState({})

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
              Nickname<input name='' id= '' value=''/>
              Species<input name='' id= '' value=''/>
              How often do you water it?<input name='' id= '' value='' type='number'/>
              Add an Image<input name='' id= '' value=''/>
            </form>
            <button>Save Changes</button>
            <h4><span>Delete From Collection</span></h4>
        </div>
    )
}
export default EditPlant