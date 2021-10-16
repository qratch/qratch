import { Pointable, isPointable } from 'qratch'
import { Vectorable2 } from '.'

/**
 * Vec2 class.
 */
export class Vec2 implements Vectorable2<Vec2> {
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  copy() {
    return new Vec2(this.x, this.y)
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }
  dot(pos: Pointable): number

  dot(x: number, y: number): number

  dot(value: number): number

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  dot(...args: [pos: Pointable] | [x: number, y: number] | [value: number]) {
    if (isPointable(args[0])) {
      return this.x * args[0].x + this.y * args[0].y
    }
    if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      return this.x * args[0] + this.y * args[1]
    }
    if (typeof args[0] === 'number') {
      return this.x * args[0] + this.y * args[0]
    }

    throw new TypeError(this.constructor.name + '.dot: invalid arguments.')
  }

  distance(pos: Pointable): number

  distance(x: number, y: number): number

  distance(value: number): number

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  distance(
    ...args: [pos: Pointable] | [x: number, y: number] | [value: number]
  ) {
    if (isPointable(args[0])) {
      return Math.sqrt((this.x - args[0].x) ** 2 + (this.y - args[0].y))
    }
    if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      return Math.sqrt((this.x - args[0]) ** 2 + (this.y - args[1]))
    }
    if (typeof args[0] === 'number') {
      return Math.sqrt((this.x - args[0]) ** 2 + (this.y - args[0]))
    }

    throw new TypeError(this.constructor.name + '.distance: invalid arguments.')
  }

  angleTo(pos: Pointable): number

  angleTo(x: number, y: number): number

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  angleTo(...args: [pos: Pointable] | [x: number, y: number]) {
    if (isPointable(args[0])) {
      return Math.atan2(this.y - args[0].y, this.x - args[0].x)
    }
    if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      return Math.atan2(this.y - args[1], this.x - args[0])
    }

    throw new TypeError(this.constructor.name + '.angleTo: invalid arguments.')
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  normalized() {
    const length = this.length()
    return new Vec2(this.x / length, this.y / length)
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  isZero() {
    return this.x === 0 && this.y === 0
  }
  clamp(minPoint: Pointable, maxPoint: Pointable): this

  clamp(minPoint: Pointable, maxX: number, maxY: number): this

  clamp(minX: number, minY: number, maxPoint: Pointable): this

  clamp(minX: number, minY: number, maxX: number, maxY: number): this

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  clamp(
    ...args:
      | [minPoint: Pointable, maxPoint: Pointable]
      | [minPoint: Pointable, maxX: number, maxY: number]
      | [minX: number, minY: number, maxPoint: Pointable]
      | [minX: number, minY: number, maxX: number, maxY: number]
  ) {
    if (isPointable(args[0]) && isPointable(args[1])) {
      this.x = Math.max(Math.min(args[1].x, this.x), args[0].x)
      this.y = Math.max(Math.min(args[1].y, this.x), args[0].y)
      return this
    }
    if (
      isPointable(args[0]) &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number'
    ) {
      this.x = Math.max(Math.min(args[1], this.x), args[0].x)
      this.y = Math.max(Math.min(args[2], this.x), args[0].y)
      return this
    }
    if (
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      isPointable(args[2])
    ) {
      this.x = Math.max(Math.min(args[2].x, this.x), args[0])
      this.y = Math.max(Math.min(args[2].y, this.x), args[1])
      return this
    }
    if (
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number'
    ) {
      this.x = Math.max(Math.min(args[2], this.x), args[0])
      this.y = Math.max(Math.min(args[3], this.x), args[1])
      return this
    }

    throw new TypeError(this.constructor.name + '.clamp: invalid arguments.')
  }
}
