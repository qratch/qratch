/**
 * Component interface.
 */
export interface Component {
  /**
   * call on frame start.
   */
  onFrameStart?: () => void

  /**
   * call on frame end.
   */
  onFrameEnd?: () => void
}
