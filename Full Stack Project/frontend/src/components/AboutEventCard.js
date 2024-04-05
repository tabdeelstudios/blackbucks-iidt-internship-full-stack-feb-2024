import React from "react";

function AboutEventCard({ imgURL, altText, title, description }) {
  return (
    <div className="aboutEventCard">
      <img src={imgURL} alt={altText} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default AboutEventCard;
