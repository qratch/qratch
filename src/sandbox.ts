import { CanvasRenderer } from './CanvasRenderer/CanvasRenderer'
import { RendererController } from './RendererController/RendererController'

const canvas = document.getElementById('canvas')

if (!canvas) {
  throw new Error('could not find canvas')
}

const r = new CanvasRenderer(canvas as HTMLCanvasElement)
const c = new RendererController(r)

c.fillArc(16, 16, 16, 0, Math.PI * 2, 'red')
