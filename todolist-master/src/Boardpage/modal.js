import React, { Component } from 'react'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Col, Label, Input} from 'reactstrap'
import { TimePicker } from 'antd'
import 'antd/dist/antd.css';
import moment from 'moment'

const format = 'hh:mm'
export default class modal extends Component {
    constructor(props){
        super(props);
        this.state={
            modal: false
        }
    }
    
  render() {
    return (
      <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
<ModalHeader toggle={this.toggle}>Add Task</ModalHeader>
          <ModalBody>
          <div>
        <Form>
          <FormGroup>
            <Col sm="12" md={{ size: 8 }}>
              <Label for="content">Task Name</Label>
              <Input
                type="textarea"
                id="Content"
                name="Content"
                onChange={event => this.onChange(event)}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm="12" md={{ size: 8}}>
              <Label for="object">Start</Label><br/>
              <TimePicker defaultValue={moment('12:08', format)} format={format} />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm="12" md={{ size: 8}}>
              <Label for="money">Due date</Label><br/>
              <TimePicker defaultValue={moment('12:08', format)} format={format} />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm="12" md={{ size: 8}}>
              <Label for="extra">Note</Label>
              <Input
                type="text"
                id="Extra"
                name="Extra"
                onChange={event => this.onChange(event)}
                value={this.state.Extra}
              />
            </Col>
          </FormGroup>
        </Form>
      </div>
          </ModalBody>
          <ModalFooter>
          <Button
              color="primary"
              onClick={this.props.toggle}
            >
              Submit
            </Button>
          </ModalFooter>
     </Modal>
    )
  }
}
