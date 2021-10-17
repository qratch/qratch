import { Fontable } from '@/Font'
import { Pointable } from '@/Pointable'
import {
  RenderStyle,
  RenderLineCap,
  RenderPolygonPoint,
  RenderTextAlign,
  RenderTextBaseline,
  RenderImage,
} from '@/Renderer'
import { RenderStylable } from '@/RenderStyleable'
import { Sizeable } from '@/Sizeable'

/**
 * Drawable interface.
 */
export interface Drawable {
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
   * @param size size.
   * @param style style.
   */
  fillRect(pos: Pointable, size: Sizeable, style: RenderStylable): void

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
   * @param pos pos.
   * @param width width.
   * @param height height.
   * @param style style.
   */
  fillRect(
    pos: Pointable,
    width: number,
    height: number,
    style: RenderStylable
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
   * @param size size.
   * @param style style.
   */
  fillRect(x: number, y: number, size: Sizeable, style: RenderStylable): void

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
    style: RenderStylable
  ): void

  /**
   * draw stroked rect.
   *
   * @param pos pos.
   * @param size size.
   * @param lineWidth lineWidth.
   * @param style style.
   */
  strokeRect(
    pos: Pointable,
    size: Sizeable,
    lineWidth: number,
    style: RenderStyle
  ): void

  /**
   * draw stroked rect.
   *
   * @param pos pos.
   * @param size size.
   * @param lineWidth lineWidth.
   * @param style style.
   */
  strokeRect(
    pos: Pointable,
    size: Sizeable,
    lineWidth: number,
    style: RenderStylable
  ): void

  /**
   * draw stroked rect.
   *
   * @param pos pos.
   * @param width width.
   * @param height height.
   * @param lineWidth lineWidth.
   * @param style style.
   */
  strokeRect(
    pos: Pointable,
    width: number,
    height: number,
    lineWidth: number,
    style: RenderStyle
  ): void

  /**
   * draw stroked rect.
   *
   * @param pos pos.
   * @param width width.
   * @param height height.
   * @param lineWidth lineWidth.
   * @param style style.
   */
  strokeRect(
    pos: Pointable,
    width: number,
    height: number,
    lineWidth: number,
    style: RenderStylable
  ): void

  /**
   * draw stroked rect.
   *
   * @param x x.
   * @param y y.
   * @param size size.
   * @param lineWidth lineWidth.
   * @param style style.
   */
  strokeRect(
    x: number,
    y: number,
    size: Sizeable,
    lineWidth: number,
    style: RenderStyle
  ): void

  /**
   * draw stroked rect.
   *
   * @param x x.
   * @param y y.
   * @param size size.
   * @param lineWidth lineWidth.
   * @param style style.
   */
  strokeRect(
    x: number,
    y: number,
    size: Sizeable,
    lineWidth: number,
    style: RenderStylable
  ): void

  /**
   * draw stroked rect.
   *
   * @param x x.
   * @param y y.
   * @param width width.
   * @param height height.
   * @param lineWidth lineWidth.
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
   * draw stroked rect.
   *
   * @param x x.
   * @param y y.
   * @param width width.
   * @param height height.
   * @param lineWidth lineWidth.
   * @param style style.
   */
  strokeRect(
    x: number,
    y: number,
    width: number,
    height: number,
    lineWidth: number,
    style: RenderStylable
  ): void

  /**
   * draw line.
   *
   * @param p1 p1.
   * @param p2 p2.
   * @param lineWidth lineWidth.
   * @param lineCap lineCap.
   * @param style style.
   */
  line(
    p1: Pointable,
    p2: Pointable,
    lineWidth: number,
    lineCap: RenderLineCap,
    style: RenderStyle
  ): void

  /**
   * draw line.
   *
   * @param p1 p1.
   * @param p2 p2.
   * @param lineWidth lineWidth.
   * @param lineCap lineCap.
   * @param style style.
   */
  line(
    p1: Pointable,
    p2: Pointable,
    lineWidth: number,
    lineCap: RenderLineCap,
    style: RenderStylable
  ): void

