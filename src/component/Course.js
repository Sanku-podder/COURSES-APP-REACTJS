import React from "react";
import{
    Card,CardBody,CardTitle,CardSubtitle,CardText,CardFooter,Button,Container
} from "reactstrap";

const Course=({Course})=>{
return(
    <Card className="text-center">
        <CardBody>
            <CardSubtitle className="fw-bold">{Course.title}</CardSubtitle>
            <CardText>{Course.description}</CardText>
            <Container >
                <Button color="danger">Delete</Button>
                <Button color="warning ms-3">Update</Button>
            </Container>
        </CardBody>
    </Card>
);

};

export default Course;