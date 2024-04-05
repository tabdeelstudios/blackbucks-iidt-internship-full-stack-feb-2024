const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 3001;

const eventCards = [
  {
    imgURL:
      "https://assets-global.website-files.com/6224703e7862127338280ea4/62285cda678b1829dc43227a_Art_Circle_AdobeCreativeCloudExpress%20(1).gif",
    altText: "The Art Circle",
    title: "The Art Circle",
    description:
      "Standing in a corner alone is not allowed at PHP! Throw the awkwardness out of the window and get ready for some amazing activities, stories, poems and laughter. You can share your thoughts, and listen to interesting stories that others share.",
  },
  {
    imgURL:
      "https://assets-global.website-files.com/6224703e7862127338280ea4/62285afac38bbc65b28058d7_Music_therapy_AdobeCreativeCloudExpress.gif",
    altText: "Music Therapy",
    title: "Music Therapy",
    description:
      "PHP Music Therapy comes with a twist. Yes, there is music and there is singing but not the boring way. You have to sing with all your heart. So, go loud and don't worry about anyone judging you because we'll all join you. Just feel happy with every beat!",
  },
  {
    imgURL:
      "https://assets-global.website-files.com/6224703e7862127338280ea4/62285afab760cc735e363846_Dabba_Party_AdobeCreativeCloudExpress.gif",
    altText: "The Dabba Party",
    title: "The Dabba Party",
    description:
      "Remember school's lunch time when everyone would share their dabbas? We bring back those times at PHP with our exclusive potluck party. Bring your favourite dish to share and end up with a feast!",
  },
];

const cityData = [
  {
    city: "hyderabad",
    eventDate: "27-03-2024",
  },
  {
    city: "bengaluru",
    eventDate: "28-03-2024",
  },
  {
    city: "nagpur",
    eventDate: "30-03-2024",
  },
];

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/eventCards", (req, res) => {
  res.json(eventCards);
});

// URL Parameter
app.get("/:city", (req, res) => {
  let userCity = req.params.city;
  let result = cityData.find((index) => index.city === userCity);
  res.json({ message: "You are currently on " + result.eventDate });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
