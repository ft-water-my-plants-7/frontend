import React, { useState, useEffect } from "react";
import axios from "axios";

const AddPlant = () => {
  const [form, setForm] = useState({
    nickname: "",
    startWatering: "",
    notes: "",
  });

  const submit = (event) => {
    event.preventDefault();
    const newPlant = {
      nickname: form.nickname,
      startWatering: form.startWatering,
      notes: form.notes,
    };
    axios
      .post("https://reqres.in/api/users", newPlant)
      .then((res) => {
        debugger;
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
        <form onSubmit={submit}>
          Nickname
          <input type="text" name="nickname" onChange={change} />
          Start watering
          <select type="text" value={form.startDate} name="startWatering" onChange={change}>
              {/* Stretch to make the days start with todays day */}
            <option value="1">Monday</option>
            <option value="2">Tuesday</option>
            <option value="3">Wednesday</option>
            <option value="4">Thursday</option>
            <option value="5">Friday</option>
            <option value="6">Saturday</option>
            <option value="7">Sunday</option>

          </select>
          Notes <input type="textarea" name="notes" onChange={change} />
          <button>ADD PLANT</button>
        </form>
      </div>
    );
  };

export default AddPlant