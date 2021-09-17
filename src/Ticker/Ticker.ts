import { Component } from '@/Component/Component'

/**
 * Ticker interface.
 */
export interface Ticker extends Component {
  /**
   * add callback funciton.
   *
   * @param callback callback function.
   */
  addCallback(callback: () => void): void

  /**
   * start ticker.
   */
  start(): void

  /**
   * returns current frames count.
   */
  frames(): number

  /**
   * set target FPS.
   *
   * @param fps target FPS.
   */
  setTargetFPS(fps: number): void

  /**
   * returns target FPS.
   */
  getTargetFPS(): number
}
