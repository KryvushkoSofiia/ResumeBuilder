// import logo from './logo.svg';
import React from 'react';
import { FormDataProvider } from './contexts/FormDataContext';
import Form from './components/Form';
import ResumeMarkup from './components/ResumeMarkup';
import './App.scss';

function App() {
  return (
    <FormDataProvider>
      <Form />
      <ResumeMarkup />
    </FormDataProvider>
  );
}

export default App;
