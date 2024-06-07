"use client";
import {
  AppBar,
  Button,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import React, {useState} from "react";
import CloseIcon from "@mui/icons-material/Close";
import {TransitionProps} from "@mui/material/transitions";
import AdoptionRequests from "./AdoptionRequests";
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const EditPetData = ({petData, open, setOpen}: any) => {
  console.log("petData", petData.adoptionRequest);
  return (
    <>
      <Dialog
        fullScreen
        open={open}
        onClose={() => setOpen(false)}
        TransitionComponent={Transition}
      >
        <AppBar sx={{position: "relative"}}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setOpen(false)}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ml: 2, flex: 1}} variant="h6" component="div">
              Edit Pet Information
            </Typography>
            <Button autoFocus color="inherit" onClick={() => setOpen(false)}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <AdoptionRequests
          adoptionRequests={petData.adoptionRequest}
          // fetchPets={fetchPets}
        />
      </Dialog>
    </>
  );
};

export default EditPetData;
