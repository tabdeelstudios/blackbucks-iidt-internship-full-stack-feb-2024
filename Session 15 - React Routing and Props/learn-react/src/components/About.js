import React from "react";
import TeamMember from "./TeamMember";

function About() {
  return (
    <section style={{ display: "flex", justifyContent: "space-evenly" }}>
      <TeamMember
        imgURL="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
        name="John"
        position="Founder"
        company="XYZ"
        linkedinURL=""
      />
      <TeamMember
        imgURL="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww"
        name="Jane"
        position="Co-Founder"
        company="ABC"
        linkedinURL=""
      />
      <TeamMember
        imgURL="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww"
        name="Jane"
        position="Co-Founder"
        company="ABC"
        linkedinURL=""
      />
    </section>
  );
}

export default About;
