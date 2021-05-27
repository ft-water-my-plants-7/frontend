import axios from 'axios'

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token')

  return axios.create({
    headers: {
      Authorization: token
    },
     baseURL: 'https://ft-water-my-plants-3.herokuapp.com/'
  })
}
