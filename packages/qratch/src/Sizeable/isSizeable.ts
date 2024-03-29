import { Sizeable } from './Sizeable'

/**
 * returns whether the given value is a sizeable object.
 *
 * @param value value to check.
 */
// eslint-disable-next-line
export const isSizeable = (value: any): value is Sizeable => {
  if (typeof value === 'undefined') {
    return false
  }

  return (
    typeof value['width'] === 'number' && typeof value['height'] === 'number'
  )
}
