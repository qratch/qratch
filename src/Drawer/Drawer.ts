import { Fontable } from '@/Font/Fontable'
import { fontableToString } from '@/Font/fontableToString'
import { isFontable } from '@/Font/isFontable'
import { isPointable } from '@/Pointable/isPointable'
import { Pointable } from '@/Pointable/Pointable'
import { isRenderImage } from '@/Renderer/isRenderImage'
import { Renderable } from '@/Renderer/Renderable'
import { RenderImage } from '@/Renderer/RenderImage'
import { RenderLineCap } from '@/Renderer/RenderLineCap'
import { RenderPolygonPoint } from '@/Renderer/RenderPolygonPoint'
import { RenderStyle } from '@/Renderer/RenderStyle'
import { RenderTextAlign } from '@/Renderer/RenderTextAlign'
import { RenderTextBaseline } from '@/Renderer/RenderTextBaseline'
import { isRenderStylable } from '@/RenderStyleable/isRenderStylable'
import { RenderStylable } from '@/RenderStyleable/RenderStylable'
import { isSizeable } from '@/Size/isSizeable'
import { Sizeable } from '@/Size/Sizeable'
import { Drawable } from './Drawable'

/**
 * Drawer class.
 */
export class Drawer implements Drawable {
  constructor(protected readonly renderer: Renderable) {}

  fillRect(pos: Pointable, size: Sizeable, style: RenderStyle): void

  fillRect(pos: Pointable, size: Sizeable, style: RenderStylable): void

  fillRect(
    pos: Pointable,
    width: number,
    height: number,
    style: RenderStyle
  ): void

  fillRect(
    pos: Pointable,
    width: number,
    height: number,
    style: RenderStylable
  ): void

  fillRect(x: number, y: number, size: Sizeable, style: RenderStyle): void

  fillRect(x: number, y: number, size: Sizeable, style: RenderStylable): void

  fillRect(
    x: number,
    y: number,
    width: number,
    height: number,
    style: RenderStyle
  ): void

