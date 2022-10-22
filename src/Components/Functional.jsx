import React from "react";
import '../Styles/Functional.css'
export default function FunctionalComponenet()
{
    return (
    <h3> I AM A FUNCTIONAL COMPONENT 1<FunctionalComponenet2></FunctionalComponenet2><FunctionalComponenet3></FunctionalComponenet3>  </h3>
    
    );
}

//arrow function
const FunctionalComponenet2=()=>{
    return (
        <h4>Iam Functional component 2</h4>
    )
}

const FunctionalComponenet3=()=>{
    return (
        <thead>
            <tr>
                <FunctionalComponenet4></FunctionalComponenet4>
            </tr>
        </thead>
    )
}

const FunctionalComponenet4=()=>{
    return (
        <>
            <td>Name</td>
            <td>Age</td>
            <td>Place</td>
            <td> Designation</td>
        </>
            
    )
}
