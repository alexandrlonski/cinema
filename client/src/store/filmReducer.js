import { createStore } from "redux"

const initialSate = {
  id: 1
}

const CHANGE_ID = "CHANGE_ID"

const filmReducer = (state = initialSate, action) => {
 switch (action.type) {
  case CHANGE_ID:
   return {...state, id: action.payload}
   
  default:
   return state
   
 }
}
export const changeFilm = (payload) => ({
 type: CHANGE_ID,
 payload,
})
export const store = createStore(filmReducer)