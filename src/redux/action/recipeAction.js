export const SET_RECIPES_REQUEST = "SET_RECIPES_REQUEST";
export const SET_RECIPES_SUCCESS = "SET_RECIPES_SUCCESS";
export const SET_RECIPES_FALSE = "SET_RECIPES_FALSE";

export const fetchRecipe = () => {
    return(dispatch)=> {
        fetch("http://localhost:8082/api/recipes?page=0&size=100")
        .then((response) => {
            if(response.ok){
                return response.json();
            }else{
                throw new Error("errore nella fetch")
            }
        })
        .then((data)=> {
            dispatch({type : SET_RECIPES_SUCCESS , payload : data.content});
        })
        .catch((error)=> {
            dispatch({type: SET_RECIPES_FALSE, payload : error.message})
        })
    }
}


export const DELETE_RECIPE = "DELETE_RECIPE";

export const deleteRecipe = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:8082/api/recipes/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          dispatch({ type: DELETE_RECIPE, payload: id });
        } else {
          throw new Error("errore durante l'eliminazione");
        }
      })
      .catch((error) => {
        console.error("errore eliminazione :", error);
      });
  };
};

export const PUT_RECIPE = "PUT_RECIPE";

export const updateRecipe = (id, updatedData) => {
  return (dispatch) => {
    fetch(`http://localhost:8082/api/recipes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Errore durante la modifica");
        }
        return res.json();
      })
      .then((data) => {
        dispatch({ type: PUT_RECIPE, payload: data });
      })
      .catch((error) => {
        console.error("Errore PUT:", error);
      });
  };
};