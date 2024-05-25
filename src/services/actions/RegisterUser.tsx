"use server";

const RegisterUser = async (userData: any) => {
  const res = fetch(`${process.env.BACKEND_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
    cache: "no-store",
  });
  const userInfo = (await res).json();
  return userInfo;
};

export default RegisterUser;
