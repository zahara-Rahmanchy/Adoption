import PetPortfolio from "@/components/UI/PetPortfolio/PetPortfolio";
import {petId} from "@/constants/PetId";
import {authKey} from "@/constants/authkey";
import {IApiResponse, IPetData} from "@/interfaces/PetInterface";
import getEnvVariable from "@/utils/getEnvVariable";

import {cookies} from "next/headers";

const PortfolioPage = async ({params}: petId) => {
  const accessToken = cookies().get(authKey)?.value;

  console.log("accessToken: ", accessToken);
  const url = getEnvVariable("NEXT_PUBLIC_BACKEND_URL");
  console.log("url", url);
  // try{
  const res = await fetch(`${url}/pets/${params.petId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken ? String(accessToken) : "",
    },

    cache: "no-store",
  });
  const result: IApiResponse = await res.json();
  // console.log("result: ", result);
  let petData;
  let error;
  if (result?.success === true) {
    petData = result.data;
  }
  if (result.success === false) {
    error = result.message;
  }

  return (
    <>
      <PetPortfolio pet={petData as IPetData} error={error as string} />
    </>
  );
};

export default PortfolioPage;
