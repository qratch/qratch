import { Vec2 } from '@/Vec2/Vec2'

describe('Vec2 test', () => {
  test('Vec2#constructor', () => {
    expect(new Vec2(10, 20)).toMatchObject({ x: 10, y: 20 })
    expect(new Vec2(30)).toMatchObject({ x: 30, y: 30 })
    expect(new Vec2({ x: 1, y: 2 })).toMatchObject({ x: 1, y: 2 })
  })
})
