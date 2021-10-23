import { isPointable, Pointable } from '../../qratch/dist'
import { Movable } from './Movable'

/**
 * Move class(movable implementation).
 */
export abstract class Move<T extends Movable<T>>
  implements Movable<T>, Pointable
{
  abstract x: number

  abstract y: number

  abstract copy(): T

  moveBy(...args: [x: number, y: number] | [p: Pointable]): T {
    if (isPointable(args[0])) {
      this.x += args[0].x
      this.y += args[0].y
    } else if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      this.x += args[0]
      this.y += args[1]
    }

    return this as unknown as T
  }

  movedBy(...args: [x: number, y: number] | [p: Pointable]): T {
    const copy = this.copy()

    if (isPointable(args[0])) {
      copy.moveBy(args[0])
    } else if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      copy.moveBy(args[0], args[1])
    }

    return copy
  }
}
