import React, { useState, useEffect } from "react";
import axios from "axios";
import AddPlantForm1 from "./plant-forms/add-plant-form1"
import AddPlantForm2 from "./plant-forms/add-plant-form2"
import AddPlantForm3 from "./plant-forms/add-plant-form3"
import Header from "./header"



const AddPlant = () => {

 return (
   <div>
    <Header/>
     <AddPlantForm1 />
     <AddPlantForm2 />
     <AddPlantForm3 />
   </div>
 )

}
    

export default AddPlant


