/**
 * Keyboard interface.
 */
export interface Keyboard<Code extends string> {
  /**
   * returns `true` while the key is pressed.
   *
   * @param code code.
   */
  pressed(code: Code): boolean

  /**
   * returns `true` the moment the key is up.
   *
   * @param code code.
   */
  up(code: Code): boolean

  /**
   * returns `true` the moment the key is down.
   *
   * @param code code.
   */
  down(code: Code): boolean
}
