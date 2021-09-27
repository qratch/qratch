import { RGBA } from './RGBA'

/**
 * returns whether the given value is a `RGBA` object.
 *
 * @param value value to check.
 */
// eslint-disable-next-line
export const isRGBA = (value: any): value is RGBA => {
  if (typeof value === 'undefined') {
    return false
  }

  const r = typeof value['r'] === 'number' && value['r'] > 0 && value['r'] <= 1
  const g = typeof value['g'] === 'number' && value['g'] > 0 && value['g'] <= 1
  const b = typeof value['b'] === 'number' && value['b'] > 0 && value['b'] <= 1

  return r && g && b
}
