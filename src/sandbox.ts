import { CanvasRenderer } from './CanvasRenderer/CanvasRenderer'
import { HTMLElementKeyboard } from './HTMLElementKeyboard/HTMLElementKeyboard'
import { RendererController } from './RendererController/RendererController'
import { Vec2 } from './Vec2/Vec2'

const canvas = document.getElementById('canvas')

if (!canvas) {
  throw new Error('could not find canvas')
}

const r = new CanvasRenderer(canvas as HTMLCanvasElement)
const c = new RendererController(r)
const keyboard = new HTMLElementKeyboard(document.body)
let count = 0
const pos = new Vec2(0, 0)

const frame = () => {
  count++

  if (keyboard.pressed('ArrowLeft')) {
    pos.x -= 1
  }

  if (keyboard.pressed('ArrowRight')) {
    pos.x += 1
  }

  if (keyboard.pressed('ArrowUp')) {
    pos.y -= 1
  }

  if (keyboard.pressed('Space')) {
    pos.y += 1
  }

  c.fillRect(0, 0, 480, 480, 'white')
  c.fillText(`${count}`, 8, 16, 'black')

  c.fillArc(pos, 16, 0, Math.PI * 2, 'blue')

  keyboard.onFrameEnd()
  requestAnimationFrame(frame)
}

frame()
