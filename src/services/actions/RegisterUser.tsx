"use server";
type RegisterData = {
  name: string;
  email: string;
  password: string;
};
const RegisterUser = async (userData: RegisterData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/register`, {
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

export default RegisterUser;
