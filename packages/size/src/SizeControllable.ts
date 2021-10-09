import { Sizeable } from 'qratch'

/**
 * SizeControllable interface.
 */
export interface SizeControllable extends Sizeable {
  /**
   * set the given elements to its own elements and returns this.
   *
   * @param size size.
   */
  set(size: Sizeable): this

  /**
   * set the given elements to its own elements and returns this.
   *
   * @param width width.
   * @param height height.
   */
  set(width: number, height: number): this

  /**
   * set the given elements to its own elements and returns this.
   *
   * @param value value.
   */
  set(value: number): this

  /**
   * add the given elements to its own elements and returns this.
   *
   * @param size size.
   */
  add(size: Sizeable): this

  /**
   * add the given elements to its own elements and returns this.
   *
   * @param width width.
   * @param height height.
   */
  add(width: number, height: number): this

  /**
   * add the given elements to its own elements and returns this.
   *
   * @param value value.
   */
  add(value: number): this

  /**
   * subtract the given elements to its own elements and returns this.
   *
   * @param size size.
   */
  sub(size: Sizeable): this

  /**
   * subtract the given elements to its own elements and returns this.
   *
   * @param width width.
   * @param height height.
   */
  sub(width: number, height: number): this

  /**
   * subtract the given elements to its own elements and returns this.
   *
   * @param value value.
   */
  sub(value: number): this

  /**
   * mutiply the given elements to its own elements and returns this.
   *
   * @param size size.
   */
  mul(size: Sizeable): this

  /**
   * mutiply the given elements to its own elements and returns this.
   *
   * @param width width.
   * @param height height.
   */
  mul(width: number, height: number): this

  /**
   * mutiply the given elements to its own elements and returns this.
   *
   * @param value value.
   */
  mul(value: number): this

  /**
   * division the given elements to its own elements and returns this.
   *
   * @param size size.
   */
  div(size: Sizeable): this

  /**
   * division the given elements to its own elements and returns this.
   *
   * @param width width.
   * @param height height.
   */
  div(width: number, height: number): this

  /**
   * division the given elements to its own elements and returns this.
   *
   * @param value value.
   */
  div(value: number): this

  /**
   * returns a vector with the given numeric value added to width and height.
   *
   * @param size size.
   */
  getAdd(size: Sizeable): SizeControllable

  /**
   * returns a vector with the given numeric value added to width and height.
   *
   * @param width width.
   * @param height height.
   */
  getAdd(width: number, height: number): SizeControllable

  /**
   * returns a vector with the given numeric value added to width and height.
   *
   * @param value value.
   */
  getAdd(value: number): SizeControllable

  /**
   * returns a vector with the given numeric value subtracted to width and height.
   *
   * @param size size.
   */
  getSub(size: Sizeable): SizeControllable

  /**
   * returns a vector with the given numeric value subtracted to width and height.
   *
   * @param width width.
   * @param height height.
   */
  getSub(width: number, height: number): SizeControllable

  /**
   * returns a vector with the given numeric value subtracted to width and height.
   *
   * @param value value.
   */
  getSub(value: number): SizeControllable

  /**
   * returns a vector with the given numeric value multiplied to width and height.
   *
   * @param size size.
   */
  getMul(size: Sizeable): SizeControllable

  /**
   * returns a vector with the given numeric value multiplied to width and height.
   *
   * @param width width.
   * @param height height.
   */
  getMul(width: number, height: number): SizeControllable

  /**
   * returns a vector with the given numeric value multiplied to width and height.
   *
   * @param value value.
   */
  getMul(value: number): SizeControllable

  /**
   * returns a vector with the given numeric value divisioned to width and height.
   *
   * @param size size.
   */
  getDiv(size: Sizeable): SizeControllable

  /**
   * returns a vector with the given numeric value divisioned to width and height.
   *
   * @param width width.
   * @param height height.
   */
  getDiv(width: number, height: number): SizeControllable

  /**
   * returns a vector with the given numeric value divisioned to width and height.
   *
   * @param value value.
   */
  getDiv(value: number): SizeControllable

  /**
   * returns the area.
   */
  area(): number
}
