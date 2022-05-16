import { ADDTOCART, REMOVECART } from './actionTypes';


const init=
{
    items:[]
}


export const reducer=(state=init,{type,payload})=>{
    console.log("I am payload ",payload);
   switch(type)
   {
       case ADDTOCART:return {...state,items:[...state.items,payload]}
       case REMOVECART: return { 
           ...state,
           items:state.items.filter((item)=>item.id!==payload)
        }
       default:{
           return state;
       }
   }

}