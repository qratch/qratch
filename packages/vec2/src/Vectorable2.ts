import { Pointable } from 'qratch'
import { Copyable } from '@qratch/copyable'

/**
 * Vectorable2 interface.
 */
export interface Vectorable2<T extends Copyable<T>>
  extends Pointable,
    Copyable<T> {
  /**
   * set the given elements to its own elements and returns this.
   *
   * @param pos pos.
   */
  set(pos: Pointable): this

  /**
   * set the given elements to its own elements and returns this.
   *
   * @param x x.
   * @param y y.
   */
  set(x: number, y: number): this

  /**
   * set the given elements to its own elements and returns this.
   *
   * @param value value.
   */
  set(value: number): this

  /**
   * add the given elements to its own elements and returns this.
   *
   * @param pos pos.
   */
  add(pos: Pointable): this

  /**
   * add the given elements to its own elements and returns this.
   *
   * @param x x.
   * @param y y.
   */
  add(x: number, y: number): this

  /**
   * add the given elements to its own elements and returns this.
   *
   * @param value value.
   */
  add(value: number): this

  /**
   * subtract the given elements to its own elements and returns this.
   *
   * @param pos pos.
   */
  sub(pos: Pointable): this

  /**
   * subtract the given elements to its own elements and returns this.
   *
   * @param x x.
   * @param y y.
   */
  sub(x: number, y: number): this

  /**
   * subtract the given elements to its own elements and returns this.
   *
   * @param value value.
   */
  sub(value: number): this

  /**
   * mutiply the given elements to its own elements and returns this.
   *
   * @param pos pos.
   */
  mul(pos: Pointable): this

  /**
   * mutiply the given elements to its own elements and returns this.
   *
   * @param x x.
   * @param y y.
   */
  mul(x: number, y: number): this

  /**
   * mutiply the given elements to its own elements and returns this.
   *
   * @param value value.
   */
  mul(value: number): this

  /**
   * division the given elements to its own elements and returns this.
   *
   * @param pos pos.
   */
  div(pos: Pointable): this

  /**
   * division the given elements to its own elements and returns this.
   *
   * @param x x.
   * @param y y.
   */
  div(x: number, y: number): this

  /**
   * division the given elements to its own elements and returns this.
   *
   * @param value value.
   */
  div(value: number): this

  /**
   * returns a vector with the given numeric value added to x and y.
   *
   * @param pos pos.
   */
  getAdd(pos: Pointable): this

  /**
   * returns a vector with the given numeric value added to x and y.
   *
   * @param x x.
   * @param y y.
   */
  getAdd(x: number, y: number): this

  /**
   * returns a vector with the given numeric value added to x and y.
   *
   * @param value value.
   */
  getAdd(value: number): this

  /**
   * returns a vector with the given numeric value subtracted to x and y.
   *
   * @param pos pos.
   */
  getSub(pos: Pointable): this

  /**
   * returns a vector with the given numeric value subtracted to x and y.
   *
   * @param x x.
   * @param y y.
   */
  getSub(x: number, y: number): this

  /**
   * returns a vector with the given numeric value subtracted to x and y.
   *
   * @param value value.
   */
  getSub(value: number): this

  /**
   * returns a vector with the given numeric value multiplied to x and y.
   *
   * @param pos pos.
   */
  getMul(pos: Pointable): this

  /**
   * returns a vector with the given numeric value multiplied to x and y.
   *
   * @param x x.
   * @param y y.
   */
  getMul(x: number, y: number): this

  /**
   * returns a vector with the given numeric value multiplied to x and y.
   *
   * @param value value.
   */
  getMul(value: number): this

  /**
   * returns a vector with the given numeric value divisioned to x and y.
   *
   * @param pos pos.
   */
  getDiv(pos: Pointable): this

  /**
   * returns a vector with the given numeric value divisioned to x and y.
   *
   * @param x x.
   * @param y y.
   */
  getDiv(x: number, y: number): this

  /**
   * returns a vector with the given numeric value divisioned to x and y.
   *
   * @param value value.
   */
  getDiv(value: number): this

  /**
   * returns vector length.
   */
  length(): number
  /**
   * returns the inner product of the given vector.
   *
   * @param pos pos.
   */
  dot(pos: Pointable): number

  /**
   * returns the inner product of the given vector.
   *
   * @param x x.
   * @param y y.
   */
  dot(x: number, y: number): number

  /**
   * returns the inner product of the given vector.
   *
   * @param value value.
   */
  dot(value: number): number

  /**
   * returns distance to given the vector.
   *
   * @param pos pos.
   */
  distance(pos: Pointable): number

  /**
   * returns distance to given the vector.
   *
   * @param x x.
   * @param y y.
   */
  distance(x: number, y: number): number

  /**
   * returns distance to given the vector.
   *
   * @param value value.
   */
  distance(value: number): number

  /**
   * returns the radian angle to the given vector.
   *
   * @param pos pos.
   */
  angleTo(pos: Pointable): number

  /**
   * returns the radian angle to the given vector.
   *
   * @param x x.
   * @param y y.
   */
  angleTo(x: number, y: number): number

  /**
   * returns normalized vector.
   */
  normalized(): Vectorable2<T>
  /**
   * returns whether is zero vector.
   */
  isZero(): boolean
  /**
   * clamp vector to the given min vector and the given max vector.
   *
   * @param minPoint minPoint.
   * @param maxPoint maxPoint.
   */
  clamp(minPoint: Pointable, maxPoint: Pointable): this

  /**
   * clamp vector to the given min vector and the given max vector.
   *
   * @param minPoint minPoint.
   * @param maxX maxX.
   * @param maxY maxY.
   */
  clamp(minPoint: Pointable, maxX: number, maxY: number): this

  /**
   * clamp vector to the given min vector and the given max vector.
   *
   * @param minX minX.
   * @param minY minY.
   * @param maxPoint maxPoint.
   */
  clamp(minX: number, minY: number, maxPoint: Pointable): this

  /**
   * clamp vector to the given min vector and the given max vector.
   *
   * @param minX minX.
   * @param minY minY.
   * @param maxX maxX.
   * @param maxY maxY.
   */
  clamp(minX: number, minY: number, maxX: number, maxY: number): this
}