  fillRect(
    x: number,
    y: number,
    width: number,
    height: number,
    style: RenderStylable
  ): void

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  fillRect(
    ...args:
      | [pos: Pointable, size: Sizeable, style: RenderStyle]
      | [pos: Pointable, size: Sizeable, style: RenderStylable]
      | [pos: Pointable, width: number, height: number, style: RenderStyle]
      | [pos: Pointable, width: number, height: number, style: RenderStylable]
      | [x: number, y: number, size: Sizeable, style: RenderStyle]
      | [x: number, y: number, size: Sizeable, style: RenderStylable]
      | [
          x: number,
          y: number,
          width: number,
          height: number,
          style: RenderStyle
        ]
      | [
          x: number,
          y: number,
          width: number,
          height: number,
          style: RenderStylable
        ]
  ) {
    if (
      isPointable(args[0]) &&
      isSizeable(args[1]) &&
      typeof args[2] === 'string'
    ) {
      this.renderer.fillRect(
        args[0].x,
        args[0].y,
        args[1].width,
        args[1].height,
        args[2] as RenderStyle
      )
      return
    }
    if (
      isPointable(args[0]) &&
      isSizeable(args[1]) &&
      isRenderStylable(args[2])
    ) {
      this.renderer.fillRect(
        args[0].x,
        args[0].y,
        args[1].width,
        args[1].height,
        args[2].toRenderStyle()
      )
      return
    }
    if (
      isPointable(args[0]) &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'string'
    ) {
      this.renderer.fillRect(
        args[0].x,
        args[0].y,
        args[1],
        args[2],
        args[3] as RenderStyle
      )
      return
    }
    if (
      isPointable(args[0]) &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      isRenderStylable(args[3])
    ) {
      this.renderer.fillRect(
        args[0].x,
        args[0].y,
        args[1],
        args[2],
        args[3].toRenderStyle()
      )
      return
    }
    if (
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      isSizeable(args[2]) &&
      typeof args[3] === 'string'
    ) {
      this.renderer.fillRect(
        args[0],
        args[1],
        args[2].width,
        args[2].height,
        args[3] as RenderStyle
      )
      return
    }
    if (
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      isSizeable(args[2]) &&
      isRenderStylable(args[3])
    ) {
      this.renderer.fillRect(
        args[0],
        args[1],
        args[2].width,
        args[2].height,
        args[3].toRenderStyle()
      )
      return
    }
    if (
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'string'
    ) {
      this.renderer.fillRect(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4] as RenderStyle
      )
      return
    }
    if (
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      isRenderStylable(args[4])
    ) {
      this.renderer.fillRect(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4].toRenderStyle()
      )
      return
    }

    throw new TypeError(this.constructor.name + '.fillRect: invalid arguments.')
  }

  strokeRect(
    pos: Pointable,
    size: Sizeable,
    lineWidth: number,
    style: RenderStyle
  ): void

  strokeRect(
    pos: Pointable,
    size: Sizeable,
    lineWidth: number,
    style: RenderStylable
  ): void

  strokeRect(
    pos: Pointable,
    width: number,
    height: number,
    lineWidth: number,
    style: RenderStyle
  ): void

  strokeRect(
    pos: Pointable,
    width: number,
    height: number,
    lineWidth: number,
    style: RenderStylable
  ): void

  strokeRect(
    x: number,
    y: number,
    size: Sizeable,
    lineWidth: number,
    style: RenderStyle
  ): void

  strokeRect(
    x: number,
    y: number,
    size: Sizeable,
    lineWidth: number,
    style: RenderStylable
  ): void

  strokeRect(
    x: number,
    y: number,
    width: number,
    height: number,
    lineWidth: number,
    style: RenderStyle
  ): void

  strokeRect(
    x: number,
    y: number,
    width: number,
    height: number,
    lineWidth: number,
    style: RenderStylable
  ): void

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  strokeRect(
    ...args:
      | [pos: Pointable, size: Sizeable, lineWidth: number, style: RenderStyle]
      | [
          pos: Pointable,
          size: Sizeable,
          lineWidth: number,
          style: RenderStylable
        ]
      | [
          pos: Pointable,
          width: number,
          height: number,
          lineWidth: number,
          style: RenderStyle
        ]
      | [
          pos: Pointable,
          width: number,
          height: number,
          lineWidth: number,
          style: RenderStylable
        ]
      | [
          x: number,
          y: number,
          size: Sizeable,
          lineWidth: number,
          style: RenderStyle
        ]
      | [
          x: number,
          y: number,
          size: Sizeable,
          lineWidth: number,
          style: RenderStylable
        ]
      | [
          x: number,
          y: number,
          width: number,
          height: number,
          lineWidth: number,
          style: RenderStyle
        ]
      | [
          x: number,
          y: number,
          width: number,
          height: number,
          lineWidth: number,
          style: RenderStylable
        ]
  ) {
    if (
      isPointable(args[0]) &&
      isSizeable(args[1]) &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'string'
    ) {
      this.renderer.strokeRect(
        args[0].x,
        args[0].y,
        args[1].width,
        args[1].height,
        args[2],
        args[3] as RenderStyle
      )
      return
    }
    if (
      isPointable(args[0]) &&
      isSizeable(args[1]) &&
      typeof args[2] === 'number' &&
      isRenderStylable(args[3])
    ) {
      this.renderer.strokeRect(
        args[0].x,
        args[0].y,
        args[1].width,
        args[1].height,
        args[2],
        args[3].toRenderStyle()
      )
      return
    }
    if (
      isPointable(args[0]) &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'string'
    ) {
      this.renderer.strokeRect(
        args[0].x,
        args[0].y,
        args[1],
        args[2],
        args[3],
        args[4] as RenderStyle
      )
      return
    }
    if (
      isPointable(args[0]) &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      isRenderStylable(args[4])
    ) {
      this.renderer.strokeRect(
        args[0].x,
        args[0].y,
        args[1],
        args[2],
        args[3],
        args[4].toRenderStyle()
      )
      return
    }
    if (
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      isSizeable(args[2]) &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'string'
    ) {
      this.renderer.strokeRect(
        args[0],
        args[1],
        args[2].width,
        args[2].height,
        args[3],
        args[4] as RenderStyle
      )
      return
    }
    if (
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      isSizeable(args[2]) &&
      typeof args[3] === 'number' &&
      isRenderStylable(args[4])
    ) {
      this.renderer.strokeRect(
        args[0],
        args[1],
        args[2].width,
        args[2].height,
        args[3],
        args[4].toRenderStyle()
      )
      return
    }
    if (
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'number' &&
      typeof args[5] === 'string'
    ) {
      this.renderer.strokeRect(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4],
        args[5] as RenderStyle
      )
      return
    }
    if (
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'number' &&
      isRenderStylable(args[5])
    ) {
      this.renderer.strokeRect(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4],
        args[5].toRenderStyle()
      )
      return
    }

    throw new TypeError(
      this.constructor.name + '.strokeRect: invalid arguments.'
    )
  }

  line(
    p1: Pointable,
    p2: Pointable,
    lineWidth: number,
    lineCap: RenderLineCap,
    style: RenderStyle
  ): void

  line(
    p1: Pointable,
    p2: Pointable,
    lineWidth: number,
    lineCap: RenderLineCap,
    style: RenderStylable
  ): void

  line(
    p1: Pointable,
    x2: number,
    y2: number,
    lineWidth: number,
    lineCap: RenderLineCap,
    style: RenderStyle
  ): void

  line(
    p1: Pointable,
    x2: number,
    y2: number,
    lineWidth: number,
    lineCap: RenderLineCap,
    style: RenderStylable
  ): void

  line(
    x1: number,
    y1: number,
    p2: Pointable,
    lineWidth: number,
    lineCap: RenderLineCap,
    style: RenderStyle
  ): void

  line(
    x1: number,
    y1: number,
    p2: Pointable,
    lineWidth: number,
    lineCap: RenderLineCap,
    style: RenderStylable
  ): void

  line(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    lineWidth: number,
    lineCap: RenderLineCap,
    style: RenderStyle
  ): void

  line(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    lineWidth: number,
    lineCap: RenderLineCap,
    style: RenderStylable
  ): void

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  line(
    ...args:
      | [
          p1: Pointable,
          p2: Pointable,
          lineWidth: number,
          lineCap: RenderLineCap,
          style: RenderStyle
        ]
      | [
          p1: Pointable,
          p2: Pointable,
          lineWidth: number,
          lineCap: RenderLineCap,
          style: RenderStylable
        ]
      | [
          p1: Pointable,
          x2: number,
          y2: number,
          lineWidth: number,
          lineCap: RenderLineCap,
          style: RenderStyle
        ]
      | [
          p1: Pointable,
          x2: number,
          y2: number,
          lineWidth: number,
          lineCap: RenderLineCap,
          style: RenderStylable
        ]
      | [
          x1: number,
          y1: number,
          p2: Pointable,
          lineWidth: number,
          lineCap: RenderLineCap,
          style: RenderStyle
        ]
      | [
          x1: number,
          y1: number,
          p2: Pointable,
          lineWidth: number,
          lineCap: RenderLineCap,
          style: RenderStylable
        ]
      | [
          x1: number,
          y1: number,
          x2: number,
          y2: number,
          lineWidth: number,
          lineCap: RenderLineCap,
          style: RenderStyle
        ]
      | [
          x1: number,
          y1: number,
          x2: number,
          y2: number,
          lineWidth: number,
          lineCap: RenderLineCap,
          style: RenderStylable
        ]
  ) {
    if (
      isPointable(args[0]) &&
      isPointable(args[1]) &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'string' &&
      typeof args[4] === 'string'
    ) {
      this.renderer.line(
        args[0].x,
        args[0].y,
        args[1].x,
        args[1].y,
        args[2],
        args[3] as RenderLineCap,
        args[4] as RenderStyle
      )
      return
    }
    if (
      isPointable(args[0]) &&
      isPointable(args[1]) &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'string' &&
      isRenderStylable(args[4])
    ) {
      this.renderer.line(
        args[0].x,
        args[0].y,
        args[1].x,
        args[1].y,
        args[2],
        args[3] as RenderLineCap,
        args[4].toRenderStyle()
      )
      return
    }
    if (
      isPointable(args[0]) &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'string' &&
      typeof args[5] === 'string'
    ) {
      this.renderer.line(
        args[0].x,
        args[0].y,
        args[1],
        args[2],
        args[3],
        args[4] as RenderLineCap,
        args[5] as RenderStyle
      )
      return
    }
    if (
      isPointable(args[0]) &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'string' &&
      isRenderStylable(args[5])
    ) {
      this.renderer.line(
        args[0].x,
        args[0].y,
        args[1],
        args[2],
        args[3],
        args[4] as RenderLineCap,
        args[5].toRenderStyle()
      )
      return
    }
    if (
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      isPointable(args[2]) &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'string' &&
      typeof args[5] === 'string'
    ) {
      this.renderer.line(
        args[0],
        args[1],
        args[2].x,
        args[2].y,
        args[3],
        args[4] as RenderLineCap,
        args[5] as RenderStyle
      )
      return
    }
    if (
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      isPointable(args[2]) &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'string' &&
      isRenderStylable(args[5])
    ) {
      this.renderer.line(
        args[0],
        args[1],
        args[2].x,
        args[2].y,
        args[3],
        args[4] as RenderLineCap,
        args[5].toRenderStyle()
      )
      return
    }
    if (
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'number' &&
      typeof args[5] === 'string' &&
      typeof args[6] === 'string'
    ) {
      this.renderer.line(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4],
        args[5] as RenderLineCap,
        args[6] as RenderStyle
      )
      return
    }
    if (
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'number' &&
      typeof args[5] === 'string' &&
      isRenderStylable(args[6])
    ) {
      this.renderer.line(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4],
        args[5] as RenderLineCap,
        args[6].toRenderStyle()
      )
      return
    }

    throw new TypeError(this.constructor.name + '.line: invalid arguments.')
  }

  fillArc(
    pos: Pointable,
    radius: number,
    startAngle: number,
    endAngle: number,
    style: RenderStyle,
    anticlockwise?: boolean
  ): void

  fillArc(
    pos: Pointable,
    radius: number,
    startAngle: number,
    endAngle: number,
    style: RenderStylable,
    anticlockwise?: boolean
  ): void

  fillArc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    style: RenderStyle,
    anticlockwise?: boolean
  ): void

  fillArc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    style: RenderStylable,
    anticlockwise?: boolean
  ): void

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  fillArc(
    ...args:
      | [
          pos: Pointable,
          radius: number,
          startAngle: number,
          endAngle: number,
          style: RenderStyle,
          anticlockwise?: boolean
        ]
      | [
          pos: Pointable,
          radius: number,
          startAngle: number,
          endAngle: number,
          style: RenderStylable,
          anticlockwise?: boolean
        ]
      | [
          x: number,
          y: number,
          radius: number,
          startAngle: number,
          endAngle: number,
          style: RenderStyle,
          anticlockwise?: boolean
        ]
      | [
          x: number,
          y: number,
          radius: number,
          startAngle: number,
          endAngle: number,
          style: RenderStylable,
          anticlockwise?: boolean
        ]
  ) {
    if (
      isPointable(args[0]) &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'string' &&
      (typeof args[5] === 'boolean' || typeof args[5] === 'undefined')
    ) {
      this.renderer.fillArc(
        args[0].x,
        args[0].y,
        args[1],
        args[2],
        args[3],
        args[4] as RenderStyle,
        args[5]
      )
      return
    }
    if (
      isPointable(args[0]) &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      isRenderStylable(args[4]) &&
      (typeof args[5] === 'boolean' || typeof args[5] === 'undefined')
    ) {
      this.renderer.fillArc(
        args[0].x,
        args[0].y,
        args[1],
        args[2],
        args[3],
        args[4].toRenderStyle(),
        args[5]
      )
      return
    }
    if (
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'number' &&
      typeof args[5] === 'string' &&
      (typeof args[6] === 'boolean' || typeof args[6] === 'undefined')
    ) {
      this.renderer.fillArc(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4],
        args[5] as RenderStyle,
        args[6]
      )
      return
    }
    if (
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'number' &&
      isRenderStylable(args[5]) &&
      (typeof args[6] === 'boolean' || typeof args[6] === 'undefined')
    ) {
      this.renderer.fillArc(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4],
        args[5].toRenderStyle(),
        args[6]
      )
      return
    }

    throw new TypeError(this.constructor.name + '.fillArc: invalid arguments.')
  }

  strokeArc(
    pos: Pointable,
    radius: number,
    startAngle: number,
    endAngle: number,
    lineWidth: number,
    style: RenderStyle,
    anticlockwise?: boolean
  ): void

  strokeArc(
    pos: Pointable,
    radius: number,
    startAngle: number,
    endAngle: number,
    lineWidth: number,
    style: RenderStylable,
    anticlockwise?: boolean
  ): void

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

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  strokeArc(
    ...args:
      | [
          pos: Pointable,
          radius: number,
          startAngle: number,
          endAngle: number,
          lineWidth: number,
          style: RenderStyle,
          anticlockwise?: boolean
        ]
      | [
          pos: Pointable,
          radius: number,
          startAngle: number,
          endAngle: number,
          lineWidth: number,
          style: RenderStylable,
          anticlockwise?: boolean
        ]
      | [
          x: number,
          y: number,
          radius: number,
          startAngle: number,
          endAngle: number,
          lineWidth: number,
          style: RenderStyle,
          anticlockwise?: boolean
        ]
      | [
          x: number,
          y: number,
          radius: number,
          startAngle: number,
          endAngle: number,
          lineWidth: number,
          style: RenderStylable,
          anticlockwise?: boolean
        ]
  ) {
    if (
      isPointable(args[0]) &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'number' &&
      typeof args[5] === 'string' &&
      (typeof args[6] === 'boolean' || typeof args[6] === 'undefined')
    ) {
      this.renderer.strokeArc(
        args[0].x,
        args[0].y,
        args[1],
        args[2],
        args[3],
        args[4],
        args[5] as RenderStyle,
        args[6]
      )
      return
    }
    if (
      isPointable(args[0]) &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'number' &&
      isRenderStylable(args[5]) &&
      (typeof args[6] === 'boolean' || typeof args[6] === 'undefined')
    ) {
      this.renderer.strokeArc(
        args[0].x,
        args[0].y,
        args[1],
        args[2],
        args[3],
        args[4],
        args[5].toRenderStyle(),
        args[6]
      )
      return
    }
    if (
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'number' &&
      typeof args[5] === 'number' &&
      typeof args[6] === 'string' &&
      (typeof args[7] === 'boolean' || typeof args[7] === 'undefined')
    ) {
      this.renderer.strokeArc(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4],
        args[5],
        args[6] as RenderStyle,
        args[7]
      )
      return
    }
    if (
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'number' &&
      typeof args[5] === 'number' &&
      isRenderStylable(args[6]) &&
      (typeof args[7] === 'boolean' || typeof args[7] === 'undefined')
    ) {
      this.renderer.strokeArc(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4],
        args[5],
        args[6].toRenderStyle(),
        args[7]
      )
      return
    }

    throw new TypeError(
      this.constructor.name + '.strokeArc: invalid arguments.'
    )
  }

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

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  fillEllipse(
    ...args:
      | [
          pos: Pointable,
          radiusX: number,
          radiusY: number,
          rotation: number,
          startAngle: number,
          endAngle: number,
          style: RenderStyle,
          anticlockwise?: boolean
        ]
      | [
          pos: Pointable,
          radiusX: number,
          radiusY: number,
          rotation: number,
          startAngle: number,
          endAngle: number,
          style: RenderStylable,
          anticlockwise?: boolean
        ]
      | [
          x: number,
          y: number,
          radiusX: number,
          radiusY: number,
          rotation: number,
          startAngle: number,
          endAngle: number,
          style: RenderStyle,
          anticlockwise?: boolean
        ]
      | [
          x: number,
          y: number,
          radiusX: number,
          radiusY: number,
          rotation: number,
          startAngle: number,
          endAngle: number,
          style: RenderStylable,
          anticlockwise?: boolean
        ]
  ) {
    if (
      isPointable(args[0]) &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'number' &&
      typeof args[5] === 'number' &&
      typeof args[6] === 'string' &&
      (typeof args[7] === 'boolean' || typeof args[7] === 'undefined')
    ) {
      this.renderer.fillEllipse(
        args[0].x,
        args[0].y,
        args[1],
        args[2],
        args[3],
        args[4],
        args[5],
        args[6] as RenderStyle,
        args[7]
      )
      return
    }
    if (
      isPointable(args[0]) &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'number' &&
      typeof args[5] === 'number' &&
      isRenderStylable(args[6]) &&
      (typeof args[7] === 'boolean' || typeof args[7] === 'undefined')
    ) {
      this.renderer.fillEllipse(
        args[0].x,
        args[0].y,
        args[1],
        args[2],
        args[3],
        args[4],
        args[5],
        args[6].toRenderStyle(),
        args[7]
      )
      return
    }
    if (
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'number' &&
      typeof args[5] === 'number' &&
      typeof args[6] === 'number' &&
      typeof args[7] === 'string' &&
      (typeof args[8] === 'boolean' || typeof args[8] === 'undefined')
    ) {
      this.renderer.fillEllipse(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4],
        args[5],
        args[6],
        args[7] as RenderStyle,
        args[8]
      )
      return
    }
    if (
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'number' &&
      typeof args[5] === 'number' &&
      typeof args[6] === 'number' &&
      isRenderStylable(args[7]) &&
      (typeof args[8] === 'boolean' || typeof args[8] === 'undefined')
    ) {
      this.renderer.fillEllipse(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4],
        args[5],
        args[6],
        args[7].toRenderStyle(),
        args[8]
      )
      return
    }

    throw new TypeError(
      this.constructor.name + '.fillEllipse: invalid arguments.'
    )
  }

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

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  strokeEllipse(
    ...args:
      | [
          pos: Pointable,
          radiusX: number,
          radiusY: number,
          rotation: number,
          startAngle: number,
          endAngle: number,
          lineWidth: number,
          style: RenderStyle,
          anticlockwise?: boolean
        ]
      | [
          pos: Pointable,
          radiusX: number,
          radiusY: number,
          rotation: number,
          startAngle: number,
          endAngle: number,
          lineWidth: number,
          style: RenderStylable,
          anticlockwise?: boolean
        ]
      | [
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
        ]
      | [
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
        ]
  ) {
    if (
      isPointable(args[0]) &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'number' &&
      typeof args[5] === 'number' &&
      typeof args[6] === 'number' &&
      typeof args[7] === 'string' &&
      (typeof args[8] === 'boolean' || typeof args[8] === 'undefined')
    ) {
      this.renderer.strokeEllipse(
        args[0].x,
        args[0].y,
        args[1],
        args[2],
        args[3],
        args[4],
        args[5],
        args[6],
        args[7] as RenderStyle,
        args[8]
      )
      return
    }
    if (
      isPointable(args[0]) &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'number' &&
      typeof args[5] === 'number' &&
      typeof args[6] === 'number' &&
      isRenderStylable(args[7]) &&
      (typeof args[8] === 'boolean' || typeof args[8] === 'undefined')
    ) {
      this.renderer.strokeEllipse(
        args[0].x,
        args[0].y,
        args[1],
        args[2],
        args[3],
        args[4],
        args[5],
        args[6],
        args[7].toRenderStyle(),
        args[8]
      )
      return
    }
    if (
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'number' &&
      typeof args[5] === 'number' &&
      typeof args[6] === 'number' &&
      typeof args[7] === 'number' &&
      typeof args[8] === 'string' &&
      (typeof args[9] === 'boolean' || typeof args[9] === 'undefined')
    ) {
      this.renderer.strokeEllipse(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4],
        args[5],
        args[6],
        args[7],
        args[8] as RenderStyle,
        args[9]
      )
      return
    }
    if (
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'number' &&
      typeof args[5] === 'number' &&
      typeof args[6] === 'number' &&
      typeof args[7] === 'number' &&
      isRenderStylable(args[8]) &&
      (typeof args[9] === 'boolean' || typeof args[9] === 'undefined')
    ) {
      this.renderer.strokeEllipse(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4],
        args[5],
        args[6],
        args[7],
        args[8].toRenderStyle(),
        args[9]
      )
      return
    }

    throw new TypeError(
      this.constructor.name + '.strokeEllipse: invalid arguments.'
    )
  }

  fillPolygon(
    points: (RenderPolygonPoint | Pointable)[],
    style: RenderStyle
  ): void

  fillPolygon(
    points: (RenderPolygonPoint | Pointable)[],
    style: RenderStylable
  ): void

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  fillPolygon(
    ...args:
      | [points: (RenderPolygonPoint | Pointable)[], style: RenderStyle]
      | [points: (RenderPolygonPoint | Pointable)[], style: RenderStylable]
  ) {
    if (Array.isArray(args[0]) && typeof args[1] === 'string') {
      this.renderer.fillPolygon(
        args[0].map((v) => (isPointable(v) ? [v.x, v.y] : v)),
        args[1] as RenderStyle
      )
      return
    }
    if (Array.isArray(args[0]) && isRenderStylable(args[1])) {
      this.renderer.fillPolygon(
        args[0].map((v) => (isPointable(v) ? [v.x, v.y] : v)),
        args[1].toRenderStyle()
      )
      return
    }

    throw new TypeError(
      this.constructor.name + '.fillPolygon: invalid arguments.'
    )
  }

  strokePolygon(
    points: (RenderPolygonPoint | Pointable)[],
    lineWidth: number,
    style: RenderStyle
  ): void

  strokePolygon(
    points: (RenderPolygonPoint | Pointable)[],
    lineWidth: number,
    style: RenderStylable
  ): void

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  strokePolygon(
    ...args:
      | [
          points: (RenderPolygonPoint | Pointable)[],
          lineWidth: number,
          style: RenderStyle
        ]
      | [
          points: (RenderPolygonPoint | Pointable)[],
          lineWidth: number,
          style: RenderStylable
        ]
  ) {
    if (
      Array.isArray(args[0]) &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'string'
    ) {
      this.renderer.strokePolygon(
        args[0].map((v) => (isPointable(v) ? [v.x, v.y] : v)),
        args[1],
        args[2] as RenderStyle
      )
      return
    }
    if (
      Array.isArray(args[0]) &&
      typeof args[1] === 'number' &&
      isRenderStylable(args[2])
    ) {
      this.renderer.strokePolygon(
        args[0].map((v) => (isPointable(v) ? [v.x, v.y] : v)),
        args[1],
        args[2].toRenderStyle()
      )
      return
    }

    throw new TypeError(
      this.constructor.name + '.strokePolygon: invalid arguments.'
    )
  }

  fillText(
    text: string,
    pos: Pointable,
    style: RenderStyle,
    maxWidth?: number,
    font?: Fontable,
    textAlign?: RenderTextAlign,
    textBaseline?: RenderTextBaseline
  ): void

  fillText(
    text: string,
    pos: Pointable,
    style: RenderStylable,
    maxWidth?: number,
    font?: Fontable,
    textAlign?: RenderTextAlign,
    textBaseline?: RenderTextBaseline
  ): void

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

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  fillText(
    ...args:
      | [
          text: string,
          pos: Pointable,
          style: RenderStyle,
          maxWidth?: number,
          font?: Fontable,
          textAlign?: RenderTextAlign,
          textBaseline?: RenderTextBaseline
        ]
      | [
          text: string,
          pos: Pointable,
          style: RenderStylable,
          maxWidth?: number,
          font?: Fontable,
          textAlign?: RenderTextAlign,
          textBaseline?: RenderTextBaseline
        ]
      | [
          text: string,
          x: number,
          y: number,
          style: RenderStyle,
          maxWidth?: number,
          font?: Fontable,
          textAlign?: RenderTextAlign,
          textBaseline?: RenderTextBaseline
        ]
      | [
          text: string,
          x: number,
          y: number,
          style: RenderStylable,
          maxWidth?: number,
          font?: Fontable,
          textAlign?: RenderTextAlign,
          textBaseline?: RenderTextBaseline
        ]
  ) {
    if (
      typeof args[0] === 'string' &&
      isPointable(args[1]) &&
      typeof args[2] === 'string' &&
      (typeof args[3] === 'number' || typeof args[3] === 'undefined') &&
      (isFontable(args[4]) || typeof args[4] === 'undefined') &&
      (typeof args[5] === 'string' || typeof args[5] === 'undefined') &&
      (typeof args[6] === 'string' || typeof args[6] === 'undefined')
    ) {
      this.renderer.fillText(
        args[0],
        args[1].x,
        args[1].y,
        args[2] as RenderStyle,
        args[3],
        args[4] ? fontableToString(args[4]) : undefined,
        args[5] as RenderTextAlign,
        args[6] as RenderTextBaseline
      )
      return
    }
    if (
      typeof args[0] === 'string' &&
      isPointable(args[1]) &&
      isRenderStylable(args[2]) &&
      (typeof args[3] === 'number' || typeof args[3] === 'undefined') &&
      (isFontable(args[4]) || typeof args[4] === 'undefined') &&
      (typeof args[5] === 'string' || typeof args[5] === 'undefined') &&
      (typeof args[6] === 'string' || typeof args[6] === 'undefined')
    ) {
      this.renderer.fillText(
        args[0],
        args[1].x,
        args[1].y,
        args[2].toRenderStyle(),
        args[3],
        args[4] ? fontableToString(args[4]) : undefined,
        args[5] as RenderTextAlign,
        args[6] as RenderTextBaseline
      )
      return
    }
    if (
      typeof args[0] === 'string' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'string' &&
      (typeof args[4] === 'number' || typeof args[4] === 'undefined') &&
      (isFontable(args[5]) || typeof args[5] === 'undefined') &&
      (typeof args[6] === 'string' || typeof args[6] === 'undefined') &&
      (typeof args[7] === 'string' || typeof args[7] === 'undefined')
    ) {
      this.renderer.fillText(
        args[0],
        args[1],
        args[2],
        args[3] as RenderStyle,
        args[4],
        args[5] ? fontableToString(args[5]) : undefined,
        args[6] as RenderTextAlign,
        args[7] as RenderTextBaseline
      )
      return
    }
    if (
      typeof args[0] === 'string' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      isRenderStylable(args[3]) &&
      (typeof args[4] === 'number' || typeof args[4] === 'undefined') &&
      (isFontable(args[5]) || typeof args[5] === 'undefined') &&
      (typeof args[6] === 'string' || typeof args[6] === 'undefined') &&
      (typeof args[7] === 'string' || typeof args[7] === 'undefined')
    ) {
      this.renderer.fillText(
        args[0],
        args[1],
        args[2],
        args[3].toRenderStyle(),
        args[4],
        args[5] ? fontableToString(args[5]) : undefined,
        args[6] as RenderTextAlign,
        args[7] as RenderTextBaseline
      )
      return
    }

    throw new TypeError(this.constructor.name + '.fillText: invalid arguments.')
  }

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

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  strokeText(
    ...args:
      | [
          text: string,
          pos: Pointable,
          lineWidth: number,
          style: RenderStyle,
          maxWidth?: number,
          font?: Fontable,
          textAlign?: RenderTextAlign,
          textBaseline?: RenderTextBaseline
        ]
      | [
          text: string,
          pos: Pointable,
          lineWidth: number,
          style: RenderStylable,
          maxWidth?: number,
          font?: Fontable,
          textAlign?: RenderTextAlign,
          textBaseline?: RenderTextBaseline
        ]
      | [
          text: string,
          x: number,
          y: number,
          lineWidth: number,
          style: RenderStyle,
          maxWidth?: number,
          font?: Fontable,
          textAlign?: RenderTextAlign,
          textBaseline?: RenderTextBaseline
        ]
      | [
          text: string,
          x: number,
          y: number,
          lineWidth: number,
          style: RenderStylable,
          maxWidth?: number,
          font?: Fontable,
          textAlign?: RenderTextAlign,
          textBaseline?: RenderTextBaseline
        ]
  ) {
    if (
      typeof args[0] === 'string' &&
      isPointable(args[1]) &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'string' &&
      (typeof args[4] === 'number' || typeof args[4] === 'undefined') &&
      (isFontable(args[5]) || typeof args[5] === 'undefined') &&
      (typeof args[6] === 'string' || typeof args[6] === 'undefined') &&
      (typeof args[7] === 'string' || typeof args[7] === 'undefined')
    ) {
      this.renderer.strokeText(
        args[0],
        args[1].x,
        args[1].y,
        args[2],
        args[3] as RenderStyle,
        args[4],
        args[5] ? fontableToString(args[5]) : undefined,
        args[6] as RenderTextAlign,
        args[7] as RenderTextBaseline
      )
      return
    }
    if (
      typeof args[0] === 'string' &&
      isPointable(args[1]) &&
      typeof args[2] === 'number' &&
      isRenderStylable(args[3]) &&
      (typeof args[4] === 'number' || typeof args[4] === 'undefined') &&
      (isFontable(args[5]) || typeof args[5] === 'undefined') &&
      (typeof args[6] === 'string' || typeof args[6] === 'undefined') &&
      (typeof args[7] === 'string' || typeof args[7] === 'undefined')
    ) {
      this.renderer.strokeText(
        args[0],
        args[1].x,
        args[1].y,
        args[2],
        args[3].toRenderStyle(),
        args[4],
        args[5] ? fontableToString(args[5]) : undefined,
        args[6] as RenderTextAlign,
        args[7] as RenderTextBaseline
      )
      return
    }
    if (
      typeof args[0] === 'string' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'string' &&
      (typeof args[5] === 'number' || typeof args[5] === 'undefined') &&
      (isFontable(args[6]) || typeof args[6] === 'undefined') &&
      (typeof args[7] === 'string' || typeof args[7] === 'undefined') &&
      (typeof args[8] === 'string' || typeof args[8] === 'undefined')
    ) {
      this.renderer.strokeText(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4] as RenderStyle,
        args[5],
        args[6] ? fontableToString(args[6]) : undefined,
        args[7] as RenderTextAlign,
        args[8] as RenderTextBaseline
      )
      return
    }
    if (
      typeof args[0] === 'string' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      isRenderStylable(args[4]) &&
      (typeof args[5] === 'number' || typeof args[5] === 'undefined') &&
      (isFontable(args[6]) || typeof args[6] === 'undefined') &&
      (typeof args[7] === 'string' || typeof args[7] === 'undefined') &&
      (typeof args[8] === 'string' || typeof args[8] === 'undefined')
    ) {
      this.renderer.strokeText(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4].toRenderStyle(),
        args[5],
        args[6] ? fontableToString(args[6]) : undefined,
        args[7] as RenderTextAlign,
        args[8] as RenderTextBaseline
      )
      return
    }

    throw new TypeError(
      this.constructor.name + '.strokeText: invalid arguments.'
    )
  }

  img(img: RenderImage, pos: Pointable, size?: Sizeable): void

  img(img: RenderImage, pos: Pointable, width?: number, height?: number): void

  img(img: RenderImage, x: number, y: number, size?: Sizeable): void

  img(
    img: RenderImage,
    x: number,
    y: number,
    width?: number,
    height?: number
  ): void

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  img(
    ...args:
      | [img: RenderImage, pos: Pointable, size?: Sizeable]
      | [img: RenderImage, pos: Pointable, width?: number, height?: number]
      | [img: RenderImage, x: number, y: number, size?: Sizeable]
      | [
          img: RenderImage,
          x: number,
          y: number,
          width?: number,
          height?: number
        ]
  ) {
    if (
      isRenderImage(args[0]) &&
      isPointable(args[1]) &&
      (isSizeable(args[2]) || typeof args[2] === 'undefined')
    ) {
      this.renderer.img(
        args[0],
        args[1].x,
        args[1].y,
        args[2]?.width,
        args[2]?.height
      )
      return
    }
    if (
      isRenderImage(args[0]) &&
      isPointable(args[1]) &&
      (typeof args[2] === 'number' || typeof args[2] === 'undefined') &&
      (typeof args[3] === 'number' || typeof args[3] === 'undefined')
    ) {
      this.renderer.img(args[0], args[1].x, args[1].y, args[2], args[3])
      return
    }
    if (
      isRenderImage(args[0]) &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      (isSizeable(args[3]) || typeof args[3] === 'undefined')
    ) {
      this.renderer.img(
        args[0],
        args[1],
        args[2],
        args[3]?.width,
        args[3]?.height
      )
      return
    }
    if (
      isRenderImage(args[0]) &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      (typeof args[3] === 'number' || typeof args[3] === 'undefined') &&
      (typeof args[4] === 'number' || typeof args[4] === 'undefined')
    ) {
      this.renderer.img(args[0], args[1], args[2], args[3], args[4])
      return
    }

    throw new TypeError(this.constructor.name + '.img: invalid arguments.')
  }
}
