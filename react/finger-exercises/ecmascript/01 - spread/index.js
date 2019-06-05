import { isArray } from './utils';

export function min(numbers) {
  if(isArray(numbers)){
    return Math.min(numbers);
  }
  return numbers;

}

export function copy() {

}
