import axios from "axios"

const BASE_URL="http://api.weatherapi.com/v1";
const API_KEY= import.meta.env.VITE_API_WEATHER;

const fetchWeather =async (city = "Delhi")=>{
    try{
        const {data}=await axios.get(`${BASE_URL}/current.json`,{
            params:{
                key: API_KEY,
                q: city
            }
        });
        return data;
    }catch(error){
        console.log(error);
    }
}

export default fetchWeather;