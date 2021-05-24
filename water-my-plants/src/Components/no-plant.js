import {useHistory} from 'react-router-dom'

const NoPlant = () => {
    const history = useHistory()

    const onChange = (e) => {
        e.preventDefault()
        history.push("/Add")
    }
    return(
        <div>
            <h1>Don't have any plants??</h1>
            <button onClick={onChange} >Add One</button>
        </div>
    )
}
export default NoPlant