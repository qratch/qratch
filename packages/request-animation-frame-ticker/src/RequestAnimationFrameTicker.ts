import { Ticker } from 'qratch'

/**
 * RequestAnimationFrameTicker class.
 */
export class RequestAnimationFrameTicker implements Ticker {
  /**
   * callback array.
   */
  private readonly callbacks: (() => void)[] = []

  /**
   * current frames count.
   */
  private currentFrames = 0

  /**
   * target FPS
   */
  private targetFPS = 60

  addCallback(callback: () => void): void {
    this.callbacks.push(callback)
  }

  start(): void {
    let lastTimestamp = 0

    const frame: FrameRequestCallback = (timestamp) => {
      if (this.targetFPS !== 60) {
        const elapsed = (timestamp - lastTimestamp) / 1000
        const frameTime = 1 / this.targetFPS

        // adjust FPS.
        if (elapsed <= frameTime) {
          requestAnimationFrame(frame)
          return
        }
      }

      lastTimestamp = timestamp

      ++this.currentFrames

      // execute all callbacks.
      this.callbacks.forEach((c) => c())

      requestAnimationFrame(frame)
    }

    requestAnimationFrame(frame)
  }

  frames(): number {
    return this.currentFrames
  }

  setTargetFPS(fps: number): void {
    this.targetFPS = Math.max(Math.min(60, fps), 1)
  }

  getTargetFPS(): number {
    return this.targetFPS
  }
}
