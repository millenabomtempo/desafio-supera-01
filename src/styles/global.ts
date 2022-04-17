import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  body, input, button {
    font-family: 'Nunito', sans-serif;
    background-color: #edfff0;
  }
  
  button {
    cursor: pointer;
  }
`;