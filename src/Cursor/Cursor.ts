import { Component } from '@/Component/Component'
import { Pointable } from '@/Pointable/Pointable'
import { CursorStyle } from './CursorStyle'

/**
 * Cursor interface.
 */
export interface Cursor extends Component {
  /**
   * x position.
   */
  readonly x: number

  /**
   * y position.
   */
  readonly y: number

  /**
   * returns the amount the cursor has moved since one frame ago.
   */
  delta(): Pointable

  /**
   * set cursor style.
   *
   * @param style style.
   */
  setStyle(style: CursorStyle): this

  /**
   * returns cursor style.
   */
  getStyle(): CursorStyle
}
