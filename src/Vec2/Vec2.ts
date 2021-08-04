import { Pointable } from '@/Pointable/Pointable'
import { Vectorable2 } from './Vectorable2'

/**
 * Vec2 class.
 */
export class Vec2 implements Vectorable2 {
  x = 0
  y = 0

  /**
   * set the given numeric value to x and y.
   *
   * @param value numeric value.
   */
  constructor(value: number)

  /**
   * set the given x and given y to x and y.
   *
   * @param x value to add to x.
   * @param y value to add to y.
   */
  constructor(x: number, y: number)

  /**
   * set the given points x and y to x and y.
   *
   * @param pointable pointable value.
   */
  constructor(pointable: Pointable)

  constructor(numberOrPointable: number | Pointable, number?: number) {
    this.set(numberOrPointable, number)
  }

  set(numberOrPointable: number | Pointable, number?: number): this {
    if (typeof numberOrPointable === 'number') {
      if (typeof number === 'undefined') {
        this.x = numberOrPointable
        this.y = numberOrPointable
      } else {
        this.x = numberOrPointable
        this.y = number
      }

      return this
    }

    this.x = numberOrPointable.x
    this.y = numberOrPointable.y

    return this
  }

  add(numberOrPointable: number | Pointable, number?: number): this {
    if (typeof numberOrPointable === 'number') {
      if (typeof number === 'undefined') {
        this.x += numberOrPointable
        this.y += numberOrPointable
      } else {
        this.x += numberOrPointable
        this.y += number
      }

      return this
    }

    this.x += numberOrPointable.x
    this.y += numberOrPointable.y

    return this
  }

  sub(numberOrPointable: number | Pointable, number?: number): this {
    if (typeof numberOrPointable === 'number') {
      if (typeof number === 'undefined') {
        this.x -= numberOrPointable
        this.y -= numberOrPointable
      } else {
        this.x -= numberOrPointable
        this.y -= number
      }

      return this
    }

    this.x -= numberOrPointable.x
    this.y -= numberOrPointable.y

    return this
  }

  mul(numberOrPointable: number | Pointable, number?: number): this {
    if (typeof numberOrPointable === 'number') {
      if (typeof number === 'undefined') {
        this.x *= numberOrPointable
        this.y *= numberOrPointable
      } else {
        this.x *= numberOrPointable
        this.y *= number
      }

      return this
    }

    this.x *= numberOrPointable.x
    this.y *= numberOrPointable.y

    return this
  }

  div(numberOrPointable: number | Pointable, number?: number): this {
    if (typeof numberOrPointable === 'number') {
      if (typeof number === 'undefined') {
        this.x /= numberOrPointable
        this.y /= numberOrPointable
      } else {
        this.x /= numberOrPointable
        this.y /= number
      }

      return this
    }

    this.x /= numberOrPointable.x
    this.y /= numberOrPointable.y

    return this
  }

  getAdd(numberOrPointable: number | Pointable, number?: number): Vec2 {
    if (typeof numberOrPointable === 'number') {
      if (typeof number === 'undefined') {
        return new Vec2(this.x + numberOrPointable, this.y + numberOrPointable)
      }

      return new Vec2(this.x + numberOrPointable, this.y + number)
    }

    return new Vec2(this.x + numberOrPointable.x, this.y + numberOrPointable.y)
  }

  getSub(numberOrPointable: number | Pointable, number?: number): Vec2 {
    if (typeof numberOrPointable === 'number') {
      if (typeof number === 'undefined') {
        return new Vec2(this.x - numberOrPointable, this.y - numberOrPointable)
      }

      return new Vec2(this.x - numberOrPointable, this.y - number)
    }

    return new Vec2(this.x - numberOrPointable.x, this.y - numberOrPointable.y)
  }

  getMul(numberOrPointable: number | Pointable, number?: number): Vec2 {
    if (typeof numberOrPointable === 'number') {
      if (typeof number === 'undefined') {
        return new Vec2(this.x * numberOrPointable, this.y * numberOrPointable)
      }

      return new Vec2(this.x * numberOrPointable, this.y * number)
    }

    return new Vec2(this.x * numberOrPointable.x, this.y * numberOrPointable.y)
  }

  getDiv(numberOrPointable: number | Pointable, number?: number): Vec2 {
    if (typeof numberOrPointable === 'number') {
      if (typeof number === 'undefined') {
        return new Vec2(this.x / numberOrPointable, this.y / numberOrPointable)
      }

      return new Vec2(this.x / numberOrPointable, this.y / number)
    }

    return new Vec2(this.x / numberOrPointable.x, this.y / numberOrPointable.y)
  }
}
