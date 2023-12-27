import React, { useState } from "react";
import { UserList } from "./components/UserList";
import { Container, TextField, Typography, Grid } from "@material-ui/core";

function App() {
  const [positionX, setPositionX] = useState(800);
  const [positionY, setPositionY] = useState(400);
  const [screenWidth, setScreenWidth] = useState(800);
  const [screenHeight, setScreenHeight] = useState(400);

  return (
    <Container style={{ marginTop: "2rem" }}>
      {/* Logo */}
      <Typography
        variant="h1"
        style={{
          textAlign: "center",
          fontSize: "3rem",
          marginBottom: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
        }}
      >
        <img src="blue.gif" height="150px"/>
        Topia Frontend Coding Challenge
        <img src="green.gif" height="150px"/>
      </Typography>
      <Grid container spacing={3} alignItems="center">
        {/* Inputs for X, Y, Screen Width, and Height */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography>Position X:</Typography>
          <TextField
            fullWidth
            variant="outlined"
            type="number"
            onChange={(e) => setPositionX(Number(e.target.value))}
            value={positionX}
            style={{ backgroundColor: 'white' }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography>Position Y:</Typography>
          <TextField
            fullWidth
            variant="outlined"
            type="number"
            onChange={(e) => setPositionY(Number(e.target.value))}
            value={positionY}
            style={{ backgroundColor: 'white' }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography>Screen Width:</Typography>
          <TextField
            fullWidth
            variant="outlined"
            type="number"
            onChange={(e) => setScreenWidth(Number(e.target.value))}
            defaultValue={screenWidth}
            style={{ backgroundColor: 'white' }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography>Screen Height:</Typography>
          <TextField
            fullWidth
            variant="outlined"
            type="number"
            onChange={(e) => setScreenHeight(Number(e.target.value))}
            defaultValue={screenHeight}
            style={{ backgroundColor: 'white' }}
          />
        </Grid>
      </Grid>

      {/* UserList Component */}
      <UserList
        positionX={positionX}
        setPositionX={setPositionX}
        positionY={positionY}
        setPositionY={setPositionY}
        screenHeight={screenHeight}
        screenWidth={screenWidth}
      />
    </Container>
  );
}

export default App;
