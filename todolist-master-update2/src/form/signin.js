import React, { Component } from 'react'
import { Button, Col, Row, FormGroup, Label, Input, TabPane } from 'reactstrap'
import { withRouter } from 'react-router-dom'
class signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signined: false,
            email:"",
            password:"",
            data:[],
            text:""
        }
    }
    onClick = () => {
        const {text} = this.state;
        this.fetchSignin(text)
    }
    fetchSignin = () => {
        fetch("", {
            method: "Post",
            headers: {
                //Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: this.state.email,          // hardcode mai lap cai lay email va password
                password: this.state.password,
            })
        })
            .then(res => {
                if (res.authentic) { //authentic ?
                    this.props.Signin()
                    let path = "/";
                    this.props.history.push(path)
                } else {
                    throw Error("Please check your email or password")
                }
            })
            .then(json =>{
                this.setState({
                    signined: true,
                    data: json
                })
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
    
    render() {
        return (
            <TabPane tabId="1">
                <Row form>
                    <Col>
                        <FormGroup>
                            <Label for="email" >Email</Label>
                            <br />
                            <Input type="email" id="email" name="email" placeholder="email123@gmail.com" onChange={this.handleEmail} value={this.state.value}></Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <br />
                            <Input type="password" id="password" name="password" placeholder="Enter your password..." onChange={this.handlePassword} value={this.state.value}></Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Button onClick={this.onClick} style={{ marginTop: "10px" }} color="primary">Sign in</Button>

            </TabPane>
        )
    }
}
export default withRouter(signin)