import { HasArea } from '@/HasArea'
import { Movable } from '@/Movable'
import { ShapeControllable } from '@/ShapeControllable'
import { Pointable } from 'qratch'

/**
 * RectControllable interface.
 */
export interface RectControllable
  extends ShapeControllable,
    Movable<RectControllable>,
    HasArea {
  /**
   * returns center point.
   */
  center(): Pointable

  /**
   * returns left-top point.
   *
   * @example
   * ┌ here
   * ├────┐
   * │Rect│
   * └────┘
   */
  leftTop(): Pointable

  /**
   * returns left-bottom point.
   *
   * @example
   * ┌────┐
   * │Rect│
   * ├────┘
   * └ here
   */
  leftBottom(): Pointable

  /**
   * returns right-top point.
   *
   * @example
   * here ┐
   * ┌────┤
   * │Rect│
   * └────┘
   */
  rightTop(): Pointable

  /**
   * returns right-bottom point.
   *
   * @example
   * ┌────┐
   * │Rect│
   * └────┤
   * here ┘
   */
  rightBottom(): Pointable
}
