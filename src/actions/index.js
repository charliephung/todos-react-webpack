import * as Types from "../constants/ActionTypes";
import apiCaller from "../utils/apiCaller";

// Meet thunks.
// A thunk is a function that returns a function.
// This is a thunk.
export const actRequestProduct = () => {
    // Invert control!
    // Return a function that accepts `dispatch` so we can dispatch later.
    // Thunk middleware knows how to turn thunk async actions into actions.
    return (dispatch) => {
        return apiCaller("GET", "products", null).then(res => {
            dispatch(actFetchProducts(res.data));
        });
    }
}
export const actFetchProducts = products => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}

// Delete product
export const actRequestDeleteProduct = id => {
    return dispatch => {
        return apiCaller("DELETE", `products/${id}`, null).then(res => {
            dispatch(actDeleteProduct(res.data.id));
        });
    }

}
export const actDeleteProduct = id => {
    return {
        type: Types.DELETE_PRODUCTS,
        id
    }
};

// Add product
export const actRequestAddProduct = (product) => {
    return dispatch => {
        return apiCaller("POST", "products", product).then(res => {
            dispatch(actAddProduct(res.data));
        })
    }
}
export const actAddProduct = product => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}
// Update product
export const actRequestUpdateProduct = (id, product) => {
    return dispatch => {
        return apiCaller("PUT", `products/${id}`, product).then(res => {
            dispatch(actUpdateProduct(id, res.data));
        })
    }
}
export const actUpdateProduct = (id, product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        id,
        product
    }
}
