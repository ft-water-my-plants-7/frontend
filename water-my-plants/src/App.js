import React from "react";
import './App.css';
import { Route } from "react-router-dom";
import SignInForm from "./Components/sign-in";
import SignUpForm from "./Components/sign-up";
import PlantCollection from './Components/plant-collection';
import EditPlant from './Components/edit-plant';
import AddPlant from './Components/add-plant';


function App() {
  return (
    <div className="App">
      <Route exact path ='/' component={SignInForm}/>
      <Route path ='/Signup' component={SignUpForm}/>
      <Route path ='/Collection' component={PlantCollection}/>
      <Route path ='/Add' component={AddPlant}/>
      <Route path ='/Edit' component={EditPlant}/>

    </div>
  );
}

export default App;
