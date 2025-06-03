import { FETCH_TEMPLATE_FALSE, FETCH_TEMPLATE_REQUEST, FETCH_TEMPLATE_SUCCESS } from "../action/productTemplateActions";

const initialState={
    template:[],
    loading:false,
    error : null,
}

const productTemplateReducers =( state = initialState , action)=>{

    switch(action.type){
        case FETCH_TEMPLATE_REQUEST:
            return{
                ...state , loading:true , error : null,
            };
        case FETCH_TEMPLATE_SUCCESS:
            return{
                ...state , loading:false , template:action.payload
            };
        case FETCH_TEMPLATE_FALSE:
            return{
                ...state , loading:false , error: action.payload
            }
        default :
        return state;
    }
}

export default productTemplateReducers