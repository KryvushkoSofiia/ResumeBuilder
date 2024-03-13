// Create Context for Form Data manipulation
// Use useReducer for more complex state manipulation (not using UseState for separation) 
import { createContext, useReducer } from "react";

const initialState = {
    fullName: '',
    email: '',
    phoneNumber: '',
    gitHubURL: '',
    LinkedInURL: '',
    address: '',
    city: '',
    state: '',
    
};

const reducer = (state, action) => {
    switch (action.type){
        case 'ADD_FULLNAME':
            return {...state, fullName: action.payload};
        case 'ADD_EMAIL': 
            return {...state, email: action.payload}
        default:
            return state;
    }

}

export const  FormDataContext = createContext();

export const FormDataProvider = ({ children }) =>{

    // State contains current state
    // Dispatch passes action to reducer to make changes to the state
    const [state, dispatch] = useReducer(reducer, initialState);

}
