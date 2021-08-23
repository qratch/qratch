import { Fontable } from './Fontable'

/**
 * returns whether the given value is a fontable object.
 *
 * @param value value to check.
 */
// eslint-disable-next-line
export const isFontable = (value: any): value is Fontable => {
  return typeof value['font'] === 'string' && typeof value['size'] === 'number'
}
