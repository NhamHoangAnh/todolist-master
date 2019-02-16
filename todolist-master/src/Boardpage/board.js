import React, { Component } from 'react'
import { Table, Button } from 'reactstrap'
import Modaladd from './modal'
import Modaldel from './modaldel'
export default class board extends Component {
  constructor(props) {
    super(props)
    this.state = {
    isLoading: false,
     modal: false,
     modaldel: false,
     data: []
    }
  }
  toggle=()=>{
    this.setState({modal: !this.state.modal})
}
toggledel=()=>{
  this.setState({modaldel: !this.state.modaldel})
}
  onAdd =()=>{
       
  }
  //call api get all
  fetchAlltask = () => {
    this.setState({
        isLoading: true
    });
    fetch("http://192.168.1.50:8080/api/task/getalltasks/1", {
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            this.setState({
                data: response,
                //id: response.Id,
                isLoading: false
            });
        });
};
componentDidMount(){
  this.fetchAlltask()
}
    //call api delete
         fetchDelete =(Id) => {
         this.setState({
             isLoading: true,
         })
         fetch("http://192.168.1.50/api/task/getalltasks/" + Id, {
             method: "Delete"
         })
             .then(() =>{
                 this.setState(({data}) =>({
                     data: this.state.data.filter(data => data.Id !== Id)
                 }))
             }) 
     }      
     onDelete =(Id) =>{
        this.fetchDelete(Id)
        this.setState({modaldel: !this.state.modaldel})
     } 
  render() {
    return (
      <div className="row" style={{ marginTop: "7.5%", textAlign: "center" }}>
        {/* <div className="col-md-2" style={{fontSize: "20px", paddingTop: "20px"}}>          
            <i className="far fa-check-circle" style={{marginRight: "10px"}}></i>           
            <b>MY LISTS</b>           
        </div>
        <div className="col-md-10" style={{backgroundColor: "#dfe1e2",  paddingTop: "20px", height: "100%"}}>
            xyz
        </div> */}   
        <div className="col-md-10"></div>
        <div className="col-md-2" style={{marginBottom: "20px"}}>
          <Button onClick={this.toggle}>
            Add Task
        </Button>
        <Modaladd toggle={this.toggle} modal={this.state.modal}/>
        </div>
        <Table>
          <thead>
            <tr>
              <th><center>Job Check</center></th>
              <th><center>Job</center></th>
              <th><center>Day Begin</center></th>
              <th><center>Deadline</center></th>
              <th><center>Update</center></th>
              <th><center>Delete</center></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><center>1</center></td>
              <td><center><input type="checkbox"></input></center></td>
              <td><center>Buy Milk</center></td>
              <td><center></center></td>
              <td><center></center></td>
              <td><Button color='link'>
                <i className="fas fa-edit" style={{ fontSize: "25px" }}></i>
              </Button></td>
              <td><Button onClick={this.toggledel} color='link'>
                <i className="fas fa-trash-alt" style={{ fontSize: "25px" }}></i>
              </Button>
              <Modaldel modaldel={this.state.modaldel} toggledel={this.toggledel} />
              </td>
            </tr>
             {this.state.data.map((item, index)  =>
                            <tr>
                                <td></td>
                                <td><center>{item.taskName}</center></td>
                                <td><center>{item.start}</center></td>
                                <td><center>{item.due}</center></td>
                                <td><center>{item.note}</center></td>
                            </tr>)}
          </tbody>
        </Table>
      </div>

    )
  }
}
