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

export const DELETE_TEMPLATE_SUCCESS = "DELETE_TEMPLATE_SUCCESS";

export const deleteProductTemplate = (id) => {
    return (dispatch)=> {
        fetch(`http://localhost:8082/api/product-templates/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
          .then((response) => {
            if (response.ok) {
              dispatch({ type: DELETE_TEMPLATE_SUCCESS, payload: id });
            } else {
              throw new Error("errore durante l'eliminazione");
            }
          })
          .catch((error) => {
            console.error("errore eliminazione :", error);
          });
    }
}

export const PUT_TEMPLATE_SUCCESS = "PUT_TEMPLATE_SUCCESS";
export const updateProductTemplate = (id, updatedData) => {
  return (dispatch) => {
    fetch(`http://localhost:8082/api/product-templates/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => {
        console.log("PUT status:", res.status); 
        if (!res.ok) throw new Error("Errore durante la modifica");
        return res.json();
      })
      .then((data) => {
        dispatch({ type: "PUT_TEMPLATE_SUCCESS", payload: data });
      })
      .catch((error) => {
        console.error("Errore PUT:", error);
      });
  };
};