"use client";
import {Box, Button, Container, Stack, Typography} from "@mui/material";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import {getUserInfo} from "@/services/auth.services";
import {userInfo} from "os";

const Navbar = () => {
  const userData: any = getUserInfo();
  console.log("userdata", userData);
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
          <Typography component={Link} href="/aboutUs">
            About Us
          </Typography>
          {userData?.id ? (
            <Button sx={{backgroundColor: "secondary.dark"}}>Logout</Button>
          ) : (
            <>
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
            </>
          )}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Navbar;
