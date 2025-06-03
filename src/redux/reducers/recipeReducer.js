import { SET_RECIPES_FALSE, SET_RECIPES_SUCCESS, SET_RECIPES_REQUEST } from "../action/recipeAction";

const initialState={
    recipes : [],
    loading:false,
    error: null
}

const recipeReducers = (state = initialState, action)=> {
    switch (action.type){
        case SET_RECIPES_REQUEST:
            return{
                ...state, loading:true, error:null
            };
        case SET_RECIPES_SUCCESS:
            return{
                ...state, loading:false, recipes:action.payload
            };
        case SET_RECIPES_FALSE:
            return{
                ...state, loading:false, error:action.payload
            };
        default : 
            return state;

    }
}

export default recipeReducers