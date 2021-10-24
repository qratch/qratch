import { Shapeable } from '@/Shapeable'

/**
 * RectShape interface.
 */
export interface RectShape extends Shapeable {
  /**
   * x position.
   */
  x: number

  /**
   * y position.
   */
  y: number

  /**
   * width.
   */
  width: number

  /**
   * height.
   */
  height: number
}
