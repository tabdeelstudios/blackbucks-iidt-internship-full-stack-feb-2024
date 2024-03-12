import React from "react";

function TeamMember(props) {
  return (
    <div>
      <img
        style={{ borderRadius: "100%", width: "150px" }}
        src={props.imgURL}
      />
      <h1>{props.name}</h1>
      <p>
        {props.position}, {props.company}
      </p>
      <a href={props.linkedinURL}>Connect on LinkedIn</a>
    </div>
  );
}

export default TeamMember;
