import React, {useState, useEffect} from 'react'
import IndividualPlant from './individual-plant';
import NoPlant from './no-plant';
import Header from "./header";
import { axiosWithAuth } from '../utils/axiosWithAuth';

// const dummyData = [
//     {
//         id: 1,
//         nickname: 'Tim',
//         species: 'GREEN PLANT',
//         img: 'https://www.gardeningknowhow.com/wp-content/uploads/2012/03/houseplant-sansevieria.jpg',
//         h2o_frequency: 'Twice Per Week - Friday, Monday',
//         locating: 'Bathroom',
//         notes: 'This is the best plant ever made in the world'
//     },
//     {
//         id: 2,
//         nickname: 'George',
//         species: 'GREEN PLANT',
//         img: 'https://www.gardeningknowhow.com/wp-content/uploads/2012/03/houseplant-sansevieria.jpg',
//         h2o_frequency: 'Twice Per Week - Friday, Monday',
//         locating: 'Bathroom',
//         notes: 'This is the best plant ever made in the world'
//     },
//     {
//         id: 3,
//         nickname: 'Alex',
//         species: 'GREEN PLANT',
//         img: 'https://www.perkinselearning.org/sites/elearning.perkinsdev1.org/files/plant-164500_960_720.jpg',
//         h2o_frequency: 'Twice Per Week - Friday, Monday',
//         locating: 'Bathroom',
//         notes: 'This is the best plant ever made in the world'
//     },
// ]
const PlantCollection = () => {
    const [plants, setPlants] = useState([])
    console.log(plants)
    useEffect(() => {
        axiosWithAuth()
        .get(`/api/plants`)
        .then((res) => {
            console.log(res)
            setPlants(res.data)

        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
    return(
        <div>
            <Header />
            {plants.length === 0 ? (<NoPlant /> ) : (
                <div>
                    <h2>Water my Plants</h2>
                    <div>
                        {plants.map((plant) => (
                            <IndividualPlant key={plant.id} setPlants={setPlants} plant={plant}/>
                        ))}
                    </div>
                </div>
                
            )}

        </div>
    )
}
export default PlantCollection