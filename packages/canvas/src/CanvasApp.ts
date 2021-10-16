import { QratchApp } from 'qratch'
import { RequestAnimationFrameTicker } from '@qratch/request-animation-frame-ticker'
import { CanvasRenderer } from '@qratch/canvas-renderer'
import { HTMLElementMouse } from '@qratch/html-element-mouse'
import { HTMLElementCursor } from '@qratch/html-element-cursor'
import { HTMLElementKeyboard } from '@qratch/html-element-keyboard'

/**
 * CanvasApp class.
 */
export abstract class CanvasApp extends QratchApp {
  constructor(canvas: HTMLCanvasElement) {
    super({
      ticker: new RequestAnimationFrameTicker(),
      renderer: new CanvasRenderer(canvas),
      mouse: new HTMLElementMouse(canvas),
      cursor: new HTMLElementCursor(canvas),
      keyboard: new HTMLElementKeyboard(canvas),
    })
  }

  abstract frame(): void
}
