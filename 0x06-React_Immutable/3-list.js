import { fromJS } from "immutable";
//uses fromJS from the Immutable.js library

export const getListObject = (array) => fromJS(array);

export const addElementToList = (list, element) => list.push(element);
