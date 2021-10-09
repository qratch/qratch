import { Pointable, isPointable } from 'qratch'
import { Vectorable2 } from './Vectorable2'

/**
 * Vec2 class.
 */
export class Vec2 implements Vectorable2 {
  x: number
  y: number

  /**
   * Vec2 constructor.
   *
   * @param pos pos.
   */
  constructor(pos: Pointable)

  /**
   * Vec2 constructor.
   *
   * @param x x.
   * @param y y.
   */
  constructor(x: number, y: number)

  /**
   * Vec2 constructor.
   *
   * @param value value.
   */
  constructor(value: number)

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  constructor(
    ...args: [pos?: Pointable] | [x?: number, y?: number] | [v?: number]
  ) {
    if (isPointable(args[0]) || typeof args[0] === 'undefined') {
      this.x = args[0]?.x ?? 0
      this.y = args[0]?.y ?? 0

      return this
    }
    if (
      (typeof args[0] === 'number' || typeof args[0] === 'undefined') &&
      (typeof args[1] === 'number' || typeof args[1] === 'undefined')
    ) {
      this.x = args[0] ?? 0
      this.y = args[1] ?? 0

      return this
    }
    if (typeof args[0] === 'number' || typeof args[0] === 'undefined') {
      this.x = args[0] ?? 0
      this.y = args[0] ?? 0

      return this
    }

    throw new TypeError(
      this.constructor.name + '.constructor: invalid arguments.'
    )
  }

  set(pos: Pointable): this

  set(x: number, y: number): this

  set(value: number): this

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  set(...args: [pos: Pointable] | [x: number, y: number] | [value: number]) {
    if (isPointable(args[0])) {
      this.x = args[0].x
      this.y = args[0].y

      return this
    }
    if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      this.x = args[0]
      this.y = args[1]

      return this
    }
    if (typeof args[0] === 'number') {
      this.x = args[0]
      this.y = args[0]

      return this
    }

    throw new TypeError(this.constructor.name + '.set: invalid arguments.')
  }

  add(pos: Pointable): this

  add(x: number, y: number): this

  add(value: number): this

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  add(...args: [pos: Pointable] | [x: number, y: number] | [value: number]) {
    if (isPointable(args[0])) {
      this.x += args[0].x
      this.y += args[0].y

      return this
    }
    if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      this.x += args[0]
      this.y += args[1]

      return this
    }
    if (typeof args[0] === 'number') {
      this.x += args[0]
      this.y += args[0]

      return this
    }

    throw new TypeError(this.constructor.name + '.add: invalid arguments.')
  }

  sub(pos: Pointable): this

  sub(x: number, y: number): this

  sub(value: number): this

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  sub(...args: [pos: Pointable] | [x: number, y: number] | [value: number]) {
    if (isPointable(args[0])) {
      this.x -= args[0].x
      this.y -= args[0].y

      return this
    }
    if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      this.x -= args[0]
      this.y -= args[1]

      return this
    }
    if (typeof args[0] === 'number') {
      this.x -= args[0]
      this.y -= args[0]

      return this
    }

    throw new TypeError(this.constructor.name + '.sub: invalid arguments.')
  }

  mul(pos: Pointable): this

  mul(x: number, y: number): this

  mul(value: number): this

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  mul(...args: [pos: Pointable] | [x: number, y: number] | [value: number]) {
    if (isPointable(args[0])) {
      this.x *= args[0].x
      this.y *= args[0].y

      return this
    }
    if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      this.x *= args[0]
      this.y *= args[1]

      return this
    }
    if (typeof args[0] === 'number') {
      this.x *= args[0]
      this.y *= args[0]

      return this
    }

    throw new TypeError(this.constructor.name + '.mul: invalid arguments.')
  }

  div(pos: Pointable): this

  div(x: number, y: number): this

  div(value: number): this

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  div(...args: [pos: Pointable] | [x: number, y: number] | [value: number]) {
    if (isPointable(args[0])) {
      this.x /= args[0].x
      this.y /= args[0].y

      return this
    }
    if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      this.x /= args[0]
      this.y /= args[1]

      return this
    }
    if (typeof args[0] === 'number') {
      this.x /= args[0]
      this.y /= args[0]

      return this
    }

    throw new TypeError(this.constructor.name + '.div: invalid arguments.')
  }

  getAdd(pos: Pointable): this

  getAdd(x: number, y: number): this

  getAdd(value: number): this

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getAdd(...args: [pos: Pointable] | [x: number, y: number] | [value: number]) {
    if (isPointable(args[0])) {
      return new Vec2(this.x + args[0].x, this.y + args[0].y)
    }
    if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      return new Vec2(this.x + args[0], this.y + args[1])
    }
    if (typeof args[0] === 'number') {
      return new Vec2(this.x + args[0], this.y + args[0])
    }

    throw new TypeError(this.constructor.name + '.getAdd: invalid arguments.')
  }

  getSub(pos: Pointable): this

  getSub(x: number, y: number): this

  getSub(value: number): this

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getSub(...args: [pos: Pointable] | [x: number, y: number] | [value: number]) {
    if (isPointable(args[0])) {
      return new Vec2(this.x - args[0].x, this.y - args[0].y)
    }
    if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      return new Vec2(this.x - args[0], this.y - args[1])
    }
    if (typeof args[0] === 'number') {
      return new Vec2(this.x - args[0], this.y - args[0])
    }

    throw new TypeError(this.constructor.name + '.getSub: invalid arguments.')
  }

  getMul(pos: Pointable): this

  getMul(x: number, y: number): this

  getMul(value: number): this

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getMul(...args: [pos: Pointable] | [x: number, y: number] | [value: number]) {
    if (isPointable(args[0])) {
      return new Vec2(this.x * args[0].x, this.y * args[0].y)
    }
    if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      return new Vec2(this.x * args[0], this.y * args[1])
    }
    if (typeof args[0] === 'number') {
      return new Vec2(this.x * args[0], this.y * args[0])
    }

    throw new TypeError(this.constructor.name + '.getMul: invalid arguments.')
  }

  getDiv(pos: Pointable): this

  getDiv(x: number, y: number): this

  getDiv(value: number): this

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getDiv(...args: [pos: Pointable] | [x: number, y: number] | [value: number]) {
    if (isPointable(args[0])) {
      return new Vec2(this.x / args[0].x, this.y / args[0].y)
    }
    if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      return new Vec2(this.x / args[0], this.y / args[1])
    }
    if (typeof args[0] === 'number') {
      return new Vec2(this.x / args[0], this.y / args[0])
    }

    throw new TypeError(this.constructor.name + '.getDiv: invalid arguments.')
  }
}
