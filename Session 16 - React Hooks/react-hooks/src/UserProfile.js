import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";

function UserProfile() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get("https://randomuser.me/api").then((res) => setUserData(res.data));
  }, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={userData.results[0].picture.medium}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"></Typography>
        <Typography variant="body2" color="text.secondary"></Typography>
      </CardContent>
      <CardActions>
        <Button size="small"></Button>
        <Button size="small"></Button>
      </CardActions>
    </Card>
  );
}

export default UserProfile;
