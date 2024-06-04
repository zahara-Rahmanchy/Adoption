"use server";
import {LoginInputs} from "@/interfaces/LoginInputs";
import getEnvVariable from "@/utils/getEnvVariable";
import {cookies} from "next/headers";

export const LoginUser = async (userData: LoginInputs) => {
  const url = getEnvVariable("NEXT_PUBLIC_BACKEND_URL");
  console.log("url: ", url);
  const res = await fetch(`${url}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
    cache: "no-store",
  });
  const userInfo = await res.json();
  if (userInfo.success) {
    cookies().set("accessToken", userInfo?.data?.token);
  }
  return userInfo;
};
