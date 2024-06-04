"use client";
import AdoptedPetTable from "@/components/UI/Profile/AdoptedPetTable";
import EditProfile from "@/components/UI/Profile/EditProfile";
import UserProfile from "@/services/actions/UserProfile";
import {getUserInfo} from "@/services/auth.services";
import {getFromLocalStorage} from "@/utils/local-storage";
import {AccountCircleRounded} from "@mui/icons-material";
import {Box, Container, Stack, Typography} from "@mui/material";
import {blue} from "@mui/material/colors";
import {useEffect, useState} from "react";

export interface User {
  id: String;
  name: String;
  email: String;
  contactNumber: String;
  createdAt: String;
  updatedAt: String;
}
const ProfilePage = () => {
  const accessToken = getFromLocalStorage("accessToken");

  const [profile, setProfile] = useState<User>();
  console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}/profile`);
  useEffect(() => {
    UserProfile(accessToken as string).then((value: User) => {
      console.log(value);
      setProfile(value);
    });
  }, [accessToken]);
  console.log("profile: ", profile);
  return (
    <Container>
      <Typography
        width={"100%"}
        margin={4}
        textAlign="center"
        variant="h4"
        color="primary.main"
        component="span"
        fontWeight={"bold"}
      >
        My Pro
        <Box color="black" component="span">
          file
        </Box>
      </Typography>

      <Stack
        marginTop={2}
        sx={{backgroundColor: "#f4e0fc", borderRadius: "30px"}}
        direction={{xs: "column", sm: "row"}}
        // justifyContent={"space-evenly"}
        alignItems={"center"}
        width={"100%"}
      >
        <Stack
          width={"50%"}
          minHeight={"200px"}
          direction={{xs: "column", sm: "row"}}
          sx={{
            backgroundColor: "#eed4f9",
            borderRadius: "30px",
            margin: "10px",
          }}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <AccountCircleRounded
            // fontSize="large"
            sx={{
              fontSize: "100px",
            }}
          />
          <Box color={"black"}>
            <Typography color={"black"} fontSize={"18px"} fontWeight={"bold"}>
              {profile?.name}
            </Typography>
            <Typography color="primary.main">
              Email: {profile?.email}
            </Typography>
            <Typography color="primary.main">
              {profile?.contactNumber}
            </Typography>
          </Box>
        </Stack>
        <Box>
          <EditProfile
            accessToken={accessToken as string}
            updateProfile={setProfile}
          />
        </Box>
      </Stack>

      <Typography
        width={"100%"}
        margin={4}
        textAlign="left"
        variant="h4"
        color="primary.main"
        // component="span"
        fontWeight={"bold"}
        // fontSize={"30px"}
      >
        My Adop
        <Box color="black" component="span">
          ted Paws
        </Box>
      </Typography>
      <AdoptedPetTable accessToken={accessToken as string} />
    </Container>
  );
};

export default ProfilePage;
