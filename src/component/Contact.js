import React from "react";
import { Link } from "react-router-dom";
import { List, ListGroup } from "reactstrap";

const Contact=()=>{
    return(
        <div>
        <List style={{background:"lightgrey"}}>
            <Link>Phone</Link>
            <hr/>
            <Link>Email</Link>
            <hr/>
            <Link>Facebook</Link>
            <hr/>
            <Link>Twitter</Link>
        </List>

        </div>
    );
};


export default Contact;