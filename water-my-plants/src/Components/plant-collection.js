import React, {useState} from 'react'
import IndividualPlant from './individual-plant';
import NoPlant from './no-plant';
const dummyData = [
    {
        id: 1,
        name: 'Tim'
    },
    {
        id: 2,
        name: 'TimA'
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