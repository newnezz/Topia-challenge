import React, { useEffect, useState } from "react";
import listUsersInView from "../utils/listUsersInView";
import { USER_LIST } from "../utils/constants";
import {
  Container,
  Button,
  Modal,
  Box,
  Typography,
  List,
  ListItem,
  Divider,
  Grid,
  TextField,
} from "@material-ui/core";
import VolumeUp from "@material-ui/icons/VolumeUp"; // or any preferred icon
import VolumeDown from "@material-ui/icons/VolumeDown"; // or any preferred icon

export const UserList = ({
  positionX,
  setPositionX,
  positionY,
  setPositionY,
  screenHeight,
  screenWidth,
}) => {
  const [usersInView, setUsersInView] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setUsersInView(
      listUsersInView(
        USER_LIST,
        positionX,
        positionY,
        screenWidth,
        screenHeight,
      ),
    );
  }, [modalOpen, positionX, positionY, screenHeight, screenWidth]);

  const handleOpen = () => {
    setModalOpen(true);
    setUsersInView(
      listUsersInView(
        USER_LIST,
        positionX,
        positionY,
        screenWidth,
        screenHeight,
      ),
    );
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        marginTop: "2rem",
      }}
    >
      {/* Modal Button */}
      <Button variant="contained" size="large" color="primary" onClick={handleOpen}>
        Show Users In View
      </Button>

      {/* Users In View Modal */}
      <Modal open={modalOpen} onClose={handleClose}>
        <Box
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "2em",
            borderRadius: "10px",
            minWidth: "300px",
          }}
        >
          <Typography>Position X:</Typography>
          <TextField
            size="small"
            variant="outlined"
            type="number"
            onChange={(e) => setPositionX(Number(e.target.value))}
            defaultValue={positionX}
          />
          <Typography>Position Y:</Typography>
          <TextField
            size="small"
            variant="outlined"
            type="number"
            onChange={(e) => setPositionY(Number(e.target.value))}
            defaultValue={positionY}
          />

          {/* Column Labels */}
          <Grid container alignItems="center" style={{ marginTop: "2rem" }}>
            <Grid item xs={4}>
              <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                Username
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                Distance
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                Broadcast
              </Typography>
            </Grid>
          </Grid>

          <List>
            {usersInView.map((user, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <Grid container alignItems="center" spacing={2}>
                    {/* UserName */}
                    <Grid item xs={4}>
                      <Typography variant="body1">
                        {user.user.username}
                      </Typography>
                    </Grid>
                    {/* Distance */}
                    <Grid item xs={4}>
                      <Typography variant="body1">
                        {user.distance.toFixed(2)}
                      </Typography>
                    </Grid>
                    {/* Broadcast Status */}
                    <Grid item xs={4}>
                      {user.user.is_broadcaster ? (
                        <Box
                          color="success.main"
                          display="flex"
                          alignItems="center"
                        >
                          <VolumeUp />
                        </Box>
                      ) : (
                        <Box
                          color="text.secondary"
                          display="flex"
                          alignItems="center"
                        >
                          <VolumeDown />
                        </Box>
                      )}
                    </Grid>
                  </Grid>
                </ListItem>
                {index !== usersInView.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClose}
            style={{ marginTop: "1em" }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </Container>
  );
};
