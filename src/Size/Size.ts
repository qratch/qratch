import { isSizeable } from './isSizeable'
import { Sizeable } from './Sizeable'
import { SizeControllable } from './SizeControllable'

/**
 * Size class.
 */
export class Size implements SizeControllable {
  width: number
  height: number

  /**
   * Size constructor.
   *
   * @param size size.
   */
  constructor(size: Sizeable)

  /**
   * Size constructor.
   *
   * @param width width.
   * @param height height.
   */
  constructor(width: number, height: number)

  /**
   * Size constructor.
   *
   * @param value value.
   */
  constructor(value: number)

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  constructor(
    ...args:
      | [size?: Sizeable]
      | [width?: number, height?: number]
      | [v?: number]
  ) {
    if (isSizeable(args[0]) || typeof args[0] === 'undefined') {
      this.width = args[0]?.width ?? 0
      this.height = args[0]?.height ?? 0

      return this
    }
    if (
      (typeof args[0] === 'number' || typeof args[0] === 'undefined') &&
      (typeof args[1] === 'number' || typeof args[1] === 'undefined')
    ) {
      this.width = args[0] ?? 0
      this.height = args[1] ?? 0

      return this
    }
    if (typeof args[0] === 'number' || typeof args[0] === 'undefined') {
      this.width = args[0] ?? 0
      this.height = args[0] ?? 0

      return this
    }

    throw new TypeError(
      this.constructor.name + '.constructor: invalid arguments.'
    )
  }

  set(size: Sizeable): this

  set(width: number, height: number): this

  set(value: number): this

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  set(
    ...args:
      | [size: Sizeable]
      | [width: number, height: number]
      | [value: number]
  ) {
    if (isSizeable(args[0])) {
      this.width = args[0].width
      this.height = args[0].height

      return this
    }
    if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      this.width = args[0]
      this.height = args[1]

      return this
    }
    if (typeof args[0] === 'number') {
      this.width = args[0]
      this.height = args[0]

      return this
    }

    throw new TypeError(this.constructor.name + '.set: invalid arguments.')
  }

  add(size: Sizeable): this

  add(width: number, height: number): this

  add(value: number): this

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  add(
    ...args:
      | [size: Sizeable]
      | [width: number, height: number]
      | [value: number]
  ) {
    if (isSizeable(args[0])) {
      this.width += args[0].width
      this.height += args[0].height

      return this
    }
    if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      this.width += args[0]
      this.height += args[1]

      return this
    }
    if (typeof args[0] === 'number') {
      this.width += args[0]
      this.height += args[0]

      return this
    }

    throw new TypeError(this.constructor.name + '.add: invalid arguments.')
  }

  sub(size: Sizeable): this

  sub(width: number, height: number): this

  sub(value: number): this

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  sub(
    ...args:
      | [size: Sizeable]
      | [width: number, height: number]
      | [value: number]
  ) {
    if (isSizeable(args[0])) {
      this.width -= args[0].width
      this.height -= args[0].height

      return this
    }
    if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      this.width -= args[0]
      this.height -= args[1]

      return this
    }
    if (typeof args[0] === 'number') {
      this.width -= args[0]
      this.height -= args[0]

      return this
    }

    throw new TypeError(this.constructor.name + '.sub: invalid arguments.')
  }

  mul(size: Sizeable): this

  mul(width: number, height: number): this

  mul(value: number): this

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  mul(
    ...args:
      | [size: Sizeable]
      | [width: number, height: number]
      | [value: number]
  ) {
    if (isSizeable(args[0])) {
      this.width *= args[0].width
      this.height *= args[0].height

      return this
    }
    if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      this.width *= args[0]
      this.height *= args[1]

      return this
    }
    if (typeof args[0] === 'number') {
      this.width *= args[0]
      this.height *= args[0]

      return this
    }

    throw new TypeError(this.constructor.name + '.mul: invalid arguments.')
  }

  div(size: Sizeable): this

  div(width: number, height: number): this

  div(value: number): this

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  div(
    ...args:
      | [size: Sizeable]
      | [width: number, height: number]
      | [value: number]
  ) {
    if (isSizeable(args[0])) {
      this.width /= args[0].width
      this.height /= args[0].height

      return this
    }
    if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      this.width /= args[0]
      this.height /= args[1]

      return this
    }
    if (typeof args[0] === 'number') {
      this.width /= args[0]
      this.height /= args[0]

      return this
    }

    throw new TypeError(this.constructor.name + '.div: invalid arguments.')
  }

  getAdd(size: Sizeable): SizeControllable

  getAdd(width: number, height: number): SizeControllable

  getAdd(value: number): SizeControllable

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getAdd(
    ...args:
      | [size: Sizeable]
      | [width: number, height: number]
      | [value: number]
  ) {
    if (isSizeable(args[0])) {
      return new Size(this.width + args[0].width, this.height + args[0].height)
    }
    if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      return new Size(this.width + args[0], this.height + args[1])
    }
    if (typeof args[0] === 'number') {
      return new Size(this.width + args[0], this.height + args[0])
    }

    throw new TypeError(this.constructor.name + '.getAdd: invalid arguments.')
  }

  getSub(size: Sizeable): SizeControllable

  getSub(width: number, height: number): SizeControllable

  getSub(value: number): SizeControllable

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getSub(
    ...args:
      | [size: Sizeable]
      | [width: number, height: number]
      | [value: number]
  ) {
    if (isSizeable(args[0])) {
      return new Size(this.width - args[0].width, this.height - args[0].height)
    }
    if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      return new Size(this.width - args[0], this.height - args[1])
    }
    if (typeof args[0] === 'number') {
      return new Size(this.width - args[0], this.height - args[0])
    }

    throw new TypeError(this.constructor.name + '.getSub: invalid arguments.')
  }

  getMul(size: Sizeable): SizeControllable

  getMul(width: number, height: number): SizeControllable

  getMul(value: number): SizeControllable

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getMul(
    ...args:
      | [size: Sizeable]
      | [width: number, height: number]
      | [value: number]
  ) {
    if (isSizeable(args[0])) {
      return new Size(this.width * args[0].width, this.height * args[0].height)
    }
    if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      return new Size(this.width * args[0], this.height * args[1])
    }
    if (typeof args[0] === 'number') {
      return new Size(this.width * args[0], this.height * args[0])
    }

    throw new TypeError(this.constructor.name + '.getMul: invalid arguments.')
  }

  getDiv(size: Sizeable): SizeControllable

  getDiv(width: number, height: number): SizeControllable

  getDiv(value: number): SizeControllable

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getDiv(
    ...args:
      | [size: Sizeable]
      | [width: number, height: number]
      | [value: number]
  ) {
    if (isSizeable(args[0])) {
      return new Size(this.width / args[0].width, this.height / args[0].height)
    }
    if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      return new Size(this.width / args[0], this.height / args[1])
    }
    if (typeof args[0] === 'number') {
      return new Size(this.width / args[0], this.height / args[0])
    }

    throw new TypeError(this.constructor.name + '.getDiv: invalid arguments.')
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  area() {
    return this.width * this.height
  }
}
