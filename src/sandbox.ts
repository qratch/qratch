import { CanvasRenderer } from './CanvasRenderer/CanvasRenderer'
import { HTMLElementCursor } from './HTMLElementCursor/HTMLElementCursor'
import { HTMLElementKeyboard } from './HTMLElementKeyboard/HTMLElementKeyboard'
import { HTMLElementMouse } from './HTMLElementMouse/HTMLElementMouse'
import { Drawer } from './Drawer/Drawer'
import { Vec2 } from './Vec2/Vec2'
import { RequestAnimationFrameTicker } from './RequestAnimationFrameTicker/RequestAnimationFrameTicker'
import { Color } from './Color/Color'

const canvas = document.getElementById('canvas')

if (!canvas) {
  throw new Error('could not find canvas')
}

const r = new CanvasRenderer(canvas as HTMLCanvasElement)
const c = new Drawer(r)
const keyboard = new HTMLElementKeyboard(canvas)
const cursor = new HTMLElementCursor(canvas)
const mouse = new HTMLElementMouse(canvas)
let fpsCount = 0
let fps = 0
const pos = new Vec2(0, 0)

const frame = () => {
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

  if (keyboard.pressed('ArrowDown')) {
    pos.y += 1
  }

  c.fillRect(0, 0, 480, 480, 'white')
  c.fillText(`${ticker.frames()}:${fps}`, 8, 16, 'black')

  pos.add(mouse.wheel() / 100)

  c.fillArc(
    pos,
    16,
    0,
    Math.PI * 2,
    mouse.up('Left') ? new Color(0, 0, 1) : new Color(1, 0, 0)
  )

  keyboard.onFrameEnd()
  cursor.onFrameEnd()
  mouse.onFrameEnd()
}

const ticker = new RequestAnimationFrameTicker()
ticker.addCallback(frame)
ticker.start()

setInterval(() => {
  fps = fpsCount
  fpsCount = 0
}, 1000)
