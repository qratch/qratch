import { Pointable } from './Pointable'

/**
 * returns whether the given value is a pointable object.
 *
 * @param value value to check.
 */
// eslint-disable-next-line
export const isPointable = (value: any): value is Pointable => {
  return typeof value['x'] === 'number' && typeof value['y'] === 'number'
}
