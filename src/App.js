import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./App.css";
import AnimalCard from "./AnimalCard";
import characters from "./protagonists.json";
import { useState, useEffect } from "react";
import CompPractice1 from "./CompPractice1";

var requestOptions = {
  method: "GET",
  redirect: "follow",
};

function App() {
  const [animalData, setAnimalData] = useState([]);

  useEffect(() => isFetching(), []);

  function isFetching() {
    fetch("https://zoo-animal-api.herokuapp.com/animals/rand/6")
      .then((response) => response.json())
      .then((result) => {
        setAnimalData(result);
      })

      .catch((error) => console.log("error", error));
  }

  // isFetching();

  return (
    <div className="App">
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: "1px solid lightgray" }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Characters Inc
          </Typography>
          <Button
            href="#"
            variant="outlined"
            sx={{ my: 1, mx: 1.5 }}
            onClick={() => {
              isFetching();
            }}
          >
            Button
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Typography
          variant="h2"
          align="center"
          color="text.primary"
          sx={{ py: 2 }}
        >
          Prevalent Protagonists
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mx: 10 }}
        >
          {/* Hmm, seems like we're missing some of the other protagonists. */}
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="lg">
        <Grid
          container
          spacing={5}
          justifyContent="center"
          alignItems="flex-start"
        >
          {animalData.map((animal, index) => (
            <Grid item xs={12} md={4} key={index}>
              <AnimalCard
                title={animal.name}
                pic={animal.image_link}
                description={[animal.habitat, animal.diet]}
              />
            </Grid>
          ))}
        </Grid>
      </Container>{" "}
    </div>
  );
}

export default App;
