import React from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";


const Addcourse=()=>{
     return(
        <div>
            <h1 className="text-center">Fill course details</h1>
            <Form>
                <FormGroup>
                    <Label for="userid" className="ms-3" style={{fontSize:30}}>Course Id</Label>
                    <Input type="text" placeholder="Enter id here" name="userid" id="userid"/>
                </FormGroup>

                <FormGroup>
                    <Label for="title" className="ms-3"style={{fontSize:30}}>Course Title</Label>
                    <Input type="text" placeholder="Enter title here" name="title" id="title"/>
                </FormGroup>
                <FormGroup>
                    <Label for="description" className="ms-3" style={{fontSize:30}}>Course Description</Label>
                    <Input type="textarea" placeholder="Enter description here" id="description" style={{height:100}}/>
                </FormGroup>
                <Container className="text-center">
                    <Button color="success">Add Course</Button>
                    <Button color="warning ms-2">Clear</Button>
                </Container>

            </Form>
        </div>
     )

}

export default Addcourse;
