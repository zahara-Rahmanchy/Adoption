"use server";

import getEnvVariable from "@/utils/getEnvVariable";

const UserProfile = async (accessToken: string) => {
  const url = getEnvVariable("NEXT_PUBLIC_BACKEND_URL");
  console.log("url: ", url);
  const res = await fetch(`${url}/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken ? accessToken : "",
    },

    next: {
      revalidate: 60,
    },
  });
  const profileData = await res.json();

  console.log("prfofd", profileData);
  return profileData.data;
};

export default UserProfile;
