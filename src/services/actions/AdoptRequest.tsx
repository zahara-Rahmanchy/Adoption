"use server";

// import {getFromLocalStorage} from "@/utils/local-storage";

export type AdoptionData = {
  petId: string;
  petOwnershipExperience: string;
};
// const token = getFromLocalStorage("accessToken");
// console.log(token);
const AdoptRequest = async (
  adoptionData: AdoptionData,
  accessToken: string
) => {
  console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}/adoption-request`);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/adoption-request`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken ? accessToken : "",
      },
      body: JSON.stringify(adoptionData),
      cache: "no-store",
    }
  );
  const userInfo = await res.json();
  return userInfo;
};

export default AdoptRequest;
