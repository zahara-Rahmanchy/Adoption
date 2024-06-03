"use client";
import {Box, Button, Container, Stack, Typography} from "@mui/material";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import {getUserInfo, removeUser} from "@/services/auth.services";

import {useRouter} from "next/navigation";
import {toast} from "sonner";
import {AccountCircle} from "@mui/icons-material";

const Navbar = () => {
  const userData: any = getUserInfo();
  const router = useRouter();
  const handleLogout = () => {
    removeUser();
    router.refresh();
    toast.success("Logged Out!");
  };
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
            <>
              <Link href={"/MyProfile"}>
                <AccountCircle
                  fontSize="large"
                  sx={{
                    borderWidth: "2px",
                    borderRadius: "50%",
                    padding: "1px",
                    borderColor: "black",
                    color: "#865C97",
                  }}
                />
              </Link>
              <Button
                sx={{backgroundColor: "secondary.dark"}}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
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
