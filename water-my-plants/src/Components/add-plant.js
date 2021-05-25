import React, { useState, useEffect } from "react";
import axios from "axios";

const AddPlant = () => {
  const [form, setForm] = useState({
    name: "",
    latinName: "",
    nickname: "",
    waterFrequency: "",
    startWatering: "",
    notes: "",
  });

  const submit = (event) => {
    event.preventDefault();
    const newPlant = {
    name: form.name,
    latinName: form.latinName,
      nickname: form.nickname,
      waterFrequency: form.waterFrequency,
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
        <div className="complete-card">
          <form onSubmit={submit}>
            Nickname
            <input
              type="text"
              name="nickname"
              onChange={change}
              placeholder="Plant Nickname"
            />
            Start watering
            <select
              type="text"
              value={form.startDate}
              name="startWatering"
              onChange={change}
            >
              {/* Stretch to make the days start with todays day */}
              <option> Choose a day </option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
            Notes{" "}
            <input
              type="textarea"
              name="notes"
              onChange={change}
              placeholder="Notes ..."
            />
            <button>ADD PLANT</button>
          </form>
        </div>
        <div className="add-plant-card-1">
          <form onSubmit={submit}>
            {/* Hidden fields */}
            <input
              type="hidden"
              name="name"
              onChange={change}
              value={(form.name = "Hibiscus")}
            />
            <input
            type="hidden"
            name="latinName"
            onChange={change}
            value={form.latinName = "lorem ipsum"}
            />
            <input
              type="hidden"
              name="waterFrequency"
              onChange={change}
              value={(form.waterFrequency = "Once per week")}
            />
            Nickname
            <input
              type="text"
              name="nickname"
              onChange={change}
              placeholder="Plant Nickname"
            />
            Start watering
            <select
              type="text"
              value={form.startDate}
              name="startWatering"
              onChange={change}
            >
              {/* Stretch to make the days start with todays day */}
              <option> Choose a day </option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
            Notes{" "}
            <input
              type="textarea"
              name="notes"
              onChange={change}
              placeholder="Notes ..."
            />
            <button>Create card</button>
          </form>
        </div>
      </div>
    );
  };

export default AddPlant