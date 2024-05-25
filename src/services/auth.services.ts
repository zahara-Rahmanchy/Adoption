import {authKey} from "@/constants/authkey";
import {DecodeToken} from "@/utils/jwt";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setInLocalStorage,
} from "@/utils/local-storage";

export const storeUserInfo = (token: string) => {
  return setInLocalStorage(authKey, token);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);
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
