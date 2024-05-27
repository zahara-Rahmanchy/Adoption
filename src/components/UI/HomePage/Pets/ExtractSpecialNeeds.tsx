const ExtractSpecialNeeds = async (): Promise<string[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/pets`);
    //  destructuring the data and naming as pets
    const {data} = await res.json();
    // setPets(data);
    const specialNeedsList = new Set<string>();
    data.forEach((pet: any) => {
      console.log("pet: ", pet);
      if (pet.specialNeeds && pet.specialNeeds.length > 0) {
        console.log("petSpe: ", pet.specialNeeds);
        pet.specialNeeds.forEach((need: string) => {
          console.log("needt: ", need);
          specialNeedsList.add(need);
        });
      }
    });
    const specialNeeds = Array.from(specialNeedsList);
    console.log("specialNeeds", specialNeeds);
    return specialNeeds;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default ExtractSpecialNeeds;
