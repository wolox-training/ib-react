import { isArray } from './utils';

export function min() {
  if(arguments.length === 0){
    return undefined;
  }

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

export function copy(a) {
  if(isArray(a)){
    return Object.assign([], a);
  }
  return Object.assign({}, a);
}
