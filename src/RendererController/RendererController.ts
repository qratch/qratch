import { isFontable } from '@/Font/isFontable'
import { isPointable } from '@/Pointable/isPointable'
import { isRenderImage } from '@/Renderer/isRenderImage'
import { Renderable } from '@/Renderer/Renderable'
import { RenderLineCap } from '@/Renderer/RenderLineCap'
import { RenderStyle } from '@/Renderer/RenderStyle'
import { RenderTextAlign } from '@/Renderer/RenderTextAlign'
import { isSizeable } from '@/Size/isPointable'

/**
 * RendererController class.
 */
export class RendererController {
  constructor(protected readonly renderer: Renderable) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  fillRect(...args: any[]) {
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
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  strokeRect(...args: any[]) {
    if (
      isPointable(args[0]) &&
      isSizeable(args[1]) &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'string'
    ) {
      this.renderer.strokeRect(
        args[0].x,
        args[0].y,
        args[1].width,
        args[1].height,
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
      typeof args[4] === 'number' &&
      typeof args[5] === 'string'
    ) {
      this.renderer.strokeRect(
        args[0].x,
        args[0].y,
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
      isSizeable(args[2]) &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'number' &&
      typeof args[5] === 'string'
    ) {
      this.renderer.strokeRect(
        args[0],
        args[1],
        args[2].width,
        args[2].height,
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
      typeof args[5] === 'number' &&
      typeof args[6] === 'string'
    ) {
      this.renderer.strokeRect(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4],
        args[5],
        args[6] as RenderStyle
      )
      return
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  line(...args: any[]) {
    if (
      isPointable(args[0]) &&
      isPointable(args[1]) &&
      typeof args[2] === 'string' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'string'
    ) {
      this.renderer.line(
        args[0].x,
        args[0].y,
        args[1].x,
        args[1].y,
        args[2] as RenderStyle,
        args[3],
        args[4] as RenderLineCap
      )
      return
    }
    if (
      isPointable(args[0]) &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'string' &&
      typeof args[4] === 'number' &&
      typeof args[5] === 'string'
    ) {
      this.renderer.line(
        args[0].x,
        args[0].y,
        args[1],
        args[2],
        args[3] as RenderStyle,
        args[4],
        args[5] as RenderLineCap
      )
      return
    }
    if (
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      isPointable(args[2]) &&
      typeof args[3] === 'string' &&
      typeof args[4] === 'number' &&
      typeof args[5] === 'string'
    ) {
      this.renderer.line(
        args[0],
        args[1],
        args[2].x,
        args[2].y,
        args[3] as RenderStyle,
        args[4],
        args[5] as RenderLineCap
      )
      return
    }
    if (
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'string' &&
      typeof args[5] === 'number' &&
      typeof args[6] === 'string'
    ) {
      this.renderer.line(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4] as RenderStyle,
        args[5],
        args[6] as RenderLineCap
      )
      return
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  fillArc(...args: any[]) {
    if (
      isPointable(args[0]) &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'boolean' &&
      typeof args[5] === 'string'
    ) {
      this.renderer.fillArc(
        args[0].x,
        args[0].y,
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
      typeof args[5] === 'boolean' &&
      typeof args[6] === 'string'
    ) {
      this.renderer.fillArc(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4],
        args[5],
        args[6] as RenderStyle
      )
      return
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  strokeArc(...args: any[]) {
    if (
      isPointable(args[0]) &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'boolean' &&
      typeof args[5] === 'number' &&
      typeof args[6] === 'number' &&
      typeof args[7] === 'string'
    ) {
      this.renderer.strokeArc(
        args[0].x,
        args[0].y,
        args[1],
        args[2],
        args[3],
        args[4],
        args[5],
        args[6],
        args[7] as RenderStyle
      )
      return
    }
    if (
      typeof args[0] === 'number' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'number' &&
      typeof args[5] === 'boolean' &&
      typeof args[6] === 'number' &&
      typeof args[7] === 'number' &&
      typeof args[8] === 'string'
    ) {
      this.renderer.strokeArc(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4],
        args[5],
        args[6],
        args[7],
        args[8] as RenderStyle
      )
      return
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  fillPolygon(...args: any[]) {
    if (
      isPointable(args[0]) &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'string'
    ) {
      this.renderer.fillPolygon(
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
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'number' &&
      typeof args[5] === 'string'
    ) {
      this.renderer.fillPolygon(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4],
        args[5] as RenderStyle
      )
      return
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  strokePolygon(...args: any[]) {
    if (
      isPointable(args[0]) &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'number' &&
      typeof args[5] === 'number' &&
      typeof args[6] === 'string'
    ) {
      this.renderer.strokePolygon(
        args[0].x,
        args[0].y,
        args[1],
        args[2],
        args[3],
        args[4],
        args[5],
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
      typeof args[5] === 'number' &&
      typeof args[6] === 'number' &&
      typeof args[7] === 'string'
    ) {
      this.renderer.strokePolygon(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4],
        args[5],
        args[6],
        args[7] as RenderStyle
      )
      return
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  fillText(...args: any[]) {
    if (
      typeof args[0] === 'string' &&
      isPointable(args[1]) &&
      isFontable(args[2]) &&
      typeof args[3] === 'string' &&
      typeof args[4] === 'string'
    ) {
      this.renderer.fillText(
        args[0],
        args[1].x,
        args[1].y,
        args[2].font,
        args[2].size,
        args[3] as RenderTextAlign,
        args[4] as RenderStyle
      )
      return
    }
    if (
      typeof args[0] === 'string' &&
      isPointable(args[1]) &&
      typeof args[2] === 'string' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'string' &&
      typeof args[5] === 'string'
    ) {
      this.renderer.fillText(
        args[0],
        args[1].x,
        args[1].y,
        args[2],
        args[3],
        args[4] as RenderTextAlign,
        args[5] as RenderStyle
      )
      return
    }
    if (
      typeof args[0] === 'string' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      isFontable(args[3]) &&
      typeof args[4] === 'string' &&
      typeof args[5] === 'string'
    ) {
      this.renderer.fillText(
        args[0],
        args[1],
        args[2],
        args[3].font,
        args[3].size,
        args[4] as RenderTextAlign,
        args[5] as RenderStyle
      )
      return
    }
    if (
      typeof args[0] === 'string' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'string' &&
      typeof args[4] === 'number' &&
      typeof args[5] === 'string' &&
      typeof args[6] === 'string'
    ) {
      this.renderer.fillText(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4],
        args[5] as RenderTextAlign,
        args[6] as RenderStyle
      )
      return
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  strokeText(...args: any[]) {
    if (
      typeof args[0] === 'string' &&
      isPointable(args[1]) &&
      isFontable(args[2]) &&
      typeof args[3] === 'string' &&
      typeof args[4] === 'number' &&
      typeof args[5] === 'number' &&
      typeof args[6] === 'string'
    ) {
      this.renderer.strokeText(
        args[0],
        args[1].x,
        args[1].y,
        args[2].font,
        args[2].size,
        args[3] as RenderTextAlign,
        args[4],
        args[5],
        args[6] as RenderStyle
      )
      return
    }
    if (
      typeof args[0] === 'string' &&
      isPointable(args[1]) &&
      typeof args[2] === 'string' &&
      typeof args[3] === 'number' &&
      typeof args[4] === 'string' &&
      typeof args[5] === 'number' &&
      typeof args[6] === 'number' &&
      typeof args[7] === 'string'
    ) {
      this.renderer.strokeText(
        args[0],
        args[1].x,
        args[1].y,
        args[2],
        args[3],
        args[4] as RenderTextAlign,
        args[5],
        args[6],
        args[7] as RenderStyle
      )
      return
    }
    if (
      typeof args[0] === 'string' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      isFontable(args[3]) &&
      typeof args[4] === 'string' &&
      typeof args[5] === 'number' &&
      typeof args[6] === 'number' &&
      typeof args[7] === 'string'
    ) {
      this.renderer.strokeText(
        args[0],
        args[1],
        args[2],
        args[3].font,
        args[3].size,
        args[4] as RenderTextAlign,
        args[5],
        args[6],
        args[7] as RenderStyle
      )
      return
    }
    if (
      typeof args[0] === 'string' &&
      typeof args[1] === 'number' &&
      typeof args[2] === 'number' &&
      typeof args[3] === 'string' &&
      typeof args[4] === 'number' &&
      typeof args[5] === 'string' &&
      typeof args[6] === 'number' &&
      typeof args[7] === 'number' &&
      typeof args[8] === 'string'
    ) {
      this.renderer.strokeText(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4],
        args[5] as RenderTextAlign,
        args[6],
        args[7],
        args[8] as RenderStyle
      )
      return
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  img(...args: any[]) {
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
  }
}
