import * as Types from "../constants/ActionTypes";
import { findByIndexId } from "../utils/index";

let initialState = [];

const products = (state = initialState, action) => {
    let index = null;
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            state = [...action.products];
            // return all products from server
            return [...state];

        case Types.DELETE_PRODUCTS:
            // Delete product
            index = findByIndexId(state, action.id);
            // Return lasted state 
            state.splice(index, 1);
            return [...state];
            

        case Types.ADD_PRODUCT:
            // Add new product
            state.push(action.product);
            return [...state];

        case Types.UPDATE_PRODUCT:
            // Find product being update
            index = findByIndexId(state, action.id);
            state[index] = { ...action.product };
            return [...state];
        default:
            return [...state];
    }
}

export default products;