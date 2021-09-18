import { RenderStyle } from '@/Renderer/RenderStyle'

/**
 * RenderStylable interface.
 */
export interface RenderStylable {
  /**
   * returns `RenderStyle` object.
   */
  toRenderStyle(): RenderStyle
}
