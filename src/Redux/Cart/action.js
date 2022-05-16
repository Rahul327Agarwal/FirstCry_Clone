import {ADDTOCART,REMOVECART} from './actionTypes';

export const addtocart=(data)=>{
   return {
       "type":ADDTOCART,
       "payload":data
   } 
}


export const removecart = (id) => {
    return {
        "type": REMOVECART,
        "payload": id
    }
}