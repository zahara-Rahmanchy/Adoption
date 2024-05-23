import {Box, Button, Container, Stack, Typography} from "@mui/material";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {
  return (
    <Container>
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
          <Button component={Link} href="/Login">
            Login
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Navbar;
