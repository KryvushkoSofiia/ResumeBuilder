// Create Context for Form Data manipulation
// Use useReducer for more complex state manipulation (not using UseState for separation) 
import React, { createContext, useReducer } from "react";

const initialState = {
    fullName: '',
    email: '',
    phoneNumber: '',
    gitHubURL: '',
    linkedInURL: '',
    address: '',
    city: '',
    state: '',

};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_FULLNAME':
            return { ...state, fullName: action.payload };
        case 'ADD_EMAIL':
            return { ...state, email: action.payload };
        case 'ADD_PHONENUMBER':
            return { ...state, phoneNumber: action.payload };
        case 'ADD_GITHUBURL':
            return { ...state, gitHubURL: action.payload };
        case 'ADD_LINKEDINURL':
            return { ...state, linkedInURL: action.payload };
        case 'ADD_ADDRESS':
            return { ...state, address: action.payload };
        case 'ADD_CITY':
            return {...state, city: action.payload};
        case 'ADD_STATE':
            return {...state, state: action.payload};
        default:
            return state;
    }

}

export const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {

    // State contains current state
    // Dispatch passes action to reducer to make changes to the state
    const [state, dispatch] = useReducer(reducer, initialState);

    return <FormDataContext.Provider value={{ state, dispatch }}>
        {children}
        Hello from Context Provider
    </FormDataContext.Provider>

}
