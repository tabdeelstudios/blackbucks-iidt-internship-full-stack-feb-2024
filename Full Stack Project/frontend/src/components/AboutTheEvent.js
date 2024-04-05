import React, { useEffect, useState } from "react";
import AboutHeader from "./AboutHeader";
import AboutEventCard from "./AboutEventCard";
import axios from "axios";

import "../styles/aboutEvent.css";

function AboutTheEvent() {
  const [eventCards, setEventCards] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/eventCards/")
      .then((res) => setEventCards(res.data));
  }, []);

  return (
    <section id="aboutTheEvent">
      <AboutHeader />
      <div id="allAboutEventCards">
        {eventCards &&
          eventCards.map((card) => {
            return (
              <AboutEventCard
                imgURL={card.imgURL}
                altText={card.altText}
                title={card.title}
                description={card.description}
              />
            );
          })}
      </div>
    </section>
  );
}

export default AboutTheEvent;
