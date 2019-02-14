import React, { Component } from 'react'
import { Col, Row, FormGroup, Label, Input, Button, TabPane } from 'reactstrap'
import { Link, withRouter } from 'react-router-dom';
class signup extends Component {

    constructor(){
        super();
        this.state ={
            isRegistering: false,
            name:"",
            email:"",
            password:"",
            passwordRewrite:"",
            data:[],
            text:""
        }
    }
    onClick = () => {
        let passwordCf = this.state.password
        let passwordcheck = this.state.passwordRewrite
        const {text} = this.state;
        if (passwordCf === passwordcheck){
           this.fetchRegisration(text)
           alert("Congratulation! Your registration is success!")
        } else {
            alert("Your password is not correct")
        }
        // let path = "/";
        // console.log(path)
        // this.props.history.push(path)
    }
    fetchRegisration =() =>{
        this.setState({
            isRegistering: true,
        })
        fetch("",{
            method: "POST",
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
            .then(res =>res.json())
            .then(res =>{
                this.setState({
                    data: res,
                    isRegistering: false,
                })
            })
    }
    handleName =(e) =>{
        this.setState({
            name: e.target.value
        })
    }
    handleEmail =(e) =>{
        this.setState({
            email: e.target.value
        })
    }
    handlePassword =(e) =>{
        this.setState({
            password: e.target.value
        })
    }
    handlePasswordRewrite =(e) =>{
        this.setState({
            passwordRewrite: e.target.value
        })
    }
    render() {
        return (
            <TabPane tabId="2">
                <Row form>
                    <Col>
                        <FormGroup>
                            <Label for="input" >Name</Label>
                            <br />
                            <Input type="text" id="input" name="input" placeholder="ABC XYZ" onChange={this.handleName} value={this.state.name}></Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="email" >Email</Label>
                            <br />
                            <Input type="email" id="email" name="email" placeholder="email123@gmail.com" onChange={this.handleEmail} value={this.state.email}></Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col>
                        <FormGroup>
                            <Label for="password" >Password</Label>
                            <br />
                            <Input type="password" id="password" name="password" placeholder="Enter your password..." onChange={this.handlePassword} value={this.state.password}></Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col>
                        <FormGroup>
                            <Label for="password" >Rewrite password</Label>
                            <br />
                            <Input type="password" id="password" name="password" placeholder="Enter your password..." onChange={this.handlePasswordRewrite} value={this.state.passwordRewrite}></Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Button onClick={this.onClick} style={{ marginTop: "10px" }} color="primary">Sign up</Button>
                <Row form>
                    <p>or you have an account?
                    <Link to="/signinform">Click here</Link>
                    </p>
                </Row>
            </TabPane>


        )
    }
}
export default withRouter(signup)
