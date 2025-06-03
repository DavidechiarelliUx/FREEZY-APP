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
