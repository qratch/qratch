import { Rect } from '@/rectangle/Rect'

describe('Rect class test', () => {
  test('should construct with x and y', () => {
    expect(new Rect(0, 0, 32, 64)).toMatchObject({
      x: 0,
      y: 0,
      width: 32,
      height: 64,
    })
    expect(new Rect(32, 64, 128, 256)).toMatchObject({
      x: 32,
      y: 64,
      width: 128,
      height: 256,
    })
  })

  test('should construct with pos and size', () => {
    expect(new Rect({ x: 0, y: 0 }, { width: 32, height: 64 })).toMatchObject({
      x: 0,
      y: 0,
      width: 32,
      height: 64,
    })
    expect(
      new Rect(
        {
          x: 32,
          y: 64,
        },
        {
          width: 128,
          height: 256,
        }
      )
    ).toMatchObject({
      x: 32,
      y: 64,
      width: 128,
      height: 256,
    })
  })

  test('should copy method returns copy of the rect', () => {
    const r = new Rect(0, 0, 32, 32)

    expect(r.copy() === r).toBeFalsy()
  })

  test('should area method returns area of the rect', () => {
    expect(new Rect(0, 0, 32, 4).area()).toBe(128)
    expect(new Rect(32, 128, 32, 4).area()).toBe(128)
  })

  test('should leftTop method returns left-top point', () => {
    expect(new Rect(16, 32, 32, 32).leftTop()).toMatchObject({
      x: 16,
      y: 32,
    })
    expect(new Rect(-32, 32, 32, 32).leftTop()).toMatchObject({
      x: -32,
      y: 32,
    })
  })

  test('should leftBottom method returns left-bottom point', () => {
    expect(new Rect(16, 32, 32, 32).leftBottom()).toMatchObject({
      x: 16,
      y: 64,
    })
    expect(new Rect(-32, 32, 32, 32).leftBottom()).toMatchObject({
      x: -32,
      y: 64,
    })
  })

  test('should rightTop method returns right-top point', () => {
    expect(new Rect(16, 32, 32, 32).rightTop()).toMatchObject({
      x: 48,
      y: 32,
    })
    expect(new Rect(-32, 32, 32, 32).rightTop()).toMatchObject({
      x: 0,
      y: 32,
    })
  })

  test('should rightBottom method returns right-bottom point', () => {
    expect(new Rect(16, 32, 32, 32).rightBottom()).toMatchObject({
      x: 48,
      y: 64,
    })
    expect(new Rect(-32, 32, 32, 32).rightBottom()).toMatchObject({
      x: 0,
      y: 64,
    })
  })
})
