import { AppBar, Box, Button, Card, CardActions, CardContent, Container, TextField, Toolbar, Typography } from '@mui/material'
import axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import studentaction from "../action/studentaction"
import { useNavigate, useParams } from 'react-router-dom';

 
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
class EditStudent extends Component {

  componentDidMount(){
  
 this.onLoad()
  }
  onLoad(){
console.log('mid',this.props.params.id)
    new Promise((resolve,reject)=>{
      axios.get('http://localhost:5000/api/studentedit/'+this.props.params.id).then(resp=>{
        const  data=  resp.data.data
        resolve(data)
        
     }).catch(er=>{reject(er)});
  }).then(resp=>{
  this.props.meditstudent(resp)
  }).catch(err=>{
    console.log(err)
  })
  }
  setName(e){
    this.props.meditstudent({name:e.target.value})
  
  }
  setEmail(e){
    this.props.meditstudent({email:e.target.value})
    
    
  }
  updatestudent(){
    new Promise((resolve,reject)=>{
      axios.post('http://localhost:5000/api/studentupdate',this.props.student).then(resp=>{
        const  data=  resp.data
        resolve(data)
        
     }).catch(er=>{reject(er)});
  }).then(resp=>{
    this.props.navigate("/")
  }).catch(err=>{
    console.log(err)
  })
  }

  render() {
    
    return (
      <div>
        <Container maxWidth="sm">

      <Card sx={{ maxWidth: 800,marginTop:2  }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Edit Student
          </Typography>
         </Toolbar>
      </AppBar>
      <CardContent>
      <TextField fullWidth sx={{marginBottom:2}} required value={this.props.student.name} onChange={(e)=>this.setName(e)} id="name" label="Name" variant="outlined" />
      <TextField fullWidth value={this.props.student.email} onChange={(e)=>this.setEmail(e)}   required id="email" label="Email" variant="outlined" />
     
        </CardContent>
        <CardActions> <Button color="error" onClick={()=>{
          this.updatestudent()
        }}>Save</Button></CardActions>
        </Card>
        </Container>
        </div>)
  }
}
const HOCTaskDetail = withRouter(EditStudent);

export default connect(mapStateProps,mapDispatchToProps) (HOCTaskDetail);