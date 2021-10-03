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
  if (typeof value === 'undefined') {
    return false
  }

  const isFont =
    typeof value['font'] === 'undefined' || typeof value['font'] === 'string'
  const isSize =
    typeof value['size'] === 'undefined' || isFontSize(value['size'])
  const isStyle =
    typeof value['style'] === 'undefined' || isFontStyle(value['style'])
  const isWeight =
    typeof value['weight'] === 'undefined' || isFontWeight(value['weight'])

  return isFont && isSize && isStyle && isWeight
}
