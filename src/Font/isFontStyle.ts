import { FontStyle } from './FontStyle'

// font styles array.
const styles: FontStyle[] = ['normal', 'italic']

/**
 * returns whether the given value is a FontStyle value.
 *
 * @param value value to check.
 */
// eslint-disable-next-line
export const isFontStyle = (value: any): value is FontStyle => {
  return styles.includes(value)
}
