"use server";

const UserProfile = async (accessToken: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken ? accessToken : "",
    },

    next: {
      revalidate: 60,
    },
  });
  const profileData = await res.json();

  console.log("prfofd", profileData);
  return profileData.data;
};

export default UserProfile;
