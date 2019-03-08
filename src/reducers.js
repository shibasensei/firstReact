import {CHANGE_SEARCH_FIELD} from './constants';

const initialState = {
  searchBox: '',
}

export const searchRobots = (state = initialState ,action = {}) =>{
  switch(action.type){
    case: CHANGE_SEARCH_FIELD:
      return Object.assign({}, state,{searchBox:action.payload});
      break;
    default:
      return state;
  }
}
