import { Pointable } from '@/Pointable/Pointable'

/**
 * Vectorable2 interface.
 */
export interface Vectorable2 extends Pointable {
  /**
   * set the given numeric value to x and y.
   *
   * @param value numeric value.
   */
  set(value: number): this

  /**
   * set the given x and given y to x and y.
   *
   * @param x value to add to x.
   * @param y value to add to y.
   */
  set(x: number, y: number): this

  /**
   * set the given points x and y to x and y.
   *
   * @param pointable pointable value.
   */
  set(pointable: Pointable): this

  /**
   * add the given numeric value to x and y.
   *
   * @param value numeric value.
   */
  add(value: number): this

  /**
   * add the given x and given y to x and y.
   *
   * @param x value to add to x.
   * @param y value to add to y.
   */
  add(x: number, y: number): this

  /**
   * add the given points x and y to x and y.
   *
   * @param pointable pointable value.
   */
  add(pointable: Pointable): this

  /**
   * subtract the given numeric value to x and y.
   *
   * @param value numeric value.
   */
  sub(value: number): this

  /**
   * subtract the given x and given y to x and y.
   *
   * @param x value to add to x.
   * @param y value to add to y.
   */
  sub(x: number, y: number): this

  /**
   * subtract the given points x and y to x and y.
   *
   * @param pointable pointable value.
   */
  sub(pointable: Pointable): this

  /**
   * multiply the given numeric value to x and y.
   *
   * @param value numeric value.
   */
  mul(value: number): this

  /**
   * multiply the given x and given y to x and y.
   *
   * @param x value to add to x.
   * @param y value to add to y.
   */
  mul(x: number, y: number): this

  /**
   * multiply the given points x and y to x and y.
   *
   * @param pointable pointable value.
   */
  mul(pointable: Pointable): this

  /**
   * division the given numeric value to x and y.
   *
   * @param value numeric value.
   */
  div(value: number): this

  /**
   * division the given x and given y to x and y.
   *
   * @param x value to add to x.
   * @param y value to add to y.
   */
  div(x: number, y: number): this

  /**
   * division the given points x and y to x and y.
   *
   * @param pointable pointable value.
   */
  div(pointable: Pointable): this

  /**
   * returns a vector with the given numeric value added to x and y.
   *
   * @param value numeric value.
   */
  getAdd(value: number): Vectorable2

  /**
   * returns a vector with given x and given y added to x and y.
   *
   * @param x value to add to x.
   * @param y value to add to y.
   */
  getAdd(x: number, y: number): Vectorable2

  /**
   * returns a vector with given pointable added to x and y.
   *
   * @param x value to add to x.
   * @param y value to add to y.
   */
  getAdd(pointable: Pointable): Vectorable2

  /**
   * returns a vector with the given numeric value subtracted to x and y.
   *
   * @param value numeric value.
   */
  getSub(value: number): Vectorable2

  /**
   * returns a vector with given x and given y subtracted to x and y.
   *
   * @param x value to add to x.
   * @param y value to add to y.
   */
  getSub(x: number, y: number): Vectorable2

  /**
   * returns a vector with given pointable subtracted to x and y.
   *
   * @param x value to add to x.
   * @param y value to add to y.
   */
  getSub(pointable: Pointable): Vectorable2

  /**
   * returns a vector with the given numeric value multiply to x and y.
   *
   * @param value numeric value.
   */
  getMul(value: number): Vectorable2

  /**
   * returns a vector with given x and given y multiply to x and y.
   *
   * @param x value to add to x.
   * @param y value to add to y.
   */
  getMul(x: number, y: number): Vectorable2

  /**
   * returns a vector with given pointable multiply to x and y.
   *
   * @param x value to add to x.
   * @param y value to add to y.
   */
  getMul(pointable: Pointable): Vectorable2

  /**
   * returns a vector with the given numeric value division to x and y.
   *
   * @param value numeric value.
   */
  getDiv(value: number): Vectorable2

  /**
   * returns a vector with given x and given y division to x and y.
   *
   * @param x value to add to x.
   * @param y value to add to y.
   */
  getDiv(x: number, y: number): Vectorable2

  /**
   * returns a vector with given pointable division to x and y.
   *
   * @param x value to add to x.
   * @param y value to add to y.
   */
  getDiv(pointable: Pointable): Vectorable2
}
