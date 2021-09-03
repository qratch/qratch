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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  constructor(...args: any[]) {
    if (isSizeable(args[0])) {
      this.width = args[0].width ?? 0
      this.height = args[0].height ?? 0

      return this
    }
    if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      this.width = args[0] ?? 0
      this.height = args[1] ?? 0

      return this
    }
    if (typeof args[0] === 'number') {
      this.width = args[0] ?? 0
      this.height = args[0] ?? 0

      return this
    }

    throw new TypeError(
      this.constructor.name + '.constructor: invalid arguments.'
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  set(...args: any[]) {
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  add(...args: any[]) {
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  sub(...args: any[]) {
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  mul(...args: any[]) {
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  div(...args: any[]) {
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  getAdd(...args: any[]) {
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  getSub(...args: any[]) {
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  getMul(...args: any[]) {
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  getDiv(...args: any[]) {
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
