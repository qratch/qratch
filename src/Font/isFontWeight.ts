import { FontWeight } from './FontWeight'

// string font weights array.
const weights: FontWeight[] = ['normal', 'bold', 'lighter', 'bolder']

/**
 * returns whether the given value is a FontWeight value.
 *
 * @param value value to check.
 */
// eslint-disable-next-line
export const isFontWeight = (value: any): value is FontWeight => {
  return typeof value == 'number' || weights.includes(value)
}
