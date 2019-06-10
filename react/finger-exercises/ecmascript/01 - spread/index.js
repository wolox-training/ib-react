import { isArray } from './utils';

export function min(...numbers) {
  if(arguments.length === 0){
    return undefined;
  }

  if(isArray(...numbers)){
    return Math.min.apply(Math, ...numbers);
  }
  else {
    return Math.min.apply(Math, numbers);
  }

}

export function copy(element) {
  if(isArray(element)){
    return [...element];
  }
  else if (isObject(element)){
    return {...element};
  }
  throw new Error("Parameter is not an array nor object!");
}

function isObject(obj){
  return typeof obj === 'object';
}

export function reverseMerge(arrayA, arrayB) {
  let newArray = copy(arrayB);
  newArray.push(...arrayA);

  return newArray;
}

export function filterAttribs(elements) {
  let {a, b, ...c} = elements;  
  return c
}