import { AppBar, Box, Button, Card, CardActions, CardContent, CardHeader, Container, TextField, Toolbar, Typography } from '@mui/material'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import studentaction from '../action/studentaction'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const mapStateProps=(props)=>{
  return {student:props.student.student}
}
const mapDispatchToProps=(dispatch)=>{
  return {meditstudent:(payload)=>dispatch(studentaction.EDIT_STUDENT(payload))}
}
function withRouter(Component) {
  function ComponentWithRouter(props) {
    let params = useParams()
let mnavigate=useNavigate();
    return <Component {...props} navigate={mnavigate} params={params} />
  }
  return ComponentWithRouter
}
 class AddStudent extends Component {
  onLoad(){

    this.props.meditstudent(({name:'',email:''}));

  }
  savestudent(){
    new Promise((resolve,reject)=>{
      console.log("ooo",this.props.student)
      axios.post('http://localhost:5000/api/studentsave',this.props.student).then(resp=>{
        const  data=  resp.data
        resolve(data)
        
     }).catch(er=>{reject(er)});
  }).then(resp=>{
    this.props.navigate("/")
  }).catch(err=>{
    console.log(err)
  })
  }
  componentDidMount(){
    this.onLoad();
  }
  setName(e){
    this.props.meditstudent({name:e.target.value})
  
  }
  setEmail(e){
    this.props.meditstudent({email:e.target.value})
    
    
  }
  render() {
    return (
      <div>
      <Container maxWidth="sm">

      <Card sx={{ maxWidth: 800,marginTop:2 }}>
     
     <AppBar position="static" color="primary">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Add  Student
          </Typography>
         </Toolbar>
      </AppBar>

     
      <CardContent>
        
      <TextField sx={{marginBottom:2}} fullWidth required value={this.props.student.name} onChange={(e)=>this.setName(e)} id="name" label="Name" variant="outlined" />
      <TextField fullWidth value={this.props.student.email} onChange={(e)=>this.setEmail(e)}   required id="email" label="Email" variant="outlined" />
     
        </CardContent>
        <CardActions> <Button color="error" onClick={()=>{
          this.savestudent()
        }}>Save</Button></CardActions>
        </Card>

    </Container>
    
      </div>
    )
  }
}
const HOCTaskDetail = withRouter(AddStudent);

export default connect(mapStateProps,mapDispatchToProps) ( HOCTaskDetail);
