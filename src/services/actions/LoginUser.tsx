"use server";
import {cookies} from "next/headers";
export type LoginInputs = {
  name: string;
  email: string;
  password: string;
};
export const LoginUser = async (userData: LoginInputs) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, {
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
