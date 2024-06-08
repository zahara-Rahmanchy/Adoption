"use server";

import getEnvVariable from "@/utils/getEnvVariable";

export type AdoptionData = {
  petId: string;
  petOwnershipExperience: string;
};

const AdoptRequest = async (
  adoptionData: AdoptionData,
  accessToken: string
) => {
  console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}/adoption-request`);
  const url = getEnvVariable("NEXT_PUBLIC_BACKEND_URL");
  const res = await fetch(`${url}/adoption-request`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken ? accessToken : "",
    },
    body: JSON.stringify(adoptionData),
    cache: "no-store",
  });
  const userInfo = await res.json();
  return userInfo;
};

export default AdoptRequest;
