import { RenderStylable } from '@/RenderStyleable/RenderStylable'
import { RGBA } from './RGBA'

/**
 * Colorable interface.
 */
export interface Colorable extends RenderStylable {
  /**
   * set the given elements to its own elements and returns thid.
   *
   * @param r r.
   * @param g g.
   * @param b b.
   * @param a a.
   */
  set(r: number, g: number, b: number, a: number): this

  /**
   * set the given elements to its own elements and returns thid.
   *
   * @param r r.
   * @param g g.
   * @param b b.
   */
  set(r: number, g: number, b: number): this

  /**
   * set the given elements to its own elements and returns thid.
   *
   * @param rgb rgb.
   * @param a a.
   */
  set(rgb: number, a: number): this

  /**
   * set the given elements to its own elements and returns thid.
   *
   * @param rgb rgb.
   */
  set(rgb: number): this

  /**
   * set the given elements to its own elements and returns thid.
   *
   * @param rgba rgba.
   */
  set(rgba: RGBA): this
}
