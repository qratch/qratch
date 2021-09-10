import { Fontable } from './Fontable'
import { fontSizeToString } from './fontSizeToString'

/**
 * stringify fontable object.
 *
 * @param fontable fontable object.
 */
export const fontableToString = (fontable: Fontable): string => {
  const font = fontable.font ?? ''
  const size =
    typeof fontable.size === 'undefined' ? '' : fontSizeToString(fontable.size)
  const style = fontable.style ?? ''
  const weight = fontable.weight ?? ''

  // font-style, font-variant and font-weight must precede font-size.
  // https://developer.mozilla.org/en-US/docs/Web/CSS/font
  const string = [style, weight, size, font].join('')

  return string
}
