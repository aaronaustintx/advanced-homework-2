import React from "react";

function TopNav(props) {
  return (
    <div className="top-nav">
    <ul>
        <li><a href="#" onClick={()=>{
            props.change("headlights");
        }}>car lights</a></li>
        <li><a href="#" onClick={()=>{
            props.change("tires");
        }}>car wheels</a></li> 
        <li><a href="#" onClick={()=>{
            props.change("bumpers");
        }}>car bumpers</a></li> 
        <li><a href="#" onClick={()=>{
            props.change("audio");
        }}>car audiosytem</a></li> 
        <li><a href="#" onClick={()=>{ props.change("bumpers"); }}>truck bumpers</a></li> 
        <li><a href="contact.html">Feedback</a></li>
        <div className="clear"> </div>
    </ul>
</div>
  );
}

export default TopNav;