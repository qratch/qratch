import { Pointable } from './Pointable'

/**
 * adds the given two points and return result as new point.
 *
 * @param a pointable value.
 * @param b pointable value.
 */
export const addPoints = (a: Pointable, b: Pointable): Pointable => {
  return {
    x: a.x + b.x,
    y: a.y + b.y,
  }
}

/**
 * subtract the given two points and return result as new point.
 *
 * @param a pointable value.
 * @param b pointable value.
 */
export const subPoints = (a: Pointable, b: Pointable): Pointable => {
  return {
    x: a.x - b.x,
    y: a.y - b.y,
  }
}

/**
 * multiplies the given two points and return result as new point.
 *
 * @param a pointable value.
 * @param b pointable value.
 */
export const mulPoints = (a: Pointable, b: Pointable): Pointable => {
  return {
    x: a.x * b.x,
    y: a.y * b.y,
  }
}

/**
 * divisions the given two points and return result as new point.
 *
 * @param a pointable value.
 * @param b pointable value.
 */
export const divPoints = (a: Pointable, b: Pointable): Pointable => {
  return {
    x: a.x / b.x,
    y: a.y / b.y,
  }
}
