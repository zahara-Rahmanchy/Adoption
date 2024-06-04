"use server";
import {LoginInputs} from "@/interfaces/LoginInputs";
import {cookies} from "next/headers";

export const LoginUser = async (userData: LoginInputs) => {
  const res = await fetch(`https://assignment-8-cyan.vercel.app/api/login`, {
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
