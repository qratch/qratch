import { isPointable } from '@/Pointable/isPointable'

describe('isPointable test', () => {
  test('should return true', () => {
    expect(isPointable({ x: 0, y: 0 })).toBeTruthy()
    expect(isPointable({ x: 0, y: 0, z: 10 })).toBeTruthy()
  })

  test('should return false', () => {
    expect(isPointable({ x: 0 })).toBeFalsy()
    expect(isPointable({ x: 0, z: 10 })).toBeFalsy()
    expect(isPointable({ x: '', y: false })).toBeFalsy()
  })
})
