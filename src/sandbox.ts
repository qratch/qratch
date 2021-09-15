import { CanvasRenderer } from './CanvasRenderer/CanvasRenderer'
import { HTMLElementCursor } from './HTMLElementCursor/HTMLElementCursor'
import { HTMLElementKeyboard } from './HTMLElementKeyboard/HTMLElementKeyboard'
import { RendererController } from './RendererController/RendererController'
import { Vec2 } from './Vec2/Vec2'

const canvas = document.getElementById('canvas')

if (!canvas) {
  throw new Error('could not find canvas')
}

const r = new CanvasRenderer(canvas as HTMLCanvasElement)
const c = new RendererController(r)
const keyboard = new HTMLElementKeyboard(canvas)
const cursor = new HTMLElementCursor(canvas)
let count = 0
let fpsCount = 0
let fps = 0
const pos = new Vec2(0, 0)

const frame = () => {
  count++
  fpsCount++

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
  c.fillText(`${count}:${fps}`, 8, 16, 'black')

  pos.set(cursor)

  c.fillArc(pos, 16, 0, Math.PI * 2, 'blue')

  keyboard.onFrameEnd()
  cursor.onFrameEnd()
  requestAnimationFrame(frame)
}

frame()

setInterval(() => {
  fps = fpsCount
  fpsCount = 0
}, 1000)
