import axios from 'axios'
const instance=axios.create({
    baseURL:'https://fakestoreapi.com'  //your base url
});
export default instance