import React,{useState} from 'react';
import logo from '../src/pizza_img.jpg';
import logo2 from '../src/pizza_img2.webp';
import logo3 from '../src/pizza_img3.jpg';
import './App.css';

// It contains two input tags one for taking email-id and other one for the password
// And using React-hooks , the value of the state is changed as per user's input
// Then the value of the state is stored locally in the localStorage of the web browser
// so that conditional rendering can be done in the index.js

function App() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const handleChange1 = (event) => {
      setValue1(event.target.value);
  };
  const handleChange2 = (event) => {
    setValue2(event.target.value);
};
  function handle(){
  console.log(value1);console.log(value2);
  if(value1.length>=7&&value1.indexOf('@')>0&&value1.indexOf(".com")>0)localStorage.setItem('userEmailId',JSON.stringify({isLoggedIn: true}));
  else alert("Wrong email-id (Rules to be followed : length > 7 and should also contain '@' and '.com')");
  if(value2.length>=8)localStorage.setItem('userPassword',JSON.stringify({isLoggedIn: true}));
  else alert("Wrong password (length of the password should be atleast 8)");
  
  }
  return (
    <div className="App">

      <header className="App-header">👩‍🍳 Pizza Corner
      </header>
      <footer className="App-footer">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo2} className="App-logo" alt="logo" />
        <img src={logo3} className="App-logo" alt="logo" />
       <br/><br/>
      <div className="card"> <form >
       <label>Enter email-id:</label><input value={value1} onChange={handleChange1}  className="i1" type="text" name="id"></input>
       <br/>
       <label>Enter password:</label><input value={value2} onChange={handleChange2} className="i2" type="password" name="p"></input>
       <br/>
        <button className="App-button" onClick={handle}>Sign-up</button>
        </form></div>
        </footer>
    </div>
  );
}
export default App;
