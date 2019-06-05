import { isArray } from './utils';

export function min() {
  if(arguments.length === 0){
    return undefined;
  }

  let numbers = arguments[0];
  let args = Array.from(arguments);

  if(isArray(numbers)){
    return Math.min.apply(Math, numbers);
  }
  else if (isArray(args)){
    return Math.min.apply(Math, args);
  }
  return numbers;
}

export function copy(a) {
  if(isArray(a)){
    return Object.assign([], a);
  }
  return Object.assign({}, a);
}

export function reverseMerge(a, b) {
  return b.concat(a); 
}

export function filterAttribs() {
  let mObject = copy(arguments[0]);
  delete mObject.a;
  delete mObject.b;
  return mObject
}