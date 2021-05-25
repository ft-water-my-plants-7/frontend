import React from "react";
import './App.css';
import { Route } from "react-router-dom";
import SignInForm from "./Components/sign-in";
import SignUpForm from "./Components/sign-up";
import PlantCollection from './Components/plant-collection';
import EditPlant from './Components/edit-plant';
import AddPlant from './Components/add-plant';
import PrivateRoute from './Components/PrivateRoute';


function App() {
  return (
    <div className="App">
      <Route exact path ='/' component={SignInForm}/>
      <Route path ='/Signup' component={SignUpForm}/>
      <PrivateRoute path ='/Collection' component={PlantCollection}/>
      <PrivateRoute path ='/Add' component={AddPlant}/>
      <PrivateRoute path ='/Edit' component={EditPlant}/>

    </div>
  );
}

export default App;
