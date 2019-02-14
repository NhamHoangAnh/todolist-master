import React, { Component } from 'react'
import Board from '../home/body/board'
import { Link } from 'react-router-dom'
import './boardpage.css'
import {Table,Button} from 'reactstrap'
import {withRouter} from 'react-router-dom'

 class boardpage extends Component {
     constructor(){
         super();
         this.state ={
             isLoading: false,
             data:[],
         }
     }
    signout=()=>{
        localStorage.clear()
        let path ='/';
       this.props.history.push(path)   
       window.location.reload()
 
       
    }
    //  fetchDelete =(Id) => {
    //     this.setState({
    //         isLoading: true,
    //     })
    //     fetch("" + Id, {
    //         method: "Delete"
    //     })
    //         .then(() =>{
    //             this.setState(({data}) =>({
    //                 data: this.state.data.filter(data => data.Id !== Id)
    //             }))
    //         }) 
    // }      
    // onDelete =() =>{
    //    this.fetchDelete(Id)
    // }

    render() {
        return (
            <div>
                <div className="container-fluid " id="header">
                    <div className="row">
                        <div className="col-md-10"  >
                            <i className="fas fa-tasks" style={{ marginRight: "10px" }}></i>
                            <Link to="/" style={{ textDecoration: "none", color: "#4267b2;", fontSize: "30px" }}>
                                <b> TO DO LIST</b>
                            </Link>
                        </div>
                        <div className="col-md-2" style={{ fontSize: "30px" }}>
                            <Link to="/">
                                <i className="fas fa-user header-icon" style={{ marginLeft: "80px", fontSize: "35px" }}></i>
                            </Link>                        
                            <Button onClick={this.signout} color="link">
                                <i className="fas fa-sign-out-alt header-icon" style={{ marginLeft: "20px", fontSize: "35px" }}></i>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Board />
                </div>
                <div style ={{marginTop: "100px"}}>
                    <Table>
                        <thead>
                            <tr>
                                <th><center>STT</center></th>
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
                                <td><center><input type="text"></input><button>Update</button></center></td>
                                <td><center><button>Delete</button></center></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        
        )
    }
}
export default withRouter(boardpage)