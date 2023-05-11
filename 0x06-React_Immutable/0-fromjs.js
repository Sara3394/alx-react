import { fromJS } from "./immutable.js";
//uses fromJS from the Immutable.js library

const getImmutableObject = (object) => fromJS(object);

export default getImmutableObject;
