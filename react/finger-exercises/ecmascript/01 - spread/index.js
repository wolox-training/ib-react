import { isArray } from './utils';

export function min(numbers) {
  if(isArray(numbers)){
    return Math.min.apply(Math, numbers);
  }
  return numbers;

}

export function copy() {

}
