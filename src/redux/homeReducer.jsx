 import * as actionTypes from '../redux/actions'

let arr = new Array(3).fill(1);
const initialState = {
  propertyTypeArr: arr,
  state:"all",
  city:"all"
};
const homeReducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    // {console.log("aa")}

    case actionTypes.HANDLE_PROPERTY_TYPE:

      return {
        ...state,
        propertyTypeArr: [...arr],
      }

    case actionTypes.HANDLE_STATE:
      return{
        ...state,state:action.payload
      }

      case actionTypes.HANDLE_CITY:
        return{
          ...state,city:action.payload
        }

    default:
      return state;
  }
};

export default homeReducer;
