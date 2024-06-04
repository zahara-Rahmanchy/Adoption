"use client";
import {Box, Button, Container, Stack, Typography} from "@mui/material";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import dynamic from "next/dynamic";

const Navbar = () => {
  const AuthButtons = dynamic(() => import("@/components/UI/AuthButtons"), {
    ssr: false,
  });
  return (
    <Container sx={{width: "100%", background: "white"}}>
      <Stack
        direction={{xs: "column", lg: "row"}}
        justifyContent="space-between"
        py={4}
      >
        <Logo />
        <Stack
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
          <AuthButtons />
        </Stack>
      </Stack>
    </Container>
  );
};

export default Navbar;
