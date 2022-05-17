import { ADDTOCART, LOWTOHIGH, HIGHTOLOW, REMOVECART, GETDATA } from './actionTypes';

export const addtocart = (data) => {
    return {
        "type": ADDTOCART,
        "payload": data
    }
}


export const removecart = (id) => {
    return {
        "type": REMOVECART,
        "payload": id
    }
}

export const lowtohigh = () => {
    console.log("LTH called");
    return {
        "type": LOWTOHIGH
    }
}

export const hightolow = () => {
    return {
        "type": HIGHTOLOW
    }
}

export const getdata = (arr) => {
    return{
    
        "type": GETDATA,
        "payload": arr
    }
}