import { Cursor } from '@/Cursor/Cursor'
import { Keyboard } from '@/Keyboard/Keyboard'
import { Mouse } from '@/Mouse/Mouse'
import { Renderable } from '@/Renderer/Renderable'
import { Ticker } from '@/Ticker/Ticker'

/**
 * QratchAppOptions type.
 */
export type QratchAppOptions = {
  /**
   * ticker.
   */
  ticker: Ticker

  /**
   * renderer.
   */
  renderer: Renderable

  /**
   * mouse.
   */
  mouse: Mouse

  /**
   * cursor.
   */
  cursor: Cursor

  /**
   * keyboard.
   */
  keyboard: Keyboard
}
