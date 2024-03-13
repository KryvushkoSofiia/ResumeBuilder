import React, { useContext } from "react";
import { FormDataContext } from "../../contexts/FormDataContext";


export default function Form() {
    const { state, dispatch } = useContext(FormDataContext);

    function handleFullNameChange(e) {
        dispatch({ type: 'ADD_FULLNAME', payload: e.target.value });
    }
    return (
        <div>
            <input type="name" value={state.fullName} onChange={handleFullNameChange}></input>
        </div>
    )

}
