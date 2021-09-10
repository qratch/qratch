import { CanvasRenderer } from './CanvasRenderer/CanvasRenderer'
import { RendererController } from './RendererController/RendererController'

const canvas = document.getElementById('canvas')

if (!canvas) {
  throw new Error('could not find canvas')
}

const r = new CanvasRenderer(canvas as HTMLCanvasElement)
const c = new RendererController(r)

c.fillRect(0, 0, 32, 32)