  /**
   * draw line.
   *
   * @param p1 p1.
   * @param x2 x2.
   * @param y2 y2.
   * @param lineWidth lineWidth.
   * @param lineCap lineCap.
   * @param style style.
   */
  line(
    p1: Pointable,
    x2: number,
    y2: number,
    lineWidth: number,
    lineCap: RenderLineCap,
    style: RenderStyle
  ): void

  /**
   * draw line.
   *
   * @param p1 p1.
   * @param x2 x2.
   * @param y2 y2.
   * @param lineWidth lineWidth.
   * @param lineCap lineCap.
   * @param style style.
   */
  line(
    p1: Pointable,
    x2: number,
    y2: number,
    lineWidth: number,
    lineCap: RenderLineCap,
    style: RenderStylable
  ): void

  /**
   * draw line.
   *
   * @param x1 x1.
   * @param y1 y1.
   * @param p2 p2.
   * @param lineWidth lineWidth.
   * @param lineCap lineCap.
   * @param style style.
   */
  line(
    x1: number,
    y1: number,
    p2: Pointable,
    lineWidth: number,
    lineCap: RenderLineCap,
    style: RenderStyle
  ): void

  /**
   * draw line.
   *
   * @param x1 x1.
   * @param y1 y1.
   * @param p2 p2.
   * @param lineWidth lineWidth.
   * @param lineCap lineCap.
   * @param style style.
   */
  line(
    x1: number,
    y1: number,
    p2: Pointable,
    lineWidth: number,
    lineCap: RenderLineCap,
    style: RenderStylable
  ): void

  /**
   * draw line.
   *
   * @param x1 x1.
   * @param y1 y1.
   * @param x2 x2.
   * @param y2 y2.
   * @param lineWidth lineWidth.
   * @param lineCap lineCap.
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
   * draw line.
   *
   * @param x1 x1.
   * @param y1 y1.
   * @param x2 x2.
   * @param y2 y2.
   * @param lineWidth lineWidth.
   * @param lineCap lineCap.
   * @param style style.
   */
  line(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    lineWidth: number,
    lineCap: RenderLineCap,
    style: RenderStylable
  ): void

  /**
   * draw filled arc.
   *
   * @param pos pos.
   * @param radius radius.
   * @param startAngle startAngle.
   * @param endAngle endAngle.
   * @param style style.
   * @param anticlockwise anticlockwise.
   */
  fillArc(
    pos: Pointable,
    radius: number,
    startAngle: number,
    endAngle: number,
    style: RenderStyle,
    anticlockwise?: boolean
  ): void

  /**
   * draw filled arc.
   *
   * @param pos pos.
   * @param radius radius.
   * @param startAngle startAngle.
   * @param endAngle endAngle.
   * @param style style.
   * @param anticlockwise anticlockwise.
   */
  fillArc(
    pos: Pointable,
    radius: number,
    startAngle: number,
    endAngle: number,
    style: RenderStylable,
    anticlockwise?: boolean
  ): void

