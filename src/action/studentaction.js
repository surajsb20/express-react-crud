import ActionType from "../ActionType";


const SET_STUDENT_LIST=(payload)=>({
  type:ActionType.SET_STUDENT_LIST ,
  payload:payload
})
const EDIT_STUDENT=(payload)=>({
    type:ActionType.EDIT_STUDENT ,
    payload:payload
  })
const DELETE_STIDENT=(payload)=>({
    type:ActionType.DELETE_STUDENT,
    payload:payload
})
const EDIT_STUDENT_SAVE=()=>({
  type:ActionType.EDIT_STUDENT_SAVE,
  payload:1
})
export default {SET_STUDENT_LIST,EDIT_STUDENT,DELETE_STIDENT,EDIT_STUDENT_SAVE};
