import { Colorable } from './Colorable'
import { isRGBA } from './isRGBA'
import { RGBA } from './RGBA'

/**
 * Color
 */
export class Color implements Colorable {
  r: number
  g: number
  b: number
  a: number

  /**
   * Color constructor
   *
   * @param r r.
   * @param g g.
   * @param b b.
   * @param a a.
   */
  constructor(r: number, g: number, b: number, a: number)

  /**
   * Color constructor
   *
   * @param r r.
   * @param g g.
   * @param b b.
   */
  constructor(r: number, g: number, b: number)

  /**
   * Color constructor
   *
   * @param rgb rgb.
   * @param a a.
   */
  constructor(rgb: number, a: number)

  /**
   * Color constructor
   *
   * @param rgb rgb.
   */
  constructor(rgb: number)

  /**
   * Color constructor
   *
   * @param rgba rgba.
   */
  constructor(rgba: RGBA)

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  constructor(
    ...args:
      | [r: number, g: number, b: number, a: number]
      | [r: number, g: number, b: number]
      | [rgb: number, a: number]
      | [rgb: number]
      | [rgba: RGBA]
  ) {
    if (
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number'
    ) {
      this.set(args[0], args[1], args[2], args[3])
    }
    if (
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number'
    ) {
      this.set(args[0], args[1], args[2])
    }
    if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      this.set(args[0], args[1])
    }
    if (typeof args[0] === 'number') {
      this.set(args[0])
    }
    if (isRGBA(args[0])) {
      this.set(args[0].r, args[0].g, args[0].g, args[0].a)
    }

    throw new TypeError(
      this.constructor.name + '.constructor: invalid arguments.'
    )
  }

  set(r: number, g: number, b: number, a: number): this

  set(r: number, g: number, b: number): this

  set(rgb: number, a: number): this

  set(rgb: number): this

  set(rgba: RGBA): this

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  set(
    ...args:
      | [r: number, g: number, b: number, a: number]
      | [r: number, g: number, b: number]
      | [rgb: number, a: number]
      | [rgb: number]
      | [rgba: RGBA]
  ) {
    if (
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number'
    ) {
      this.r = args[0]
      this.g = args[1]
      this.b = args[2]
      this.a = args[3]
      return this
    }
    if (
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number'
    ) {
      this.r = args[0]
      this.g = args[1]
      this.b = args[2]
      return this
    }
    if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      this.r = args[0]
      this.g = args[0]
      this.b = args[0]
      this.a = args[1]
      return this
    }
    if (typeof args[0] === 'number') {
      this.r = args[0]
      this.g = args[0]
      this.b = args[0]
      this.a = 1
      return this
    }
    if (isRGBA(args[0])) {
      this.r = args[0].r
      this.g = args[0].g
      this.b = args[0].g
      this.a = args[0].a
      return this
    }

    throw new TypeError(this.constructor.name + '.set: invalid arguments.')
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  toRenderStyle() {
    return 'rgba(this.r * 255, this.g * 255, this.b * 255, this.a)'
  }
}
