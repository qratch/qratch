import { Cursor } from '@/Cursor/Cursor'
import { CursorStyle } from '@/Cursor/CursorStyle'
import { Pointable } from '@/Pointable/Pointable'

/**
 * HTMLElementCursor class.
 */
export class HTMLElementCursor implements Cursor {
  private dx = 0
  private dy = 0

  private mx = 0
  private my = 0

  get x(): number {
    return this.mx
  }

  get y(): number {
    return this.my
  }

  /**
   * HTMLElementCursor constructor.
   *
   * @param element HTML element.
   */
  constructor(private readonly element: HTMLElement) {
    element.addEventListener('mousemove', (event) => {
      const rect = element.getBoundingClientRect()

      this.dx = this.mx
      this.dy = this.my

      this.mx = event.clientX - rect.left
      this.my = event.clientY - rect.top
    })
  }

  delta(): Pointable {
    return {
      x: this.mx - this.dx,
      y: this.my - this.dy,
    }
  }

  setStyle(style: CursorStyle): this {
    this.element.style.cursor = style

    return this
  }

  getStyle(): CursorStyle {
    return ((this.element.style as unknown) as CursorStyle) || 'auto'
  }

  onFrameEnd(): void {
    this.dx = this.mx
    this.dy = this.my
  }
}
