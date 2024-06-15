import PetPortfolio from "@/components/UI/PetPortfolio/PetPortfolio";
import CommonHeader from "@/components/shared/CommonHeader";
import {petId} from "@/constants/PetId";
import {authKey} from "@/constants/authkey";
import {IApiResponse, IPetData} from "@/interfaces/PetInterface";
import {getUserInfo} from "@/services/auth.services";
import getEnvVariable from "@/utils/getEnvVariable";
import {getServerCookies} from "@/utils/getServerCookies";
// import {getFromCookies} from "@/utils/local-storage";
import {getCookie, getCookies} from "cookies-next";
import {cookies} from "next/headers";

// import {toast} from "sonner";

const PortfolioPage = async ({params}: petId) => {
  const accessToken = cookies().get(authKey)?.value;

  const url = getEnvVariable("NEXT_PUBLIC_BACKEND_URL");

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
      <CommonHeader headerFirst="Our Pawf" headerSecond="ect Portfolio" />
      <PetPortfolio pet={petData as IPetData} error={error as string} />
    </>
  );
};

export default PortfolioPage;
