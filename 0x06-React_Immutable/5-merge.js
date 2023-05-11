import { List, Map } from 'immutable';
//uses fromJS from the Immutable.js library

export const concatElements = (page1, page2) => List(page1).concat(page2);

export const mergeElements = (page1, page2) => Map(page1).merge(page2);
