import React, {useState} from 'react'
import IndividualPlant from './individual-plant';
import NoPlant from './no-plant';
const dummyData = [
    {
        id: 1,
        nickname: 'Tim',
        scientificName: 'GREEN PLANT',
        img: 'https://www.gardeningknowhow.com/wp-content/uploads/2012/03/houseplant-sansevieria.jpg',
        waterFrequency: 'Twice Per Week - Friday, Monday',
        locating: 'Bathroom',
        notes: 'This is the best plant ever made in the world'
    },
    {
        id: 2,
        nickname: 'George',
        scientificName: 'GREEN PLANT',
        img: 'https://www.gardeningknowhow.com/wp-content/uploads/2012/03/houseplant-sansevieria.jpg',
        waterFrequency: 'Twice Per Week - Friday, Monday',
        locating: 'Bathroom',
        notes: 'This is the best plant ever made in the world'
    },
    {
        id: 3,
        nickname: 'Alex',
        scientificName: 'GREEN PLANT',
        img: 'https://www.perkinselearning.org/sites/elearning.perkinsdev1.org/files/plant-164500_960_720.jpg',
        waterFrequency: 'Twice Per Week - Friday, Monday',
        locating: 'Bathroom',
        notes: 'This is the best plant ever made in the world'
    },
]
const PlantCollection = () => {
    const [plants, setPlants] = useState(dummyData)
    console.log(plants)
    return(
        <div>
            {plants.length === 0 ? (<NoPlant /> ) : (
                <div>
                    <h2>Water my Plants</h2>
                    <div>
                        {plants.map((plant) => (
                            <IndividualPlant key={plant.id} plant={plant}/>
                        ))}
                    </div>
                </div>
                
            )}

        </div>
    )
}
export default PlantCollection