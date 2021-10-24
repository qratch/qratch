import { isPointable, isSizeable, Pointable, Sizeable } from 'qratch'
import { RectControllable } from './RectControllable'
import { RectShape } from './RectShape'
import { Move } from '@/Move'

/**
 * Rect class.
 */
export class Rect extends Move<Rect> implements RectShape, RectControllable {
  x: number

  y: number

  width: number

  height: number

  /**
   * Rect constructor.
   *
   * @param x x.
   * @param y y.
   * @param width width.
   * @param height height.
   */
  constructor(x: number, y: number, width: number, height: number)

  /**
   * Rect constructor.
   *
   * @param pos position.
   * @param size size.
   */
  constructor(pos: Pointable, size: Sizeable)

  constructor(
    ...args:
      | [x: number, y: number, width: number, height: number]
      | [pos: Pointable, size: Sizeable]
  ) {
    super()

    if (isPointable(args[0]) && isSizeable(args[1])) {
      this.x = args[0].x
      this.y = args[0].y
      this.width = args[1].width
      this.height = args[1].height
    } else if (
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number'
    ) {
      this.x = args[0]
      this.y = args[1]
      this.width = args[2]
      this.height = args[3]
    } else {
      throw new TypeError('argument pattern does not match.')
    }
  }

  copy(): Rect {
    return new Rect(this.x, this.y, this.width, this.height)
  }

  area(): number {
    return this.width * this.height
  }

  center(): Pointable {
    return {
      x: this.x + this.width / 2,
      y: this.y + this.height / 2,
    }
  }

  leftTop(): Pointable {
    return {
      x: this.x,
      y: this.y,
    }
  }

  leftBottom(): Pointable {
    return {
      x: this.x,
      y: this.y + this.height,
    }
  }

  rightTop(): Pointable {
    return {
      x: this.x + this.width,
      y: this.y,
    }
  }

  rightBottom(): Pointable {
    return {
      x: this.x + this.width,
      y: this.y + this.height,
    }
  }
}
