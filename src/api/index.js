import axios from "axios";

const URL = "https://covid19.mathdro.id/api";

export const fetchData = async()=>{
    try {
       const {data:{confirmed,recovered,deaths,lastUpdate}} =  await axios.get(URL);
       const newData = {
            confirmed,recovered,deaths,lastUpdate
       }
       return newData;
    } catch (error) {
        console.log(error);
    }

}