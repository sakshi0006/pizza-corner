import React from 'react';
import './Home.css';
// Displaying general pizza menu with prices
function Home()
{
    localStorage.clear();//clearing the local buffer after the user got permission to visit the Home Page
    return(
        <div>
  <header className="Home-header" >Pizza Price List: ::</header>
  <footer >
        
    <div className="div1">
        <ul> 
        <li>
        Veg pizza prices:
        <br/>
        Regular: Rs.99/-
        <br/>
        Medium: Rs.195/-
        <br/>
        Large: Rs.395/-
        </li>
        <li>
        Prices of Side Orders:
        <br/>
        Dip: Rs.25/-
        <br/>
        Veg Parcel: Rs.35/-
        <br/>
        Chicken Parcel: Rs.39/-
        <br/>
        Garlic Breadsticks: Rs.95/-
        <br/>
        Lava Cake: Rs.99/-
        <br/>
        Veg Pasta: Rs.135/-
        </li>
        <li>
        Speciality Chicken: Rs.99/-
        </li>
        </ul>
    </div>

    <div className="div2">
        <ul>
        <li>
        Non Veg pizza prices:
        <br/>
        Regular: Rs.165/-
        <br/>
        Medium: Rs.305/-
        <br/>
        Large: Rs.495/-
        </li>
        <li>
        Burger Pizza: Rs.99/-
        </li>
        <li>
        Pizza Mania Prices:
        <br/>
        Veg pizza mania: Rs.59/-
        <br/>
        Non-Veg pizza mania: Rs.89/-
        </li>
        </ul>
    </div>
        
 </footer>
        </div>
    );
}
export default Home;