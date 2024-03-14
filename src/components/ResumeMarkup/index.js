import React, {useContext} from "react";
import { FormDataContext } from "../../contexts/FormDataContext";

export default function ResumeMarkup(){

    const {state} = useContext(FormDataContext);

    return(
        <div className="resume-markup__wrapper">
            
            
            <div className="resume-markup__personal-details">
            {state.fullName}
            {state.email}
            {state.phoneNumber}
            {state.gitHubURL}
            {state.linkedInURL}
            {state.address} 
            {state.city}
            {state.state}
            </div>
            <div className="resume-markup__experience">

            </div>
            
        </div>
    )
}
