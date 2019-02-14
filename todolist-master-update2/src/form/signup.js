import React, { Component } from 'react'
import { Col, Row, FormGroup, Label, Input, Button, TabPane } from 'reactstrap'
import {Link, withRouter} from 'react-router-dom';
 class signup extends Component {
    onClick=()=>{
     let path = "/"; 
     console.log(path)
      this.props.history.push(path)
      }
    render() {
        return (
            <TabPane tabId="2">
                <Row form>
                    <Col>
                        <FormGroup>
                            <Label for="input" >Name</Label>
                            <br />
                            <Input type="text" id="input" name="input" placeholder="ABC XYZ"></Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="email" >Email</Label>
                            <br />
                            <Input type="email" id="email" name="email" placeholder="email123@gmail.com"></Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col>
                        <FormGroup>
                            <Label for="password" >Password</Label>
                            <br />
                            <Input type="password" id="password" name="password" placeholder="Enter your password..."></Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col>
                        <FormGroup>
                            <Label for="password" >Rewrite password</Label>
                            <br />
                            <Input type="password" id="password" name="password" placeholder="Enter your password..."></Input>
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
