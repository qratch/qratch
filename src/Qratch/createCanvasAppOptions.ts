import { CanvasRenderer } from '@/CanvasRenderer/CanvasRenderer'
import { HTMLElementCursor } from '@/HTMLElementCursor/HTMLElementCursor'
import { HTMLElementKeyboard } from '@/HTMLElementKeyboard/HTMLElementKeyboard'
import { HTMLElementMouse } from '@/HTMLElementMouse/HTMLElementMouse'
import { RequestAnimationFrameTicker } from '@/RequestAnimationFrameTicker/RequestAnimationFrameTicker'
import { QratchAppOptions } from './QratchAppOptions'

/**
 * create `QratchAppOptions` object from given canvas.
 *
 * @param canvas canvas element.
 */
export const createCanvasAppOptions = (
  canvas: HTMLCanvasElement
): QratchAppOptions => {
  return {
    ticker: new RequestAnimationFrameTicker(),
    renderer: new CanvasRenderer(canvas),
    mouse: new HTMLElementMouse(canvas),
    cursor: new HTMLElementCursor(canvas),
    keyboard: new HTMLElementKeyboard(canvas),
  }
}
