export const INCREMENT ='INCREMENT'
export const DECREMENT = 'DECREMENT'


export const incrementAction =(value)=>{
  return{
    type :INCREMENT,
    payload:value,
  }
}

export const decrementAction = (value)=>{
  return{
    type:DECREMENT,
    payload:value,
  }
}