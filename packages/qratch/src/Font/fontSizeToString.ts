import { FontSize } from './FontSize'

/**
 * stringify FontSize object.
 *
 * @param fontSize FontSize object.
 */
export const fontSizeToString = (fontSize: FontSize): string => {
  if (typeof fontSize === 'number') {
    return `${fontSize}px`
  }

  return fontSize
}
