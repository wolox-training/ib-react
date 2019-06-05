import { isArray } from './utils';

export function min() {
  var numbers = arguments[0];
  var args = Array.from(arguments);
  
  if(isArray(numbers)){
    return Math.min.apply(Math, numbers);
  }
  else if (isArray(args)){
    return Math.min.apply(Math, args);
  }
  return numbers;

}

export function copy() {

}
