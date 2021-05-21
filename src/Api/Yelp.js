import axios from "axios";
import { get } from "react-native/Libraries/Utilities/PixelRatio";

const baseURL="https://rent-challenge-api.herokuapp.com";
export default axios.create({
 
});

export const getAllRents= async()=>{
    const response=await axios.get(baseURL+'/rents');
    return response.data;
}

export const getRentById=async(id)=>{
    const response=await axios.get(baseURL+`/rents/${id}`);
    return response.data;
}