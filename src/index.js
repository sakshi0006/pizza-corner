import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import App from './App';

//Checking the email-id and password taken from the user, 
//if email-id's length is greater than 3 and it contains '@' symbol 
//And if the password's length is greater than 5
//then Home page is rendered on the screen
//otherwise alert message is displayed on the screen for the wrong email or password


const ConditionalRendering=() =>{
  const userId = localStorage.getItem('userEmailId')? JSON.parse(localStorage.getItem('userEmailId')):null;
  const userP = localStorage.getItem('userPassword')? JSON.parse(localStorage.getItem('userPassword')):null;
  if (userId!=null&&userP!=null&&userId.isLoggedIn&&userP.isLoggedIn) {
    return <Home/>;
  }
  else{
    return <App/>;
  }
}



ReactDOM.render(
  <React.StrictMode>
   <ConditionalRendering  />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
