import { Fontable } from './Fontable'
import { isFontSize } from './isFontSize'
import { isFontStyle } from './isFontStyle'
import { isFontWeight } from './isFontWeight'

/**
 * returns whether the given value is a fontable object.
 *
 * @param value value to check.
 */
// eslint-disable-next-line
export const isFontable = (value: any): value is Fontable => {
  const isFont = typeof value['font'] === 'string'
  const isSize = isFontSize(value['size'])
  const isStyle = isFontStyle(value['style'])
  const isWeight = isFontWeight(value['weight'])

  return isFont && isSize && isStyle && isWeight
}
