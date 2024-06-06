"use server";
import {authKey} from "@/constants/authkey";
import {IPetDataInput} from "@/interfaces/PetInterface";
import getEnvVariable from "@/utils/getEnvVariable";
import {cookies} from "next/headers";

export const InsertPetData = async (petData: Partial<IPetDataInput>) => {
  const url = getEnvVariable("NEXT_PUBLIC_BACKEND_URL");
  console.log("url: ", url);
  const accessToken = cookies().get(authKey)?.value;
  const res = await fetch(`${url}/pets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken ? accessToken : "",
    },
    body: JSON.stringify(petData),
    cache: "no-store",
  });
  const userInfo = await res.json();
  // if (userInfo.data.accessToken) {
  //   cookies().set("accessToken", userInfo?.data?.token);
  // }
  return userInfo;
};
