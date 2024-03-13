// import logo from './logo.svg';
import { FormDataProvider } from './contexts/FormDataContext';
import Form from './components/Form';
import './App.css';

function App() {
  return (
    <FormDataProvider>
      <Form />
    </FormDataProvider>
  );
}

export default App;
