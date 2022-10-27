import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { Component } from 'react'
import { connect, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import studentaction from '../action/studentaction'

const mapStateProps=(props)=>{
    return {studentlist:props.student.studentlist}
}
const mapDispatchToProps=(dispatch)=>{
    return {getstudentlist:(payload)=>dispatch(studentaction.SET_STUDENT_LIST(payload))}
}

 class StudentList extends Component {
  constructor(props){
    super(props)
    this.deletestudent=this.deletestudent.bind(this)
  }
  deletestudent(items){
    console.log('item',items)
    new Promise((resolve,reject)=>{
      axios.post('http://localhost:5000/api/studentdelete',items).then(resp=>{
        const  data=  resp.data
        resolve(data)
        
     }).catch(er=>{reject(er)});
  }).then(resp=>{
 this.props.getstudentlist(resp)
   
  }).catch(err=>{
    console.log(err)
  })
  }
   loadstudentList(){
    new Promise((resolve,reject)=>{
        axios.get('http://localhost:5000/api/studentlist').then(resp=>{
          const  data=  resp.data.data
          resolve(data)
          
       }).catch(er=>{reject(er)});
    }).then(resp=>{
   console.log('pharma',resp)
   this.props.getstudentlist(resp)
     
    }).catch(err=>{
      console.log(err)
    })

   }
    componentDidMount(){
      //  this.props.getstudentlist();

        this. loadstudentList();
    }
  componentWillMount(){
   // this.props.getstudentlist();
  //  console.log('data',this.props.studentlist)
  }
    render() {
    return (
      <div>

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
           <TableCell align="right">Name</TableCell>
            <TableCell align="right">Eamail&nbsp;(g)</TableCell>
            <TableCell align="right">Action&nbsp;(g)</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.studentlist.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">
              <Link to={`editstudent/${row._id}`}>
          <Button variant="success"> Edit</Button>
        
           </Link>
        <Button color="error" onClick={this.deletestudent.bind(this,row)}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {/* <Button onClick={()=>{this.props.getstudentlist()}}>Reload</Button> */}
      </div>
    )
  }
}
export default connect(mapStateProps,mapDispatchToProps) (StudentList);