import { Map } from "immutable";
//uses fromJS from the Immutable.js library

export default function mergeDeeplyElements(page1, page2) {
  return Map(page1).mergeDeep(Map(page2));
}
