 import * as actionTypes from '../redux/actions'

let arr = new Array(3).fill(1);
let arr0=new Array(3).fill(0);
const initialState = {
  propertyTypeArr: arr,
};
const homeReducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    // {console.log("aa")}

    case actionTypes.HANDLE_PROPERTY_TYPE:
    //   let tempArr = [...state.propertyTypeArr];
    //   tempArr[0] = 1 - tempArr[0];
      console.log("bb");
      return {
        ...state,
        propertyTypeArr: [...arr0],
      }

    default:
      return state;
  }
};

export default homeReducer;
