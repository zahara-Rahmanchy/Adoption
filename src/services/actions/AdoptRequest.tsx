"use server";
type AdoptionData = {
  name: string;
  email: string;
  password: string;
};
const AdoptRequest = async (adoptionData: AdoptionData) => {
  const res = await fetch(`${process.env.BACKEND_URL}/adoption-request`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(adoptionData),
    cache: "no-store",
  });
  const userInfo = await res.json();
  return userInfo;
};

export default AdoptRequest;
