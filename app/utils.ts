/* eslint-disable prettier/prettier */
import { ObjectType } from "./networking/models";

function objToQueryString(obj: ObjectType) {
  const keyValuePairs = [];
  const keys = Object.keys(obj);
  let i;
  for (i = 0; i < keys.length; i += 1) {
    const key = Object.keys(obj)[i];
    keyValuePairs.push(
      `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`
    );
  }
  return keyValuePairs.join("&");
}

export default objToQueryString;
