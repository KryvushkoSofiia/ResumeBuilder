import React, { useContext } from "react";
import { FormDataContext } from "../../contexts/FormDataContext";

export default function EducationForm() {
    const { state, dispatch } = useContext(FormDataContext);
    return (
        <div>
            <input placeholder="School" value={state.educations[0].school} onChange={(e) => dispatch({ type: 'ADD_EDUCATION_SCHOOL', payload: e.target.value })}></input>
        </div>
    );
}
