import { FontSize } from './FontSize'

/**
 * returns whether the given value is a FontSize value.
 *
 * @param value value to check.
 */
// eslint-disable-next-line
export const isFontSize = (value: any): value is FontSize => {
  return typeof value === 'number' || typeof value === 'string'
}
