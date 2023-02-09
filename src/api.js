import axios from 'axios';

const URL = 'https://serverh.onrender.com';

export const getalldata=async ()=>{
    try{
       return await axios.get(`https://odd-jade-llama-wrap.cyclic.app/compare/data`);
    }catch(error){
        console.log('Eror while calling getUsers API',error)
    }
    
}