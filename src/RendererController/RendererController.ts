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
import { isSizeable } from '@/Size/isSizeable'
import { Sizeable } from '@/Size/Sizeable'
import { RendererControllable } from './RendererControllable'

/**
 * RendererController class.
 */
export class RendererController implements RendererControllable {
  constructor(protected readonly renderer: Renderable) {}

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  fillRect(
    ...args:
      | [pos: Pointable, size: Sizeable, style: RenderStyle]
      | [pos: Pointable, width: number, height: number, style: RenderStyle]
      | [x: number, y: number, size: Sizeable, style: RenderStyle]
      | [
          x: number,
          y: number,
          width: number,
          height: number,
          style: RenderStyle
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

    throw new TypeError(this.constructor.name + '.fillRect: invalid arguments.')
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  strokeRect(
    ...args:
      | [pos: Pointable, size: Sizeable, lineWidth: number, style: RenderStyle]
      | [
          pos: Pointable,
          width: number,
          height: number,
          lineWidth: number,
          style: RenderStyle
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
          width: number,
          height: number,
          lineWidth: number,
          style: RenderStyle
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

    throw new TypeError(
      this.constructor.name + '.strokeRect: invalid arguments.'
    )
  }

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
          x2: number,
          y2: number,
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
          style: RenderStyle
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

    throw new TypeError(this.constructor.name + '.line: invalid arguments.')
  }

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
          x: number,
          y: number,
          radius: number,
          startAngle: number,
          endAngle: number,
          style: RenderStyle,
          anticlockwise?: boolean
        ]
  ) {
    if (
      isPointable(args[0]) &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'string' &&
      typeof args[5] === 'boolean'
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
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'number' &&
      typeof args[5] === 'string' &&
      typeof args[6] === 'boolean'
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

    throw new TypeError(this.constructor.name + '.fillArc: invalid arguments.')
  }

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
          x: number,
          y: number,
          radius: number,
          startAngle: number,
          endAngle: number,
          lineWidth: number,
          style: RenderStyle,
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
      typeof args[6] === 'boolean'
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
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'number' &&
      typeof args[5] === 'number' &&
      typeof args[6] === 'string' &&
      typeof args[7] === 'boolean'
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

    throw new TypeError(
      this.constructor.name + '.strokeArc: invalid arguments.'
    )
  }

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
  ) {
    if (
      isPointable(args[0]) &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'number' &&
      typeof args[5] === 'number' &&
      typeof args[6] === 'string' &&
      typeof args[7] === 'boolean'
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
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'number' &&
      typeof args[5] === 'number' &&
      typeof args[6] === 'number' &&
      typeof args[7] === 'string' &&
      typeof args[8] === 'boolean'
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

    throw new TypeError(
      this.constructor.name + '.fillEllipse: invalid arguments.'
    )
  }

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
      typeof args[8] === 'boolean'
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
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'number' &&
      typeof args[5] === 'number' &&
      typeof args[6] === 'number' &&
      typeof args[7] === 'number' &&
      typeof args[8] === 'string' &&
      typeof args[9] === 'boolean'
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

    throw new TypeError(
      this.constructor.name + '.strokeEllipse: invalid arguments.'
    )
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  fillPolygon(
    ...args: [points: (RenderPolygonPoint | Pointable)[], style: RenderStyle]
  ) {
    if (Array.isArray(args[0]) && typeof args[1] === 'string') {
      this.renderer.fillPolygon(
        args[0].map((v) => (isPointable(v) ? [v.x, v.y] : v)),
        args[1] as RenderStyle
      )
      return
    }

    throw new TypeError(
      this.constructor.name + '.fillPolygon: invalid arguments.'
    )
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  strokePolygon(
    ...args: [
      points: (RenderPolygonPoint | Pointable)[],
      lineWidth: number,
      style: RenderStyle
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

    throw new TypeError(
      this.constructor.name + '.strokePolygon: invalid arguments.'
    )
  }

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
          x: number,
          y: number,
          style: RenderStyle,
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
      typeof args[3] === 'number' &&
      isFontable(args[4]) &&
      typeof args[5] === 'string' &&
      typeof args[6] === 'string'
    ) {
      this.renderer.fillText(
        args[0],
        args[1].x,
        args[1].y,
        args[2] as RenderStyle,
        args[3],
        fontableToString(args[4]),
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
      typeof args[4] === 'number' &&
      isFontable(args[5]) &&
      typeof args[6] === 'string' &&
      typeof args[7] === 'string'
    ) {
      this.renderer.fillText(
        args[0],
        args[1],
        args[2],
        args[3] as RenderStyle,
        args[4],
        fontableToString(args[5]),
        args[6] as RenderTextAlign,
        args[7] as RenderTextBaseline
      )
      return
    }

    throw new TypeError(this.constructor.name + '.fillText: invalid arguments.')
  }

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
          x: number,
          y: number,
          lineWidth: number,
          style: RenderStyle,
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
      typeof args[4] === 'number' &&
      isFontable(args[5]) &&
      typeof args[6] === 'string' &&
      typeof args[7] === 'string'
    ) {
      this.renderer.strokeText(
        args[0],
        args[1].x,
        args[1].y,
        args[2],
        args[3] as RenderStyle,
        args[4],
        fontableToString(args[5]),
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
      typeof args[5] === 'number' &&
      isFontable(args[6]) &&
      typeof args[7] === 'string' &&
      typeof args[8] === 'string'
    ) {
      this.renderer.strokeText(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4] as RenderStyle,
        args[5],
        fontableToString(args[6]),
        args[7] as RenderTextAlign,
        args[8] as RenderTextBaseline
      )
      return
    }

    throw new TypeError(
      this.constructor.name + '.strokeText: invalid arguments.'
    )
  }

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
    if (isRenderImage(args[0]) && isPointable(args[1]) && isSizeable(args[2])) {
      this.renderer.img(
        args[0],
        args[1].x,
        args[1].y,
        args[2].width,
        args[2].height
      )
      return
    }
    if (
      isRenderImage(args[0]) &&
      isPointable(args[1]) &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number'
    ) {
      this.renderer.img(args[0], args[1].x, args[1].y, args[2], args[3])
      return
    }
    if (
      isRenderImage(args[0]) &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      isSizeable(args[3])
    ) {
      this.renderer.img(
        args[0],
        args[1],
        args[2],
        args[3].width,
        args[3].height
      )
      return
    }
    if (
      isRenderImage(args[0]) &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'number'
    ) {
      this.renderer.img(args[0], args[1], args[2], args[3], args[4])
      return
    }

    throw new TypeError(this.constructor.name + '.img: invalid arguments.')
  }
}
