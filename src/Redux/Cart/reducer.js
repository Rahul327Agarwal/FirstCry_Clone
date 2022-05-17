import { ADDTOCART, REMOVECART, GETDATA, LOWTOHIGH } from './actionTypes';


const init =
{
    items: [],
    sorted_data: []
}

// imgurl.sort(function (a, b) {
//     return a.price - b.price;
// });

export const reducer = (state = init, { type, payload }) => {
    console.log("I am payload ", payload);
    switch (type) {
        case ADDTOCART: return { ...state, items: [...state.items, payload] }
        case REMOVECART: return {
            ...state,
            items: state.items.filter((item) => item.id !== payload)
        }
        case LOWTOHIGH:
            console.log("LTH Reducer called");
            return {
                ...state,
                sorted_data: state.items.sort(function (a, b) {
                    return a.price - b.price;
                })
            }
        case GETDATA: return { ...state, items: payload, sorted_data: payload }
        default: {
            return state;
        }
    }

}