  /**
   * draw filled arc.
   *
   * @param x x.
   * @param y y.
   * @param radius radius.
   * @param startAngle startAngle.
   * @param endAngle endAngle.
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
   * draw filled arc.
   *
   * @param x x.
   * @param y y.
   * @param radius radius.
   * @param startAngle startAngle.
   * @param endAngle endAngle.
   * @param style style.
   * @param anticlockwise anticlockwise.
   */
  fillArc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    style: RenderStylable,
    anticlockwise?: boolean
  ): void

  /**
   * draw stroked arc.
   *
   * @param pos pos.
   * @param radius radius.
   * @param startAngle startAngle.
   * @param endAngle endAngle.
   * @param lineWidth lineWidth.
   * @param style style.
   * @param anticlockwise anticlockwise.
   */
  strokeArc(
    pos: Pointable,
    radius: number,
    startAngle: number,
    endAngle: number,
    lineWidth: number,
    style: RenderStyle,
    anticlockwise?: boolean
  ): void

  /**
   * draw stroked arc.
   *
   * @param pos pos.
   * @param radius radius.
   * @param startAngle startAngle.
   * @param endAngle endAngle.
   * @param lineWidth lineWidth.
   * @param style style.
   * @param anticlockwise anticlockwise.
   */
  strokeArc(
    pos: Pointable,
    radius: number,
    startAngle: number,
    endAngle: number,
    lineWidth: number,
    style: RenderStylable,
    anticlockwise?: boolean
  ): void

  /**
   * draw stroked arc.
   *
   * @param x x.
   * @param y y.
   * @param radius radius.
   * @param startAngle startAngle.
   * @param endAngle endAngle.
   * @param lineWidth lineWidth.
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
   * draw stroked arc.
   *
   * @param x x.
   * @param y y.
   * @param radius radius.
   * @param startAngle startAngle.
   * @param endAngle endAngle.
   * @param lineWidth lineWidth.
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
    style: RenderStylable,
    anticlockwise?: boolean
  ): void

  /**
   * draw filled arc.
   *
   * @param pos pos.
   * @param radius radius.
   * @param style style.
   * @param anticlockwise anticlockwise.
   */
  fillCircle(
    pos: Pointable,
    radius: number,
    style: RenderStyle,
    anticlockwise?: boolean
  ): void

  /**
   * draw filled arc.
   *
   * @param pos pos.
   * @param radius radius.
   * @param style style.
   * @param anticlockwise anticlockwise.
   */
  fillCircle(
    pos: Pointable,
    radius: number,
    style: RenderStylable,
    anticlockwise?: boolean
  ): void

  /**
   * draw filled arc.
   *
   * @param x x.
   * @param y y.
   * @param radius radius.
   * @param style style.
   * @param anticlockwise anticlockwise.
   */
  fillCircle(
    x: number,
    y: number,
    radius: number,
    style: RenderStyle,
    anticlockwise?: boolean
  ): void

  /**
   * draw filled arc.
   *
   * @param x x.
   * @param y y.
   * @param radius radius.
   * @param style style.
   * @param anticlockwise anticlockwise.
   */
  fillCircle(
    x: number,
    y: number,
    radius: number,
    style: RenderStylable,
    anticlockwise?: boolean
  ): void

  /**
   * draw stroked arc.
   *
   * @param pos pos.
   * @param radius radius.
   * @param lineWidth lineWidth.
   * @param style style.
   * @param anticlockwise anticlockwise.
   */
  strokeCircle(
    pos: Pointable,
    radius: number,
    lineWidth: number,
    style: RenderStyle,
    anticlockwise?: boolean
  ): void

  /**
   * draw stroked arc.
   *
   * @param pos pos.
   * @param radius radius.
   * @param lineWidth lineWidth.
   * @param style style.
   * @param anticlockwise anticlockwise.
   */
  strokeCircle(
    pos: Pointable,
    radius: number,
    lineWidth: number,
    style: RenderStylable,
    anticlockwise?: boolean
  ): void

  /**
   * draw stroked arc.
   *
   * @param x x.
   * @param y y.
   * @param radius radius.
   * @param lineWidth lineWidth.
   * @param style style.
   * @param anticlockwise anticlockwise.
   */
  strokeCircle(
    x: number,
    y: number,
    radius: number,
    lineWidth: number,
    style: RenderStyle,
    anticlockwise?: boolean
  ): void

  /**
   * draw stroked arc.
   *
   * @param x x.
   * @param y y.
   * @param radius radius.
   * @param lineWidth lineWidth.
   * @param style style.
   * @param anticlockwise anticlockwise.
   */
  strokeCircle(
    x: number,
    y: number,
    radius: number,
    lineWidth: number,
    style: RenderStylable,
    anticlockwise?: boolean
  ): void

  /**
   * draw filled arc.
   *
   * @param pos pos.
   * @param radiusX radiusX.
   * @param radiusY radiusY.
   * @param rotation rotation.
   * @param startAngle startAngle.
   * @param endAngle endAngle.
   * @param style style.
   * @param anticlockwise anticlockwise.
   */
  fillEllipse(
    pos: Pointable,
    radiusX: number,
    radiusY: number,
    rotation: number,
    startAngle: number,
    endAngle: number,
    style: RenderStyle,
    anticlockwise?: boolean
  ): void

  /**
   * draw filled arc.
   *
   * @param pos pos.
   * @param radiusX radiusX.
   * @param radiusY radiusY.
   * @param rotation rotation.
   * @param startAngle startAngle.
   * @param endAngle endAngle.
   * @param style style.
   * @param anticlockwise anticlockwise.
   */
  fillEllipse(
    pos: Pointable,
    radiusX: number,
    radiusY: number,
    rotation: number,
    startAngle: number,
    endAngle: number,
    style: RenderStylable,
    anticlockwise?: boolean
  ): void

  /**
   * draw filled arc.
   *
   * @param x x.
   * @param y y.
   * @param radiusX radiusX.
   * @param radiusY radiusY.
   * @param rotation rotation.
   * @param startAngle startAngle.
   * @param endAngle endAngle.
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
   * draw filled arc.
   *
   * @param x x.
   * @param y y.
   * @param radiusX radiusX.
   * @param radiusY radiusY.
   * @param rotation rotation.
   * @param startAngle startAngle.
   * @param endAngle endAngle.
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
    style: RenderStylable,
    anticlockwise?: boolean
  ): void

  /**
   * draw stroked arc.
   *
   * @param pos pos.
   * @param radiusX radiusX.
   * @param radiusY radiusY.
   * @param rotation rotation.
   * @param startAngle startAngle.
   * @param endAngle endAngle.
   * @param lineWidth lineWidth.
   * @param style style.
   * @param anticlockwise anticlockwise.
   */
  strokeEllipse(
    pos: Pointable,
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
   * draw stroked arc.
   *
   * @param pos pos.
   * @param radiusX radiusX.
   * @param radiusY radiusY.
   * @param rotation rotation.
   * @param startAngle startAngle.
   * @param endAngle endAngle.
   * @param lineWidth lineWidth.
   * @param style style.
   * @param anticlockwise anticlockwise.
   */
  strokeEllipse(
    pos: Pointable,
    radiusX: number,
    radiusY: number,
    rotation: number,
    startAngle: number,
    endAngle: number,
    lineWidth: number,
    style: RenderStylable,
    anticlockwise?: boolean
  ): void

  /**
   * draw stroked arc.
   *
   * @param x x.
   * @param y y.
   * @param radiusX radiusX.
   * @param radiusY radiusY.
   * @param rotation rotation.
   * @param startAngle startAngle.
   * @param endAngle endAngle.
   * @param lineWidth lineWidth.
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
   * draw stroked arc.
   *
   * @param x x.
   * @param y y.
   * @param radiusX radiusX.
   * @param radiusY radiusY.
   * @param rotation rotation.
   * @param startAngle startAngle.
   * @param endAngle endAngle.
   * @param lineWidth lineWidth.
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
    style: RenderStylable,
    anticlockwise?: boolean
  ): void

  /**
   * draw filled polygon.
   *
   * @param points points.
   * @param style style.
   */
  fillPolygon(
    points: (RenderPolygonPoint | Pointable)[],
    style: RenderStyle
  ): void

  /**
   * draw filled polygon.
   *
   * @param points points.
   * @param style style.
   */
  fillPolygon(
    points: (RenderPolygonPoint | Pointable)[],
    style: RenderStylable
  ): void

  /**
   * draw stroked polygon.
   *
   * @param points points.
   * @param lineWidth lineWidth.
   * @param style style.
   */
  strokePolygon(
    points: (RenderPolygonPoint | Pointable)[],
    lineWidth: number,
    style: RenderStyle
  ): void

  /**
   * draw stroked polygon.
   *
   * @param points points.
   * @param lineWidth lineWidth.
   * @param style style.
   */
  strokePolygon(
    points: (RenderPolygonPoint | Pointable)[],
    lineWidth: number,
    style: RenderStylable
  ): void

  /**
   * draw filled text.
   *
   * @param text text.
   * @param pos pos.
   * @param style style.
   * @param maxWidth maxWidth.
   * @param font font.
   * @param textAlign textAlign.
   * @param textBaseline textBaseline.
   */
  fillText(
    text: string,
    pos: Pointable,
    style: RenderStyle,
    maxWidth?: number,
    font?: Fontable,
    textAlign?: RenderTextAlign,
    textBaseline?: RenderTextBaseline
  ): void

  /**
   * draw filled text.
   *
   * @param text text.
   * @param pos pos.
   * @param style style.
   * @param maxWidth maxWidth.
   * @param font font.
   * @param textAlign textAlign.
   * @param textBaseline textBaseline.
   */
  fillText(
    text: string,
    pos: Pointable,
    style: RenderStylable,
    maxWidth?: number,
    font?: Fontable,
    textAlign?: RenderTextAlign,
    textBaseline?: RenderTextBaseline
  ): void

  /**
   * draw filled text.
   *
   * @param text text.
   * @param x x.
   * @param y y.
   * @param style style.
   * @param maxWidth maxWidth.
   * @param font font.
   * @param textAlign textAlign.
   * @param textBaseline textBaseline.
   */
  fillText(
    text: string,
    x: number,
    y: number,
    style: RenderStyle,
    maxWidth?: number,
    font?: Fontable,
    textAlign?: RenderTextAlign,
    textBaseline?: RenderTextBaseline
  ): void

  /**
   * draw filled text.
   *
   * @param text text.
   * @param x x.
   * @param y y.
   * @param style style.
   * @param maxWidth maxWidth.
   * @param font font.
   * @param textAlign textAlign.
   * @param textBaseline textBaseline.
   */
  fillText(
    text: string,
    x: number,
    y: number,
    style: RenderStylable,
    maxWidth?: number,
    font?: Fontable,
    textAlign?: RenderTextAlign,
    textBaseline?: RenderTextBaseline
  ): void

  /**
   * draw stroked text.
   *
   * @param text text.
   * @param pos pos.
   * @param lineWidth lineWidth.
   * @param style style.
   * @param maxWidth maxWidth.
   * @param font font.
   * @param textAlign textAlign.
   * @param textBaseline textBaseline.
   */
  strokeText(
    text: string,
    pos: Pointable,
    lineWidth: number,
    style: RenderStyle,
    maxWidth?: number,
    font?: Fontable,
    textAlign?: RenderTextAlign,
    textBaseline?: RenderTextBaseline
  ): void

  /**
   * draw stroked text.
   *
   * @param text text.
   * @param pos pos.
   * @param lineWidth lineWidth.
   * @param style style.
   * @param maxWidth maxWidth.
   * @param font font.
   * @param textAlign textAlign.
   * @param textBaseline textBaseline.
   */
  strokeText(
    text: string,
    pos: Pointable,
    lineWidth: number,
    style: RenderStylable,
    maxWidth?: number,
    font?: Fontable,
    textAlign?: RenderTextAlign,
    textBaseline?: RenderTextBaseline
  ): void

  /**
   * draw stroked text.
   *
   * @param text text.
   * @param x x.
   * @param y y.
   * @param lineWidth lineWidth.
   * @param style style.
   * @param maxWidth maxWidth.
   * @param font font.
   * @param textAlign textAlign.
   * @param textBaseline textBaseline.
   */
  strokeText(
    text: string,
    x: number,
    y: number,
    lineWidth: number,
    style: RenderStyle,
    maxWidth?: number,
    font?: Fontable,
    textAlign?: RenderTextAlign,
    textBaseline?: RenderTextBaseline
  ): void

  /**
   * draw stroked text.
   *
   * @param text text.
   * @param x x.
   * @param y y.
   * @param lineWidth lineWidth.
   * @param style style.
   * @param maxWidth maxWidth.
   * @param font font.
   * @param textAlign textAlign.
   * @param textBaseline textBaseline.
   */
  strokeText(
    text: string,
    x: number,
    y: number,
    lineWidth: number,
    style: RenderStylable,
    maxWidth?: number,
    font?: Fontable,
    textAlign?: RenderTextAlign,
    textBaseline?: RenderTextBaseline
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
