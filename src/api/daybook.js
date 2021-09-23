import axios from 'axios'

const daybookAPI = axios.create({
    baseURL:'https://lipo-fc4ae-default-rtdb.firebaseio.com'
})

export default daybookAPI