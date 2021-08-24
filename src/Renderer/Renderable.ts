import { Component } from '@/Component/Component'
import { RenderImage } from './RenderImage'
import { RenderLineCap } from './RenderLineCap'
import { RenderStyle } from './RenderStyle'
import { RenderTextAlign } from './RenderTextAlign'

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
   * @param innerLineWidth inner line width.
   * @param outerLineWidth outer line width.
   * @param style style.
   */
  strokeRect(
    x: number,
    y: number,
    width: number,
    height: number,
    innerLineWidth: number,
    outerLineWidth: number,
    style: RenderStyle
  ): void

  /**
   * draw line.
   *
   * @param x1 x1 position.
   * @param y1 y1 position.
   * @param x2 x2 position.
   * @param y2 y2 position.
   * @param style style.
   * @param lineWidth line width.
   * @param lineCap line cap.
   */
  line(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    style: RenderStyle,
    lineWidth: number,
    lineCap: RenderLineCap
  ): void

  /**
   * draw filled arc.
   *
   * @param x x position.
   * @param y y position.
   * @param radius radius.
   * @param startAngle start angle.
   * @param endAngle end angle.
   * @param anticlockwise anticlockwise.
   * @param style style.
   */
  fillArc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    anticlockwise: boolean,
    style: RenderStyle
  ): void

  /**
   * draw stroked arc.
   *
   * @param x x position.
   * @param y y position.
   * @param radius radius.
   * @param startAngle start angle.
   * @param endAngle end angle.
   * @param anticlockwise anticlockwise.
   * @param innerLineWidth inner line width.
   * @param outerLineWidth outer line width.
   * @param style style.
   */
  strokeArc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    anticlockwise: boolean,
    innerLineWidth: number,
    outerLineWidth: number,
    style: RenderStyle
  ): void

  /**
   * draw filled polygon.
   *
   * @param x x position.
   * @param y y position.
   * @param radius radius.
   * @param corners corners.
   * @param offsetAngle offset angle.
   * @param style style.
   */
  fillPolygon(
    x: number,
    y: number,
    radius: number,
    corners: number,
    offsetAngle: number,
    style: RenderStyle
  ): void

  /**
   * draw filled polygon.
   *
   * @param x x position.
   * @param y y position.
   * @param radius radius.
   * @param corners corners.
   * @param offsetAngle offset angle.
   * @param style style.
   */
  strokePolygon(
    x: number,
    y: number,
    radius: number,
    corners: number,
    offsetAngle: number,
    innerLineWidth: number,
    outerLineWidth: number,
    style: RenderStyle
  ): void

  /**
   * draw filled text.
   *
   * @param text text.
   * @param x x position.
   * @param y y position.
   * @param font font.
   * @param size size.
   * @param textAlign align.
   * @param style style.
   */
  fillText(
    text: string,
    x: number,
    y: number,
    font: string,
    size: number,
    textAlign: RenderTextAlign,
    style: RenderStyle
  ): void

  /**
   * draw filled text.
   *
   * @param text text.
   * @param x x position.
   * @param y y position.
   * @param font font.
   * @param size size.
   * @param textAlign align.
   * @param innerLineWidth inner line width.
   * @param outerLineWidth outer line width.
   * @param style style.
   */
  strokeText(
    text: string,
    x: number,
    y: number,
    font: string,
    size: number,
    textAlign: RenderTextAlign,
    innerLineWidth: number,
    outerLineWidth: number,
    style: RenderStyle
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
