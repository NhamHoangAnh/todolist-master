import React, { Component } from 'react'
import { Button, Col, Row, FormGroup, Label, Input, TabPane } from 'reactstrap'
import { withRouter } from 'react-router-dom'
class signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signined: false,
            number:"",
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
                number: this.state.number,          
                password: this.state.password,
            })
        })
            .then(res => {
                if (res.success) {// check xem co dung voi email va password k
                    this.props.Signin()
                    let path = "/";
                    this.props.history.push(path)
                } else {
                    throw Error("Please check again your email or password")
                }
            })
            .then(json =>{
                this.setState({
                    signined: true,
                    data: json
                })
            })
    }
    handleNumber =(e) =>{
        this.setState({
            number: e.target.value
        })
    }
    handlePassword =(e) =>{
        this.setState({
            password: e.target.value
        })
    }
    
    render() {
        console.log(this.state.number)
        return (
            <TabPane tabId="1">
                <Row form>
                    <Col>
                        <FormGroup>
                            <Label for="number" >Number</Label>
                            <br />
                            <Input type="number" id="number" name="number" placeholder="098.." onChange={this.handleNumber} value={this.state.value}></Input>
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