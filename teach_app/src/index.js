import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TeacherCard from './componenets/TeacherCard';
import NavBar from './componenets/NavBar';
import { Button } from '@mui/material';
import MenuG from './componenets/MenuG';


  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <h3 className="title1">En quelle matière avez-vous besoin d'aide? </h3>
    <NavBar />
    <h3 className="title1">Les Teach'rs dAnglais qui pourraient vous correspandre</h3>
    <TeacherCard />
    <div className="MyButtonsPaS">
    <Button>Précedent</Button>

   <Button>Suivant</Button>
   </div>
    <App />
    
    

  
  
  
  
  </React.StrictMode>

);
reportWebVitals();
