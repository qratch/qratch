import { FontSize } from './FontSize'
import { FontStyle } from './FontStyle'
import { FontWeight } from './FontWeight'

/**
 * Fontable interface.
 */
export interface Fontable {
  /**
   * font name.
   */
  font?: string

  /**
   * font size.
   */
  size?: FontSize

  /**
   * font style.
   */
  style?: FontStyle

  /**
   * font weight.
   */
  weight?: FontWeight
}
