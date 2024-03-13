import React, { useState } from "react";
import Dish from "./Dish";

import "./Menu.css";
import { Link } from "react-router-dom";

const allDishes = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "assets/images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "dinner",
    price: 13.99,
    img: "assets/images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "assets/images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "assets/images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "assets/images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "assets/images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "assets/images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "assets/images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "assets/images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filterDishes = (category) => {
    setSelectedCategory(category);
    console.log(selectedCategory);
  };

  return (
    <div>
      <h1>Our Menu</h1>
      <hr />
      <section className="allButtons">
        <button onClick={() => filterDishes("all")}>All</button>
        <button onClick={() => filterDishes("breakfast")}>Breakfast</button>
        <button onClick={() => filterDishes("lunch")}>Lunch</button>
        <button onClick={() => filterDishes("shakes")}>Shakes</button>
        <button onClick={() => filterDishes("dinner")}>Dinner</button>
        <Link to="/about">
          <button>Go to About</button>
        </Link>
      </section>
      <div className="dishWrapper">
        {allDishes.map(
          (dish) =>
            (selectedCategory === "all" ||
              selectedCategory === dish.category) && (
              <Dish
                key={dish.id}
                dishImg={dish.img}
                title={dish.title}
                price={dish.price}
                description={dish.desc}
              />
            )
        )}
        {/* <Dish
          dishImg=""
          title="Title"
          price="100.00"
          description="this is description"
        />
        <Dish />
        <Dish /> */}
      </div>
      <h1>Menu ends here</h1>
    </div>
  );
}

export default Menu;
