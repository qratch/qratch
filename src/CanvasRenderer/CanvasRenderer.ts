import { Renderable } from '@/Renderer/Renderable'
import { RenderLineCap } from '@/Renderer/RenderLineCap'
import { RenderTextAlign } from '@/Renderer/RenderTextAlign'

/**
 * CanvasRenderer class.
 */
export class CanvasRenderer implements Renderable {
  /**
   * canvas element.
   */
  private readonly canvas: HTMLCanvasElement

  /**
   * canvas context.
   */
  private readonly context: CanvasRenderingContext2D

  get width(): number {
    return this.canvas.width
  }

  get height(): number {
    return this.canvas.height
  }

  /**
   * CanvasRenderer constructor.
   *
   * @param canvas render to canvas.
   * @param y2 y2 position.
   * @param lineWidth line width.
   * @param lineCap line cap.
   * @param style style.
   */
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas

    const context = this.canvas.getContext('2d')

    if (!context) {
      throw new TypeError('Could not get CanvasRenderingContext2D.')
    }

    this.context = context
  }

  fillRect(
    x: number,
    y: number,
    width: number,
    height: number,
    style: string
  ): void {
    this.context.fillStyle = style
    this.context.fillRect(x, y, width, height)
  }

  strokeRect(
    x: number,
    y: number,
    width: number,
    height: number,
    lineWidth: number,
    style: string
  ): void {
    this.context.lineWidth = lineWidth
    this.context.strokeStyle = style

    this.context.strokeRect(x, y, width, height)
  }

  line(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    lineWidth: number,
    lineCap: RenderLineCap,
    style: string
  ): void {
    this.context.lineWidth = lineWidth
    this.context.strokeStyle = style

    this.context.moveTo(x1, y1)
    this.context.lineTo(x2, y2)
  }

  fillArc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    style: string,
    anticlockwise?: boolean
  ): void {
    this.context.fillStyle = style

    this.context.arc(x, y, radius, startAngle, endAngle, anticlockwise)
    this.context.fill
  }

  strokeArc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    lineWidth: number,
    style: string,
    anticlockwise?: boolean
  ): void {
    this.context.strokeStyle = style
    this.context.lineWidth = lineWidth

    this.context.arc(x, y, radius, startAngle, endAngle, anticlockwise)
  }

  fillPolygon(
    x: number,
    y: number,
    radius: number,
    corners: number,
    offsetAngle: number,
    style: string
  ): void {
    throw new Error('Method not implemented.')
  }

  strokePolygon(
    x: number,
    y: number,
    radius: number,
    corners: number,
    offsetAngle: number,
    lineWidth: number,
    style: string
  ): void {
    throw new Error('Method not implemented.')
  }

  fillText(
    text: string,
    x: number,
    y: number,
    font: string,
    size: number,
    textAlign: RenderTextAlign,
    style: string
  ): void {
    throw new Error('Method not implemented.')
  }

  strokeText(
    text: string,
    x: number,
    y: number,
    font: string,
    size: number,
    textAlign: RenderTextAlign,
    lineWidth: number,
    style: string
  ): void {
    this.context.strokeStyle = style
  }

  img(
    image: CanvasImageSource,
    x: number,
    y: number,
    width?: number,
    height?: number
  ): void {
    throw new Error('Method not implemented.')
  }
}
