import PetPortfolio from "@/components/UI/PetPortfolio/PetPortfolio";
import {IApiResponse} from "@/interfaces/PetInterface";
export interface petId {
  params: {
    petId: string;
  };
}
const PortofolioPage = async ({params}: petId) => {
  console.log(
    "params: ",
    params,
    "url: ",
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/pets/${params.petId}`
  );
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/pets/${params.petId}`
  );
  const result: IApiResponse = await res.json();
  const petData = result.data;
  return (
    <>
      <PetPortfolio pet={petData} />
    </>
  );
};

export default PortofolioPage;
