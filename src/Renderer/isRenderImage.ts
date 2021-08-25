/**
 * returns whether the given value is a `RenderImage` object.
 *
 * @param value value to check.
 */

import { RenderImage } from './RenderImage'

// eslint-disable-next-line
export const isRenderImage = (value: any): value is RenderImage => {
  if (
    value instanceof Image ||
    value instanceof HTMLCanvasElement ||
    value instanceof HTMLVideoElement ||
    value instanceof ImageBitmap
  ) {
    return true
  }

  if (typeof OffscreenCanvas !== 'undefined') {
    return value instanceof OffscreenCanvas
  }

  return false
}
