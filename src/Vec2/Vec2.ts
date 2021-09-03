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


// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  constructor(...args: any[]) {
  if (isPointable(args[0])) {
this.x = args[0].x ?? 0
this.y = args[0].y ?? 0

return this
  }
  if (typeof args[0] === 'number' && typeof args[1] === 'number') {
this.x = args[0] ?? 0
this.y = args[1] ?? 0

return this
  }
  if (typeof args[0] === 'number') {
this.x = args[0] ?? 0
this.y = args[0] ?? 0

return this
  }

    throw new TypeError(this.constructor.name + '.constructor: invalid arguments.')
  }

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  set(...args: any[]) {
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  add(...args: any[]) {
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  sub(...args: any[]) {
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  mul(...args: any[]) {
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  div(...args: any[]) {
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  getAdd(...args: any[]) {
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  getSub(...args: any[]) {
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  getMul(...args: any[]) {
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  getDiv(...args: any[]) {
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
