import React from 'react'
import axios from 'axios'

const useFetchData = () => {
    return {
         getData(endpoint,params){
           return new Promise(async(success,reject)=>{
             try{
                 axios.get( endpoint,{params})
                       .then(res=> success(res.data))
                       .catch(err=> reject(err))
             }catch(error) {
              console.error(error);
             }
           })
         }
    };
}
 
export default useFetchData;

