import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/'

export const createUser = ({ username, password, firstName, lastName }) => {
    axios ({
        method: 'post', 
        url: `${baseUrl}/create-user/`,
        data: {
            username, 
            password,
            first_name: firstName,
            last_name: lastName,
        }
    }).then (response => {
        console.log('Create USER RESPONSE: ', response)
    })
    .catch(error => console.log('ERROR: ', error))
}


export const fetchUser = ({ auth }) => {
    axios({
        method: 'get', 
        url: `${baseUrl}/profiles/`, 
        headers: {
            Authorization: `Bearer ${auth.accessToken}`
        }
    }).then(response => {
        console.log('FETCH USER RESPONSE:', response)
    }).catch(error => console.log('ERROR: ', error))
}

 
export const getToken = ({ auth, username, password }) => {
    console.log('Here!!!! get the token')
    axios.post(`${baseUrl}/token/`, {
        username, 
        password
    })
    .then(response => {
        console.log('here is a response ', response)
        auth.setAccessToken(response.data.access)
        fetchUser({ auth })
    })
    .catch(error => console.log('ERRORRR: ', error))
}








