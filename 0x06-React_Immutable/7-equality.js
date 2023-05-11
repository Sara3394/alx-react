import { Map, is } from "immutable";
//uses fromJS from the Immutable.js library

export default function areMapsEqual(map1, map2) {
  return is(map1, map2);
}
