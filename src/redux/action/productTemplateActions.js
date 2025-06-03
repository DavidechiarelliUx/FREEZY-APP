export const FETCH_TEMPLATE_REQUEST = "FETCH_TEMPLATE_REQUEST";
export const FETCH_TEMPLATE_SUCCESS = "FETCH_TEMPLATE_SUCCESS";
export const FETCH_TEMPLATE_FALSE = "FETCH_TEMPLATE_FALSE";

//fetch 

export const fetchProductTemplate = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_TEMPLATE_REQUEST });

        fetch("http://localhost:8082/api/product-templates?page=0&size=100")
          .then((response) => {
            if (!response.ok) {
              throw new Error("errore nella fetch");
            } else {
              return response.json();
            }
          })
          .then((data) => {
            dispatch({ type: FETCH_TEMPLATE_SUCCESS, payload: data.content });
          })
          .catch((error) => {
            dispatch({ type: FETCH_TEMPLATE_FALSE, payload: error.message });
          });
    }
}