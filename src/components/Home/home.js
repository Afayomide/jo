import React from "react"
import "./home.css"
import gold1 from "../../images/rawgold1.jpeg"
import gold2 from "../../images/rawgold2.jpg"
import gem1 from "../../images/rawgem1.jpg"
import gem2 from "../../images/rawgem2.jpeg"
import { Link } from "react-router-dom"
function Home () {
    return(
        <div className="home">
        <div className="images">
        <img src={gold1} alt="raw gold image"/>
        <img src={gold2} alt="raw gold image"/>
        <img src={gem1} alt="raw gem image"/>
        <img src={gem2} alt="raw gem image"/>
        </div>
        <div className="info-text">
  <p>Stewart.co is a raw Gold and Gemstone trading company. Founded in 2021,
    we work with miners in the extraction of raw gold and gemstones and look to transform them and trade them all around the world to jewelers and other industries in need of our service.</p>

    <p>Our Market includes all of USA and we are looking to expand into other countries in the nearest future.
</p>
</div>
   <div className="choose" id="aboutus">
               <h3>Why Choose Us</h3>
    <ol>
     <li>Gemstone and Gold expert</li>
     <li>Professional Company</li>
     <li>Support small batch, large quantity and better price</li>
     <li>Update new products each week/many stock</li>
     <li>Shipment quickly</li>
     <li>Professional Team/Reasonable Price</li>
    </ol>
    <h3 id="pricing">Our Aim</h3>
<p className="aim">Create Value  For  Customers !  Follow  Concept Of Continuous Development And Double -Win Cooperation, We  Will  Keep  On To Work  Hard To Build A Better  Gemstone One-Stop Service For All The Customers!
</p>
<div className="button">
<Link to="./apply"><button>We are hiring!!</button></Link>
</div>
<p>We are currently looking for a secretary position in our company. 
Click here to apply!!</p>
   </div>
</div>
    )
}

export default Home