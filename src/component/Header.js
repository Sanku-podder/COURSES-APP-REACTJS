import React from "react";
import { Card, CardBody } from "reactstrap";

function Header({ name,title}){
    return(
        <div>
            <Card className="my-1 bg-warning mt-2">
                <CardBody>
                <h1 className="text-center my-1">Welcome to Application</h1>
                </CardBody>
            </Card>
            

        </div>
    );
};

export default Header;