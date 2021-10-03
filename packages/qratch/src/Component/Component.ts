/**
 * Component interface.
 */
export interface Component {
  /**
   * call on component installed.
   */
  onInstall?(): void

  /**
   * call on application initialization.
   */
  onInit?(): void

  /**
   * call on frame ticker started.
   */
  onFrameTickerStart?(): void

  /**
   * call on frame start.
   */
  onFrameStart?(): void

  /**
   * call on frame end.
   */
  onFrameEnd?(): void
}
