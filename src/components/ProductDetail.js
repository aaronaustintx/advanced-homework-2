import React from "react";

function ProductDetail(props) {
   

  return (
    <div className="grid_1_of_5 images_1_of_5">
    <img src={props.product.imgUrl}/>
    {/* <h3>Lorem Ipsum is simply </h3> */}
    {/* <h3>{props.product.name} </h3> */}
    <h3><a href="#">{props.product.name} </a> </h3>
    <p>{props.product.description}</p>
    {/* <h4>$512.00</h4> */}
    <h4>{props.product.price}</h4>
    <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
    </div>
  );
}

export default ProductDetail;