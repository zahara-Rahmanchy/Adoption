"use server";
interface EditData {
  name?: string;
  email?: string;
}
const EditUserProfile = async (editData: EditData, accessToken: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken ? accessToken : "",
      },
      body: JSON.stringify(editData),
      cache: "no-store",
    });
    const profileData = await res.json();

    console.log("update", profileData);
    return profileData;
  } catch (err) {
    console.log("err: ", err);
  }
};

export default EditUserProfile;
