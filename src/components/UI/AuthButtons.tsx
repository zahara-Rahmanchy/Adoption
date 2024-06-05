import {authKey} from "@/constants/authkey";
import {getUserInfo, removeUser} from "@/services/auth.services";
// import {getUserInfo, removeUser} from "@/services/actions/auth.services";
import {AccountCircle} from "@mui/icons-material";
import {Button} from "@mui/material";
import {getCookie} from "cookies-next";
import Link from "next/link";
import {useRouter} from "next/navigation";
import React from "react";
import {toast} from "sonner";

const AuthButtons = () => {
  console.log("aith k", getCookie(authKey));
  const userData: any = getUserInfo();
  const router = useRouter();
  const handleLogout = () => {
    removeUser();
    router.refresh();
    toast.success("Logged Out!");
  };
  return (
    <>
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
      {/* <Button></Button> */}
    </>
  );
};

export default AuthButtons;
