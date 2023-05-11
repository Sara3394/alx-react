import { fromJS } from "immutable";
//uses fromJS from the Immutable.js library

export default function accessImmutableObject(object, array) {
  const mapObj = fromJS(object);
  return mapObj.getIn(array, undefined);
}
