"use client";
import {Box, Button, Container, Stack, Typography} from "@mui/material";
import React, {useState} from "react";
import Logo from "./Logo";
import Link from "next/link";
import dynamic from "next/dynamic";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const AuthButtons = dynamic(() => import("@/components/UI/AuthButtons"), {
    ssr: false,
  });

  const [show, setShow] = useState(false);
  return (
    <Container sx={{width: "100%", background: "white"}}>
      <Stack
        direction={{xs: "column", lg: "row"}}
        justifyContent="space-between"
        alignItems={"center"}
        py={4}
        width="100%"
      >
        <Stack
          width={{xs: "100%", lg: "fit-content"}}
          direction={{xs: "row"}}
          gap="5"
          justifyContent="space-between"
          alignItems={"stretch"}
        >
          <Logo />
          <Box display={{lg: "none"}}>
            <MenuIcon color="primary" onClick={() => setShow(!show)}>
              Menu
            </MenuIcon>
          </Box>
        </Stack>
        <Stack
          display={{xs: show ? "flex" : "none", lg: "flex"}}
          direction={{xs: "column", lg: "row"}}
          justifyContent="space-between"
          gap={4}
          alignItems="center"
        >
          <Typography component={Link} href="/">
            Home
          </Typography>
          <Typography component={Link} href="/AboutUs">
            About Us
          </Typography>
          <Typography component={Link} href="/Dashboard/Admin">
            Dashboard
          </Typography>
          <AuthButtons />
        </Stack>
      </Stack>
    </Container>
  );
};

export default Navbar;
