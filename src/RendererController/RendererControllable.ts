import { Fontable } from '@/Font/Fontable'
import { Pointable } from '@/Pointable/Pointable'
import { RenderImage } from '@/Renderer/RenderImage'
import { RenderLineCap } from '@/Renderer/RenderLineCap'
import { RenderStyle } from '@/Renderer/RenderStyle'
import { RenderTextAlign } from '@/Renderer/RenderTextAlign'
import { Sizeable } from '@/Size/Sizeable'

/**
 * RendererControllable interface.
 */
export interface RendererControllable {
  /**
   * draw filled rect.
   *
   * @param pos pos.
   * @param size size.
   * @param style style.
   */
  fillRect(pos: Pointable, size: Sizeable, style: RenderStyle): void

  /**
   * draw filled rect.
   *
   * @param pos pos.
   * @param width width.
   * @param height height.
   * @param style style.
   */
  fillRect(
    pos: Pointable,
    width: number,
    height: number,
    style: RenderStyle
  ): void

  /**
   * draw filled rect.
   *
   * @param x x.
   * @param y y.
   * @param size size.
   * @param style style.
   */
  fillRect(x: number, y: number, size: Sizeable, style: RenderStyle): void

  /**
   * draw filled rect.
   *
   * @param x x.
   * @param y y.
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
   * draw stroked rect.
   *
   * @param pos pos.
   * @param size size.
   * @param style style.
   */
  strokeRect(pos: Pointable, size: Sizeable, style: RenderStyle): void

  /**
   * draw stroked rect.
   *
   * @param pos pos.
   * @param width width.
   * @param height height.
   * @param style style.
   */
  strokeRect(
    pos: Pointable,
    width: number,
    height: number,
    style: RenderStyle
  ): void

  /**
   * draw stroked rect.
   *
   * @param x x.
   * @param y y.
   * @param size size.
   * @param style style.
   */
  strokeRect(x: number, y: number, size: Sizeable, style: RenderStyle): void

  /**
   * draw stroked rect.
   *
   * @param x x.
   * @param y y.
   * @param width width.
   * @param height height.
   * @param style style.
   */
  strokeRect(
    x: number,
    y: number,
    width: number,
    height: number,
    style: RenderStyle
  ): void

  /**
   * draw line.
   *
   * @param p1 p1.
   * @param p2 p2.
   * @param style style.
   * @param lineWidth lineWidth.
   * @param lineCap lineCap.
   */
  line(
    p1: Pointable,
    p2: Pointable,
    style: RenderStyle,
    lineWidth: number,
    lineCap: RenderLineCap
  ): void

  /**
   * draw line.
   *
   * @param p1 p1.
   * @param x2 x2.
   * @param y2 y2.
   * @param style style.
   * @param lineWidth lineWidth.
   * @param lineCap lineCap.
   */
  line(
    p1: Pointable,
    x2: number,
    y2: number,
    style: RenderStyle,
    lineWidth: number,
    lineCap: RenderLineCap
  ): void

  /**
   * draw line.
   *
   * @param x1 x1.
   * @param y1 y1.
   * @param p2 p2.
   * @param style style.
   * @param lineWidth lineWidth.
   * @param lineCap lineCap.
   */
  line(
    x1: number,
    y1: number,
    p2: Pointable,
    style: RenderStyle,
    lineWidth: number,
    lineCap: RenderLineCap
  ): void

  /**
   * draw line.
   *
   * @param x1 x1.
   * @param y1 y1.
   * @param x2 x2.
   * @param y2 y2.
   * @param style style.
   * @param lineWidth lineWidth.
   * @param lineCap lineCap.
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
   * @param pos pos.
   * @param radius radius.
   * @param startAngle startAngle.
   * @param endAngle endAngle.
   * @param anticlockwise anticlockwise.
   * @param style style.
   */
  fillArc(
    pos: Pointable,
    radius: number,
    startAngle: number,
    endAngle: number,
    anticlockwise: boolean,
    style: RenderStyle
  ): void

  /**
   * draw filled arc.
   *
   * @param x x.
   * @param y y.
   * @param radius radius.
   * @param startAngle startAngle.
   * @param endAngle endAngle.
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
   * @param pos pos.
   * @param radius radius.
   * @param startAngle startAngle.
   * @param endAngle endAngle.
   * @param anticlockwise anticlockwise.
   * @param style style.
   */
  strokeArc(
    pos: Pointable,
    radius: number,
    startAngle: number,
    endAngle: number,
    anticlockwise: boolean,
    style: RenderStyle
  ): void

