import React, { useState } from "react"
import {axiosWithAuth} from "../../utils/axiosWithAuth"
import {useHistory} from 'react-router-dom'

const AddPlant = {
  nickname: '',
  species: '',
  h2o_frequency: '',
  image: '',
};
const AddPlantForm1 = () => {
//props used here? Is this a ternary operator if props ? use props : use default
const user_id = localStorage.getItem('user_id')
const [form, setForm] = useState({ AddPlant })
const history = useHistory()

const submit = (event) => {
    event.preventDefault();

    const newPlant = {
      nickname: form.nickname,
      species: form.species,
      h2o_frequency: form.h2o_frequency,
      image: form.image
    };

    axiosWithAuth()
      .post(`/api/plants/user/${user_id}`, newPlant)
      .then((res) => {
        console.log(res);
        history.push('/collection')
      })
      .catch((res) => {});
  };

   const change = (event) => {
     const { value, name, type, checked } = event.target;
     const valueToUse = type === "checkbox" ? checked : value;
     setForm(name, valueToUse);
     setForm({ ...form, [name]: valueToUse });
   };

    return (
      <div>
        <div className="complete-card">
          <form onSubmit={submit}>
            Nickname
            <input
              type="text"
              name="nickname"
              onChange={change}
              placeholder="Plant Nickname"
            />
            Water Frequency
            <select
              type="text"
              value={form.h2o_frequency}
              name="h2o_frequency"
              onChange={change}
            >
              {/* Stretch to make the days start with todays day */}
              <option> Choose a day </option>
              <option value="1">Monday</option>
              <option value="2">Tuesday</option>
              <option value="3">Wednesday</option>
              <option value="4">Thursday</option>
              <option value="5">Friday</option>
              <option value="6">Saturday</option>
              <option value="7">Sunday</option>
            </select>
            Species
            <input 
              type='text'
              name='species'
              onChange={change}
              placeholder="Species"
            />
            Image
            <input 
              type='text'
              name='image'
              onChange={change}
              placeholder="image URL"
            />
            <button>ADD PLANT</button>
          </form>
        </div>
        
      </div>
    );
  };

  export default AddPlantForm1;
