import { Component } from '@/Component/Component'
import { MouseButtonCode } from './MouseButtonCode'

/**
 * Mouse interface.
 */
export interface Mouse extends Component {
  /**
   * returns `true` while the button is pressed.
   *
   * @param code code.
   */
  pressed(code: MouseButtonCode): boolean

  /**
   * returns `true` the moment the button is up.
   *
   * @param code code.
   */
  up(code: MouseButtonCode): boolean

  /**
   * returns `true` the moment the button is down.
   *
   * @param code code.
   */
  down(code: MouseButtonCode): boolean

  /**
   * returns wheel value.
   */
  wheel(): number
}