  /**
   * draw stroked arc.
   *
   * @param x x.
   * @param y y.
   * @param radius radius.
   * @param startAngle startAngle.
   * @param endAngle endAngle.
   * @param anticlockwise anticlockwise.
   * @param style style.
   */
  strokeArc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    anticlockwise: boolean,
    style: RenderStyle
  ): void

  /**
   * draw filled polygon.
   *
   * @param pos pos.
   * @param radius radius.
   * @param corners corners.
   * @param startAngle startAngle.
   * @param style style.
   */
  fillPolygon(
    pos: Pointable,
    radius: number,
    corners: number,
    startAngle: number,
    style: RenderStyle
  ): void

  /**
   * draw filled polygon.
   *
   * @param x x.
   * @param y y.
   * @param radius radius.
   * @param corners corners.
   * @param startAngle startAngle.
   * @param style style.
   */
  fillPolygon(
    x: number,
    y: number,
    radius: number,
    corners: number,
    startAngle: number,
    style: RenderStyle
  ): void

  /**
   * draw stroked polygon.
   *
   * @param pos pos.
   * @param radius radius.
   * @param corners corners.
   * @param startAngle startAngle.
   * @param style style.
   */
  strokePolygon(
    pos: Pointable,
    radius: number,
    corners: number,
    startAngle: number,
    style: RenderStyle
  ): void

  /**
   * draw stroked polygon.
   *
   * @param x x.
   * @param y y.
   * @param radius radius.
   * @param corners corners.
   * @param startAngle startAngle.
   * @param style style.
   */
  strokePolygon(
    x: number,
    y: number,
    radius: number,
    corners: number,
    startAngle: number,
    style: RenderStyle
  ): void

  /**
   * draw filled text.
   *
   * @param text text.
   * @param pos pos.
   * @param font font.
   * @param textAlign textAlign.
   * @param style style.
   */
  fillText(
    text: string,
    pos: Pointable,
    font: Fontable,
    textAlign: RenderTextAlign,
    style: RenderStyle
  ): void

  /**
   * draw filled text.
   *
   * @param text text.
   * @param pos pos.
   * @param font font.
   * @param size size.
   * @param textAlign textAlign.
   * @param style style.
   */
  fillText(
    text: string,
    pos: Pointable,
    font: string,
    size: number,
    textAlign: RenderTextAlign,
    style: RenderStyle
  ): void

  /**
   * draw filled text.
   *
   * @param text text.
   * @param x x.
   * @param y y.
   * @param font font.
   * @param textAlign textAlign.
   * @param style style.
   */
  fillText(
    text: string,
    x: number,
    y: number,
    font: Fontable,
    textAlign: RenderTextAlign,
    style: RenderStyle
  ): void

  /**
   * draw filled text.
   *
   * @param text text.
   * @param x x.
   * @param y y.
   * @param font font.
   * @param size size.
   * @param textAlign textAlign.
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
   * draw stroked text.
   *
   * @param text text.
   * @param pos pos.
   * @param font font.
   * @param textAlign textAlign.
   * @param style style.
   */
  strokeText(
    text: string,
    pos: Pointable,
    font: Fontable,
    textAlign: RenderTextAlign,
    style: RenderStyle
  ): void

  /**
   * draw stroked text.
   *
   * @param text text.
   * @param pos pos.
   * @param font font.
   * @param size size.
   * @param textAlign textAlign.
   * @param style style.
   */
  strokeText(
    text: string,
    pos: Pointable,
    font: string,
    size: number,
    textAlign: RenderTextAlign,
    style: RenderStyle
  ): void

  /**
   * draw stroked text.
   *
   * @param text text.
   * @param x x.
   * @param y y.
   * @param font font.
   * @param textAlign textAlign.
   * @param style style.
   */
  strokeText(
    text: string,
    x: number,
    y: number,
    font: Fontable,
    textAlign: RenderTextAlign,
    style: RenderStyle
  ): void

  /**
   * draw stroked text.
   *
   * @param text text.
   * @param x x.
   * @param y y.
   * @param font font.
   * @param size size.
   * @param textAlign textAlign.
   * @param style style.
   */
  strokeText(
    text: string,
    x: number,
    y: number,
    font: string,
    size: number,
    textAlign: RenderTextAlign,
    style: RenderStyle
  ): void

  /**
   * draw image.
   *
   * @param img img.
   * @param pos pos.
   * @param size size.
   */
  img(img: RenderImage, pos: Pointable, size?: Sizeable): void

  /**
   * draw image.
   *
   * @param img img.
   * @param pos pos.
   * @param width width.
   * @param height height.
   */
  img(img: RenderImage, pos: Pointable, width?: number, height?: number): void

  /**
   * draw image.
   *
   * @param img img.
   * @param x x.
   * @param y y.
   * @param size size.
   */
  img(img: RenderImage, x: number, y: number, size?: Sizeable): void

  /**
   * draw image.
   *
   * @param img img.
   * @param x x.
   * @param y y.
   * @param width width.
   * @param height height.
   */
  img(
    img: RenderImage,
    x: number,
    y: number,
    width?: number,
    height?: number
  ): void
}
