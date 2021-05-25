
import React, {useState} from 'react'


const initialFormValues = {
    name:'',
    notes:'',
    schedule:'',
}

const EditPlant = () => {

    //States
    const [formValues, setFormValues] = useState(initialFormValues)

    //Event handlers
    const onChange = evt => {
        const {name,value} = evt.target
        setFormValues({...formValues, [name]:value})
    }

    const onSubmit = evt => {
        evt.preventDefault()
        console.log(formValues)
    }

    return(
        <div>
            <h2>Name of plant</h2>
            <h4>latin name</h4>
            <p>Watering Schedule</p>
            <form>
                <label>Nickname
                <input type='text' name='name' onChange={onChange}/>
                </label>
                <label>Start Watering
                <select type='select' name='schedule' onChange={onChange}>
                    <option>Sunday</option>
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednsday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                    <option>Saturday</option>
                </select>
                </label>
                <label>Notes
                <input type='text' name='notes' onChange={onChange}/>
                </label>
            </form>
            <button>Save Changes</button>
            <h4><span>Delete From Collection</span></h4>
        </div>
    )
}
export default EditPlant