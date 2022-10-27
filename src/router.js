import { createBrowserRouter } from "react-router-dom";
import AddStudent from "./component/AddStudent";
import EditStudent from "./component/EditStudent";
import StudentList from "./component/StudentList";
const router=createBrowserRouter([
    {path:'/',element:<StudentList />},
    
    {path:'/addstudent',element:<AddStudent />},
    
    {path:'/editstudent',element:<EditStudent />},
])


export default router;