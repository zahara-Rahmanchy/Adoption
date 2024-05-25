"use server";
export type LoginInputs = {
  name: string;
  email: string;
  password: string;
};
export const LoginUser = async (userData: LoginInputs) => {
  const res = await fetch(`${process.env.BACKEND_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
    cache: "no-store",
  });
  const userInfo = await res.json();
  return userInfo;
};
