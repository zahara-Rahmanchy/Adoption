import {authKey} from "@/constants/authkey";
import {DecodeToken} from "@/utils/jwt";
import {
  // getFromCookies,
  getFromCookiesClient,
  removeFromLocalStorage,
  setInCookies,
} from "@/utils/local-storage";

export const storeUserInfo = (token: string) => {
  return setInCookies(authKey, token);
};

export const getUserInfo = () => {
  const authToken = getFromCookiesClient(authKey);
  console.log(authToken);
  if (authToken) {
    const decodedData = DecodeToken(authToken);
    console.log(decodedData);
    return decodedData;
  }
};

export const removeUser = () => {
  return removeFromLocalStorage(authKey);
};
