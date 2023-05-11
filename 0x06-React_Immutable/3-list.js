import { List } from 'immutable';
//uses List from the Immutable.js library

export function getListObject(array) {
  return List(array);
}
export function addElementToList(list, element) {
  return list.push(element);
}
