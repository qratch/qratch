/**
 * Copyable interface.
 */
export interface Copyable<T extends Copyable<T>> {
  /**
   * creates copy and returns it.
   */
  copy(): T
}
