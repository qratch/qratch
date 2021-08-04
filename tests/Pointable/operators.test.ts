import {
  addPoints,
  divPoints,
  mulPoints,
  subPoints,
} from '@/Pointable/operators'
import { Pointable } from '@/Pointable/Pointable'

const case1: [Pointable, Pointable] = [
  { x: 5, y: 24 },
  { x: -17, y: 1 },
]

const case2: [Pointable, Pointable] = [
  { x: -15, y: -2 },
  { x: -26, y: 5 },
]

describe('Pointable operators test', () => {
  test('add points', () => {
    expect(addPoints(...case1)).toMatchObject({ x: -12, y: 25 })
    expect(addPoints(...case2)).toMatchObject({ x: -41, y: 3 })
  })

  test('subtract points', () => {
    expect(subPoints(...case1)).toMatchObject({ x: 22, y: 23 })
    expect(subPoints(...case2)).toMatchObject({ x: 11, y: -7 })
  })

  test('multiply points', () => {
    expect(mulPoints(...case1)).toMatchObject({ x: -85, y: 24 })
    expect(mulPoints(...case2)).toMatchObject({ x: 390, y: -10 })
  })

  test('division points', () => {
    expect(divPoints(...case1)).toMatchObject({ x: 5 / -17, y: 24 })
    expect(divPoints(...case2)).toMatchObject({ x: -15 / -26, y: -2 / 5 })
  })
})
