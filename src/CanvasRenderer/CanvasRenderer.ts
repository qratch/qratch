import { Renderable } from '@/Renderer/Renderable'
import { RenderLineCap } from '@/Renderer/RenderLineCap'
import { RenderPolygonPoint } from '@/Renderer/RenderPolygonPoint'
import { RenderStyle } from '@/Renderer/RenderStyle'
import { RenderTextAlign } from '@/Renderer/RenderTextAlign'
import { RenderTextBaseline } from '@/Renderer/RenderTextBaseline'

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
    this.context.lineCap = lineCap

    this.context.beginPath()
    this.context.moveTo(x1, y1)
    this.context.lineTo(x2, y2)
    this.context.stroke()
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

    this.context.beginPath()
    this.context.arc(x, y, radius, startAngle, endAngle, anticlockwise)
    this.context.fill()
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

    this.context.beginPath()
    this.context.arc(x, y, radius, startAngle, endAngle, anticlockwise)
    this.context.stroke()
  }

  fillEllipse(
    x: number,
    y: number,
    radiusX: number,
    radiusY: number,
    rotation: number,
    startAngle: number,
    endAngle: number,
    style: string,
    anticlockwise?: boolean
  ): void {
    this.context.fillStyle = style

    this.context.beginPath()
    this.context.ellipse(
      x,
      y,
      radiusX,
      radiusY,
      rotation,
      startAngle,
      endAngle,
      anticlockwise
    )
    this.context.fill()
  }

  strokeEllipse(
    x: number,
    y: number,
    radiusX: number,
    radiusY: number,
    rotation: number,
    startAngle: number,
    endAngle: number,
    lineWidth: number,
    style: string,
    anticlockwise?: boolean
  ): void {
    this.context.lineWidth = lineWidth
    this.context.strokeStyle = style

    this.context.beginPath()
    this.context.ellipse(
      x,
      y,
      radiusX,
      radiusY,
      rotation,
      startAngle,
      endAngle,
      anticlockwise
    )
    this.context.stroke()
  }

  fillPolygon(points: RenderPolygonPoint[], style: string): void {
    this.context.fillStyle = style

    this.polygon(points)
    this.context.fill()
  }

  strokePolygon(
    points: RenderPolygonPoint[],
    lineWidth: number,
    style: string
  ): void {
    this.context.lineWidth = lineWidth
    this.context.fillStyle = style

    this.polygon(points)
    this.context.fill()
  }

  private polygon([first, ...points]: RenderPolygonPoint[]) {
    this.context.beginPath()
    this.context.moveTo(first[0], first[1])

    for (const point of points) {
      this.context.lineTo(point[0], point[1])
    }

    this.context.closePath()
  }

  fillText(
    text: string,
    x: number,
    y: number,
    style: RenderStyle,
    maxWidth?: number,
    font?: string,
    textAlign?: RenderTextAlign,
    textBaseline?: RenderTextBaseline
  ): void {
    this.context.fillStyle = style
    this.context.textAlign = textAlign ?? this.context.textAlign
    this.context.textBaseline = textBaseline ?? this.context.textBaseline
    this.context.font = font ?? this.context.font

    this.context.fillText(text, x, y, maxWidth)
  }

  strokeText(
    text: string,
    x: number,
    y: number,
    lineWidth: number,
    style: RenderStyle,
    maxWidth?: number,
    font?: string,
    textAlign?: RenderTextAlign,
    textBaseline?: RenderTextBaseline
  ): void {
    this.context.lineWidth = lineWidth
    this.context.strokeStyle = style
    this.context.textAlign = textAlign ?? this.context.textAlign
    this.context.textBaseline = textBaseline ?? this.context.textBaseline
    this.context.font = font ?? this.context.font

    this.context.strokeText(text, x, y, maxWidth)
  }

  img(
    image: CanvasImageSource,
    x: number,
    y: number,
    width?: number,
    height?: number
  ): void {
    if (typeof width === 'number' && typeof height === 'number') {
      this.context.drawImage(image, x, y, width, height)

      return
    }

    this.context.drawImage(image, x, y)
  }
}
