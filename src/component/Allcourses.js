import React, { useState } from "react";
import Course from "./Course";


const Allcourses=()=>{
const[courses,setcourses]=useState([
    {title:"Java course",description:"This is demo course"},
    {title:"Reactjs course",description:"This is demo course"},
    {title:"Django course",description:"This is demo course"},
    {title:"Angular course",description:"This is demo course"}
])


    return(
        <div>
            <h1>All Courses</h1>
            <p>List of couses are as follows</p>

             {
                courses.length>0? courses.map((item)=>(
                    <Course Course={item}/>
                )):"no courses"
             }




        </div>
    );

};
export default Allcourses;