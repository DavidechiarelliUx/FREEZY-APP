export const ADD_FRIDGE_PRODUCT_SUCCESS="ADD_FRIDGE_PRODUCT_SUCCESS";
export const ADD_FRIDGE_PRODUCT_REQUEST = "ADD_FRIDGE_PRODUCT_REQUEST";
export const ADD_FRIDGE_PRODUCT_FALSE = "ADD_FRIDGE_PRODUCT_FALSE";

//fetch 
export const fetchFridgeProduct = (productData) => {
  return (dispatch) => {
    dispatch({ type: ADD_FRIDGE_PRODUCT_REQUEST });

    return fetch("http://localhost:8082/api/fridgeProducts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nella fetch");
        }
      })
      .then((data) => {
        dispatch({ type: ADD_FRIDGE_PRODUCT_SUCCESS, payload: data });
        return data; 
      })
      .catch((error) => {
        dispatch({ type: ADD_FRIDGE_PRODUCT_FALSE, payload: error.message });
        throw error;
      });
  };
};

export const FETCH_FRIDGE_PRODUCTS_REQUEST = "FETCH_FRIDGE_PRODUCTS_REQUEST";
export const FETCH_FRIDGE_PRODUCTS_SUCCESS = "FETCH_FRIDGE_PRODUCTS_SUCCESS";
export const FETCH_FRIDGE_PRODUCTS_FAILURE = "FETCH_FRIDGE_PRODUCTS_FAILURE";

export const getFridgeProducts = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_FRIDGE_PRODUCTS_REQUEST });

    return fetch("http://localhost:8082/api/fridgeProducts?page=0&size=100")
      .then((res) => {
        if (!res.ok) throw new Error("Errore nel recupero dei prodotti");
        return res.json();
      })
      .then((data) => {
        dispatch({ type: FETCH_FRIDGE_PRODUCTS_SUCCESS, payload: data.content });
      })
      .catch((err) => {
        dispatch({ type: FETCH_FRIDGE_PRODUCTS_FAILURE, payload: err.message });
      });
  };
};


export const DELETE_FRIDGE_PRODUCT_REQUEST = "DELETE_FRIDGE_PRODUCT_REQUEST";
export const DELETE_FRIDGE_PRODUCT_SUCCESS = "DELETE_FRIDGE_PRODUCT_SUCCESS";
export const DELETE_FRIDGE_PRODUCT_FAILURE = "DELETE_FRIDGE_PRODUCT_FAILURE";

export const deleteFridgeProduct = (productId) => {
  return (dispatch) => {
    dispatch({ type: DELETE_FRIDGE_PRODUCT_REQUEST });

    return fetch(`http://localhost:8082/api/fridgeProducts/${productId}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Errore nella cancellazione del prodotto");
        dispatch({ type: DELETE_FRIDGE_PRODUCT_SUCCESS, payload: productId });
      })
      .catch((err) => {
        dispatch({ type: DELETE_FRIDGE_PRODUCT_FAILURE, payload: err.message });
      });
  };
};
