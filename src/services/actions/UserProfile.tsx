"use server";

import {authKey} from "@/constants/authkey";
import getEnvVariable from "@/utils/getEnvVariable";
import {cookies} from "next/headers";
import {storeUserInfo} from "../auth.services";

const UserProfile = async () => {
  const accessToken = cookies().get(authKey)?.value;
  const url = getEnvVariable("NEXT_PUBLIC_BACKEND_URL");
  console.log("url: ", url);
  const res = await fetch(`${url}/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken ? accessToken : "",
    },
    cache: "no-store",
    // next: {
    //   revalidate: 60,
    // },
  });
  const profileData = await res.json();

  // console.log("prfofd", profileData);
  // if (profileData.success) {
  //   storeUserInfo(profileData.data.accessToken);
  // }
  return profileData.data;
};

export default UserProfile;
