import axios from 'axios';
import ActionType from '../ActionType';

const initstudent={studentlist:[{name:'dd',email:'ddddd'}],student:{name:'',email:'',_id:0}};

const student=(state=initstudent,action)=>{
switch(action.type){

    case ActionType.SET_STUDENT_LIST :
        let data;
        return {...state,studentlist:action.payload};
        // new Promise((resolve,reject)=>{
    //     axios.get('http://localhost:5000/api/studentlist').then(resp=>{
    //         data=  resp.data.data
    //       resolve(data)
          
    //    }).catch(er=>{reject(er)});
    // }).then(resp=>{
    //     return {...state,studentlist:resp};
        
     
    // }).catch(err=>{
    //     return state;
    // })
       
     
      break;

    case ActionType.EDIT_STUDENT :
      let mdata=Object.assign({},state.student,action.payload);
    console.log('epayload',mdata)
      
        return {...state,student:mdata}
        break;
   case ActionType.EDIT_STUDENT_SAVE :
     
   break;
        case ActionType.DELETE_STUDENT :
    return state 
    break;    
    
    default :
    return state;
}

}

export default student;