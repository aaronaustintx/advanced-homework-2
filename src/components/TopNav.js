import React from "react";

function TopNav(props) {
  return (
    <div className="top-nav">
    <ul>
        <li><a href="#" onClick={()=>{
            props.change("headlights");
        }}>car lights</a></li>
        <li><a href="#" onClick={()=>{
            props.change("car wheels");
        }}>car wheels</a></li> 
        <li><a href="carwheels.html">Car wheels</a></li>
        <li><a href="carbumpers.html">car bumpers</a></li>
        <li><a href="caradsystem.html">car audiosystem</a></li>
        <li><a href="truckbumpers.html">Truck bumpers</a></li>
        <li><a href="contact.html">Feedback</a></li>
        <div className="clear"> </div>
    </ul>
</div>
  );
}

export default TopNav;