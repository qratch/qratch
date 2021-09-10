import { CanvasRenderer } from './CanvasRenderer/CanvasRenderer'
import { RendererController } from './RendererController/RendererController'

const canvas = document.getElementById('canvas')

if (!canvas) {
  throw new Error('could not find canvas')
}

const r = new CanvasRenderer(canvas as HTMLCanvasElement)
const c = new RendererController(r)

c.fillArc(16, 16, 16, 0, Math.PI * 2, 'red')
c.fillEllipse(64, 24, 16, 24, 0, 0, Math.PI * 2, 'blue')
c.fillPolygon(
  [
    [100, 0],
    [100, 20],
    [150, 50],
  ],
  'green'
)
c.fillRect(200, 0, 64, 32, 'blue')
c.fillText('hello qratch', 0, 64, '#202020')
