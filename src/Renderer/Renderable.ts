import { Component } from '@/Component/Component'
import { RenderImage } from './RenderImage'
import { RenderLineCap } from './RenderLineCap'
import { RenderPolygonPoint } from './RenderPolygonPoint'
import { RenderStyle } from './RenderStyle'
import { RenderTextAlign } from './RenderTextAlign'
import { RenderTextBaseline } from './RenderTextBaseline'

/**
 * Renderable interface.
 */
export interface Renderable extends Component {
  /**
   * display width.
   */
  readonly width: number

  /**
   * display height.
   */
  readonly height: number

  /**
   * draw filled rectangle.
   *
   * @param x x position.
   * @param y y position.
   * @param width width.
   * @param height height.
   * @param style style.
   */
  fillRect(
    x: number,
    y: number,
    width: number,
    height: number,
    style: RenderStyle
  ): void

  /**
   * draw stroked rectangle.
   *
   * @param x x position.
   * @param y y position.
   * @param width width.
   * @param height height.
   * @param lineWidth line width.
   * @param style style.
   */
  strokeRect(
    x: number,
    y: number,
    width: number,
    height: number,
    lineWidth: number,
    style: RenderStyle
  ): void

  /**
   * draw line.
   *
   * @param x1 x1 position.
   * @param y1 y1 position.
   * @param x2 x2 position.
   * @param y2 y2 position.
   * @param lineWidth line width.
   * @param lineCap line cap.
   * @param style style.
   */
  line(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    lineWidth: number,
    lineCap: RenderLineCap,
    style: RenderStyle
  ): void

  /**
   * draw filled arc.
   *
   * @param x x position.
   * @param y y position.
   * @param radius radius.
   * @param startAngle start angle.
   * @param endAngle end angle.
   * @param style style.
   * @param anticlockwise anticlockwise.
   */
  fillArc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    style: RenderStyle,
    anticlockwise?: boolean
  ): void

  /**
   * draw stroked arc.
   *
   * @param x x position.
   * @param y y position.
   * @param radius radius.
   * @param startAngle start angle.
   * @param endAngle end angle.
   * @param lineWidth line width.
   * @param style style.
   * @param anticlockwise anticlockwise.
   */
  strokeArc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    lineWidth: number,
    style: RenderStyle,
    anticlockwise?: boolean
  ): void

  /**
   * draw filled arc.
   *
   * @param x x position.
   * @param y y position.
   * @param radiusX radius x.
   * @param radiusY radius y.
   * @param rotation rotation.
   * @param startAngle start angle.
   * @param endAngle end angle.
   * @param style style.
   * @param anticlockwise anticlockwise.
   */
  fillEllipse(
    x: number,
    y: number,
    radiusX: number,
    radiusY: number,
    rotation: number,
    startAngle: number,
    endAngle: number,
    style: RenderStyle,
    anticlockwise?: boolean
  ): void

  /**
   * draw stroked arc.
   *
   * @param x x position.
   * @param y y positionPointable.
   * @param radiusX radius x.
   * @param radiusY radius y.
   * @param rotation rotation.
   * @param startAngle start angle.
   * @param endAngle end angle.
   * @param lineWidth line width.
   * @param style style.
   * @param anticlockwise anticlockwise.
   */
  strokeEllipse(
    x: number,
    y: number,
    radiusX: number,
    radiusY: number,
    rotation: number,
    startAngle: number,
    endAngle: number,
    lineWidth: number,
    style: RenderStyle,
    anticlockwise?: boolean
  ): void

  /**
   * draw filled polygon.
   *
   * @param points points.
   * @param style style.
   */
  fillPolygon(points: RenderPolygonPoint[], style: RenderStyle): void

  /**
   * draw filled polygon.
   *
   * @param points points.
   * @param lineWidth line width.
   * @param style style.
   */
  strokePolygon(
    points: RenderPolygonPoint[],
    lineWidth: number,
    style: RenderStyle
  ): void

  /**
   * draw filled text.
   *
   * @param text text.
   * @param x x position.
   * @param y y position.
   * @param style style.
   * @param font font.
   * @param textAlign align.
   * @param textBaseline baseline.
   */
  fillText(
    text: string,
    x: number,
    y: number,
    style: RenderStyle,
    font?: string,
    textAlign?: RenderTextAlign,
    textBaseline?: RenderTextBaseline
  ): void

  /**
   * draw filled text.
   *
   * @param text text.
   * @param x x position.
   * @param y y position.
   * @param style style.
   * @param font font.
   * @param textAlign align.
   * @param lineWidth line width.
   */
  strokeText(
    text: string,
    x: number,
    y: number,
    style: RenderStyle,
    font: string,
    textAlign: RenderTextAlign,
    lineWidth: number
  ): void

  /**
   * draw image.
   *
   * @param image image to draw.
   * @param x position.
   * @param y position.
   * @param width width.
   * @param height height.
   */
  img(
    image: RenderImage,
    x: number,
    y: number,
    width?: number,
    height?: number
  ): void
}
