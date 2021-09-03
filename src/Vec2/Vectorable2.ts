import { Pointable } from '@/Pointable/Pointable'

/**
 * Vectorable2 interface.
 */
export interface Vectorable2 extends Pointable {
  /**
   * set the given elements to its own elements and returns this.
   *
   * @param pos pos.
   */
  set(pos: Pointable): void

  /**
   * set the given elements to its own elements and returns this.
   *
   * @param x x.
   * @param y y.
   */
  set(x: number, y: number): void

  /**
   * set the given elements to its own elements and returns this.
   *
   * @param value value.
   */
  set(value: number): void

  /**
   * add the given elements to its own elements and returns this.
   *
   * @param pos pos.
   */
  add(pos: Pointable): void

  /**
   * add the given elements to its own elements and returns this.
   *
   * @param x x.
   * @param y y.
   */
  add(x: number, y: number): void

  /**
   * add the given elements to its own elements and returns this.
   *
   * @param value value.
   */
  add(value: number): void

  /**
   * subtract the given elements to its own elements and returns this.
   *
   * @param pos pos.
   */
  sub(pos: Pointable): void

  /**
   * subtract the given elements to its own elements and returns this.
   *
   * @param x x.
   * @param y y.
   */
  sub(x: number, y: number): void

  /**
   * subtract the given elements to its own elements and returns this.
   *
   * @param value value.
   */
  sub(value: number): void

  /**
   * mutiply the given elements to its own elements and returns this.
   *
   * @param pos pos.
   */
  mul(pos: Pointable): void

  /**
   * mutiply the given elements to its own elements and returns this.
   *
   * @param x x.
   * @param y y.
   */
  mul(x: number, y: number): void

  /**
   * mutiply the given elements to its own elements and returns this.
   *
   * @param value value.
   */
  mul(value: number): void

  /**
   * division the given elements to its own elements and returns this.
   *
   * @param pos pos.
   */
  div(pos: Pointable): void

  /**
   * division the given elements to its own elements and returns this.
   *
   * @param x x.
   * @param y y.
   */
  div(x: number, y: number): void

  /**
   * division the given elements to its own elements and returns this.
   *
   * @param value value.
   */
  div(value: number): void

  /**
   * returns a vector with the given numeric value added to x and y.
   *
   * @param pos pos.
   */
  getAdd(pos: Pointable): void

  /**
   * returns a vector with the given numeric value added to x and y.
   *
   * @param x x.
   * @param y y.
   */
  getAdd(x: number, y: number): void

  /**
   * returns a vector with the given numeric value added to x and y.
   *
   * @param value value.
   */
  getAdd(value: number): void

  /**
   * returns a vector with the given numeric value subtracted to x and y.
   *
   * @param pos pos.
   */
  getSub(pos: Pointable): void

  /**
   * returns a vector with the given numeric value subtracted to x and y.
   *
   * @param x x.
   * @param y y.
   */
  getSub(x: number, y: number): void

  /**
   * returns a vector with the given numeric value subtracted to x and y.
   *
   * @param value value.
   */
  getSub(value: number): void

  /**
   * returns a vector with the given numeric value multiplied to x and y.
   *
   * @param pos pos.
   */
  getMul(pos: Pointable): void

  /**
   * returns a vector with the given numeric value multiplied to x and y.
   *
   * @param x x.
   * @param y y.
   */
  getMul(x: number, y: number): void

  /**
   * returns a vector with the given numeric value multiplied to x and y.
   *
   * @param value value.
   */
  getMul(value: number): void

  /**
   * returns a vector with the given numeric value divisioned to x and y.
   *
   * @param pos pos.
   */
  getDiv(pos: Pointable): void

  /**
   * returns a vector with the given numeric value divisioned to x and y.
   *
   * @param x x.
   * @param y y.
   */
  getDiv(x: number, y: number): void

  /**
   * returns a vector with the given numeric value divisioned to x and y.
   *
   * @param value value.
   */
  getDiv(value: number): void
}
