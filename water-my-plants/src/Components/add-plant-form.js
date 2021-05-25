import React, { useState } from "react"
import axios from "axios"

const AddPlantForm = () => {
  const [form, setForm] = useState({
    name: "",
    latinName: "",
    nickname: "",
    waterFrequency: "",
    startWatering: "",
    notes: "",
  });

  //props used here? Is this a ternary operator if props ? use props : use default
  const submit = (event) => {
    event.preventDefault();
    const newPlant = {
    // name: form.name,
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

  export default AddPlantForm;

// import React from "react";

// export default function FriendForm(props) {
//   // THESE ARE THE **EXACT PROPS** FriendForm EXPECTS!!!
//   const { values, update, submit, submit1 } = props;

//   const onChange = (evt) => {
//     // 🔥 STEP 6 - IMPLEMENT the change handler for our inputs and dropdown
//     // a) pull the name of the input from the event object
//     // b) pull the value of the input from the event object
//     const { name, value } = evt.target;
//     // c) use the `update` callback coming in through props
//     update(name, value);
//   };

//   const onSubmit = (evt) => {
//     // 🔥 STEP 7 - IMPLEMENT the submit handler
//     // a) don't allow the browser to reload!
//     // c) use the `submit` callback coming in through props
//     evt.preventDefault();
//     submit();
//   };

//   return (
//     <form className="form container" onSubmit={onSubmit}>
//       <div className="form-group inputs">
//         {/* ////////// TEXT INPUTS ////////// */}
//         {/* ////////// TEXT INPUTS ////////// */}
//         {/* ////////// TEXT INPUTS ////////// */}
//         <label>
//           Username
//           {/* 🔥 STEP 3 - Make an input of type `text` for username.
//               Controlled inputs need `value` and `onChange` props.
//               Inputs render what they're told - their current value comes from app state.
//               At each keystroke, a change handler fires to change app state. */}
//           <input
//             type="text"
//             name="username"
//             onChange={onChange}
//             value={values.username}
//           />
//         </label>

//         <label>
//           Email
//           {/* 🔥 STEP 4 - Make an input of type `email` or `text` for email. */}
//           <input
//             type="email"
//             name="email"
//             value={values.email}
//             onChange={onChange}
//           />
//         </label>

//         {/* ////////// DROPDOWN ////////// */}
//         {/* ////////// DROPDOWN ////////// */}
//         {/* ////////// DROPDOWN ////////// */}
//         <label>
//           Role
//           {/* 🔥 STEP 5 - Make dropdown for role. */}
//           <select value={values.role} name="role" onChange={onChange}>
//             <option value="">-- Select a Role --</option>
//             <option value="Student">Student</option>
//             <option value="TL">Team Lead</option>
//             <option value="Instructor">Instructor</option>
//             <option value="Alumni">Alumni</option>
//           </select>
//         </label>

//         <div className="submit">
//           <button disabled={!values.username || !values.email || !values.role}>
//             submit
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// }
