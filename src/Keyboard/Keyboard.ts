import { KeyCode } from './KeyCode'

/**
 * Keyboard interface.
 */
export interface Keyboard {
  /**
   * returns `true` while the key is pressed.
   *
   * @param code code.
   */
  pressed(code: KeyCode): boolean

  /**
   * returns `true` the moment the key is up.
   *
   * @param code code.
   */
  up(code: KeyCode): boolean

  /**
   * returns `true` the moment the key is down.
   *
   * @param code code.
   */
  down(code: KeyCode): boolean
}
