import { List } from 'immutable';

export const getListObject = (array) => fromJS(array);

export function addElementToList(list, element) {
    return list.push(element);
  }
