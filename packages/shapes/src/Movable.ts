import { Pointable } from 'qratch'
import { Copyable } from '@qratch/copyable'

/**
 * Movable interface.
 */
export interface Movable<T extends Movable<T>> extends Copyable<T> {
  /**
   * x position.
   */
  x: number

  /**
   * y position.
   */
  y: number

  /**
   * move by the given x and the given y.
   *
   * @param x x to move.
   * @param y y to move.
   */
  moveBy(x: number, y: number): Movable<T>

  /**
   * move by the given point.
   *
   * @param p x and y to move.
   */
  moveBy(p: Pointable): Movable<T>

  /**
   * returns object moved by the given x and the given y.
   *
   * @param x x to move.
   * @param y y to move.
   */
  movedBy(x: number, y: number): Movable<T>

  /**
   * returns object moved by the given point.
   *
   * @param p x and y to move.
   */
  movedBy(p: Pointable): Movable<T>
}
