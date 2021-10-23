import { Move } from '@/Move'

class P extends Move<P> {
  constructor(public x: number, public y: number) {
    super()
  }

  copy() {
    return new P(this.x, this.y)
  }
}

describe('Move class test', () => {
  test('should move position', () => {
    expect(new P(0, 0).moveBy(32, 128)).toMatchObject({
      x: 32,
      y: 128,
    })

    expect(
      new P(-32, 128).moveBy({
        x: 32,
        y: -128,
      })
    ).toMatchObject({
      x: 0,
      y: 0,
    })
  })

  test('should returns mvoed instance that copy of the instance.', () => {
    const p0 = new P(0, 0)
    const m0 = p0.movedBy(32, 128)

    expect(m0).toMatchObject({
      x: 32,
      y: 128,
    })
    expect(p0 === m0).toBeFalsy()

    const p1 = new P(-32, 128)
    const m1 = p1.movedBy({
      x: 32,
      y: -128,
    })

    expect(m1).toMatchObject({
      x: 0,
      y: 0,
    })
    expect(p1 === m1).toBeFalsy()
  })
})
