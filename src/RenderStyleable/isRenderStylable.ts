import { RenderStylable } from './RenderStylable'

/**
 * returns whether the given value is a `RenderStylable` object.
 *
 * @param value value to check.
 */
// eslint-disable-next-line
export const isRenderStylable = (value: any): value is RenderStylable => {
  if (typeof value === 'undefined') {
    return false
  }

  return typeof value['toRenderStyle'] === 'function'
}
