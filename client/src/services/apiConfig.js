import axios from 'axios'

let apiUrl

const apiUrls = {
    production: 'https://p3-groceries-app.herokuapp.com/api/products',
    development: 'http://localhost:3000'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}

const api = axios.create({
    baseURL: apiUrl
})

export default api