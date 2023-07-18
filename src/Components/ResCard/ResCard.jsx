import React from "react";
import "./ResCard.css";

const ResCard = ({ data }) => {
  // Check if resData is defined and has the 'data' property
  if (!data || !data.data) {
    return null; // Render nothing if resData is undefined or does not have 'data'
  }
  console.log(data);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwoString,
    deliveryTime,
  } = data.data;
  // console.log("resList.data" , data)

  
  console.log(avgRating)
  // console.log(ratingColor)
  return (
    <div className="card" style={{ textDecoration: "none" }}>
      <img
        className="img-width"
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
        alt="food"
      />
      <h3 className="link-styling">{name}</h3>
      <h4 className="grey-color link-styling">{cuisines?.join(", ")}</h4>
      <div className="flex card-rating-cost">
      {(avgRating > 4) ? <h4 className="green">{avgRating}</h4> : <h4 className="orange">{avgRating}</h4>}


        <div className="dot">.</div>
        <h4 className="link-styling small-font">{deliveryTime} mins</h4>

        <div className="dot">.</div>
        <h4 className="link-styling small-font">{costForTwoString}</h4>
      </div>
    </div>
  );
};

export default ResCard;
