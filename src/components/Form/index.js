import React, { useContext, useState} from "react";
import { FormDataContext } from "../../contexts/FormDataContext";


import styles from './Form.module.scss';
import EducationForm from "../EducationForm";


export default function Form() {
    const { state, dispatch } = useContext(FormDataContext);

    const [showEducationForm, setShowEducationForm] = useState(false);


    function handleChange(e, type) {
        dispatch({ type: type, payload: e.target.value })
    }

    function handlePDFCreation (e){
        e.preventDefault();
    }

    function handleAddExperience (e){
        e.preventDefault();
        
    }
    function handleAddEducation (e){
        e.preventDefault();
        setShowEducationForm(true);

    }
    return (
        <div className={styles.form__wrapper}>
            <h1 className={styles.form_header}>Fill the inputs with your data</h1>
            <form className={styles.form}>

                <input className={styles.input} type='text' value={state.fullName} onChange={(e) => handleChange(e, 'ADD_FULLNAME')} placeholder="Full Name"></input>
                <input className={styles.input} type='email' value={state.email} onChange={(e) => handleChange(e, 'ADD_EMAIL')} placeholder="Email"></input>
                <input className={styles.input} type='tel' value={state.phoneNumber} onChange={(e) => handleChange(e, 'ADD_PHONENUMBER')} placeholder="Phone number"></input>
                <input className={styles.input} type='url' value={state.gitHubURL} onChange={(e) => handleChange(e, 'ADD_GITHUBURL')} placeholder="GitHub URL"></input>
                <input className={styles.input} type='url' value={state.linkedInURL} onChange={(e) => handleChange(e, 'ADD_LINKEDINURL')} placeholder="LinkedIn URL"></input>
                <input className={styles.input} type='text' value={state.address} onChange={(e) => handleChange(e, 'ADD_ADDRESS')} placeholder="Address"></input>
                <input className={styles.input} type='text' value={state.city} onChange={(e) => handleChange(e, 'ADD_CITY')} placeholder="City"></input>
                <input className={styles.input} type='text' value={state.state} onChange={(e) => handleChange(e, 'ADD_STATE')} placeholder="State"></input>
                <button className={styles.add_button} onClick={(e) => handleAddExperience(e)}>Add Experience +</button>
                <button className={styles.add_button} onClick={(e) => handleAddEducation(e)}>Add Education +</button>
                {/* Render EducationForm component if showEducationForm is true */}
                {showEducationForm && <EducationForm />}
                {/* Your other buttons */}
                <button className={styles.button} onClick={(e) => handlePDFCreation(e)}>Create PDF</button>
                <EducationForm />
            </form>
        </div>
    )

}
