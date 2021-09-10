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
c.fillText(
  'Hello Qratch',
  0,
  64,
  'red',
  undefined,
  {
    font: 'Arial',
    size: 32,
  },
  'left',
  'middle'
)
c.img(r['canvas'], 0, 128, 200, 200)
c.line(10, 200, 300, 180, 4, 'butt', 'red')
c.strokeArc(32, 240, 16, 0, Math.PI, 8, 'blue')
c.strokeArc(32, 240, 16, 0, Math.PI, 8, 'red', true)
c.strokeEllipse(128, 240, 32, 16, Math.PI / 3, Math.PI / 3, Math.PI, 4, 'green')
c.strokeEllipse(
  128,
  240,
  32,
  16,
  Math.PI / 3,
  Math.PI / 3,
  Math.PI,
  4,
  'blue',
  true
)
c.strokeRect(100, 280, 64, 32, 12, 'blue')
c.strokeText('Hello Qratch', 100, 340, 4, 'red', 100, {
  font: 'Arial',
  size: '32px',
})
