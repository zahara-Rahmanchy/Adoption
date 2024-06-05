"use server";

import getEnvVariable from "@/utils/getEnvVariable";
import UserProfile from "./UserProfile";

interface EditData {
  name?: string;
  email?: string;
}
const EditUserProfile = async (editData: EditData, accessToken: string) => {
  try {
    const url = getEnvVariable("NEXT_PUBLIC_BACKEND_URL");
    const res = await fetch(`${url}/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken ? accessToken : "",
      },
      body: JSON.stringify(editData),
      cache: "no-store",
    });
    const profileData = await res.json();

    console.log("update", profileData);

    return profileData;
  } catch (err) {
    console.log("err: ", err);
  }
};

export default EditUserProfile;
