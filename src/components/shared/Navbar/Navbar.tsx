import {Box, Button, Container, Stack, Typography} from "@mui/material";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {
  return (
    <Container sx={{width: "100%", background: "white"}}>
      <Stack direction={"row"} justifyContent="space-between" py={4}>
        <Logo />
        <Stack
          direction={"row"}
          justifyContent="space-between"
          gap={4}
          alignItems="center"
        >
          <Typography component={Link} href="/">
            Home
          </Typography>
          <Typography component={Link} href="/aboutUs">
            About Us
          </Typography>
          <Button
            component={Link}
            href="/Login"
            variant="outlined"
            // color="secondary"
            sx={{
              color: "#f7ad1b",
              borderColor: "#f7ad1b",
            }}
          >
            Login
          </Button>
          <Button component={Link} href="/Register">
            Register
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Navbar;
