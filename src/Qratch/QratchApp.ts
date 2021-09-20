import { ComponentManager } from '@/ComponentManager/ComponentManager'
import { Cursor } from '@/Cursor/Cursor'
import { Drawable } from '@/Drawer/Drawable'
import { Drawer } from '@/Drawer/Drawer'
import { Keyboard } from '@/Keyboard/Keyboard'
import { Mouse } from '@/Mouse/Mouse'
import { Renderable } from '@/Renderer/Renderable'
import { Ticker } from '@/Ticker/Ticker'
import { QratchAppOptions } from './QratchAppOptions'

/**
 * QratchApp abstract class.
 */
export abstract class QratchApp {
  /**
   * ticker.
   */
  ticker: Ticker

  /**
   * renderer.
   */
  renderer: Renderable

  /**
   * mouse.
   */
  mouse: Mouse

  /**
   * cursor.
   */
  cursor: Cursor

  /**
   * keyboard.
   */
  keyboard: Keyboard

  /**
   * drawer.
   */
  drawer: Drawable

  /**
   * component manager.
   */
  components: ComponentManager

  /**
   * QratchApp constructor.
   *
   * @param options options.
   */
  constructor(options: QratchAppOptions) {
    // initialize component manager.
    this.components = new ComponentManager()

    // set default components.
    this.ticker = options.ticker
    this.renderer = options.renderer
    this.mouse = options.mouse
    this.cursor = options.cursor
    this.keyboard = options.keyboard

    // install default components.
    this.components.install(this.ticker)
    this.components.install(this.renderer)
    this.components.install(this.mouse)
    this.components.install(this.cursor)
    this.components.install(this.keyboard)

    // initialize drawer.
    this.drawer = new Drawer(this.renderer)

    // initialize application.
    this.init()
    this.components.call('onInit')
  }

  /**
   * start ticker.
   */
  private startTicker(): void {
    this.ticker.addCallback(() => {
      // frame start.
      this.components.call('onFrameStart')

      // frame.
      this.frame()

      // frame end.
      this.components.call('onFrameEnd')
    })

    // ticker start.
    this.ticker.start()
    this.components.call('onFrameTickerStart')
  }

  /**
   * start application
   */
  start(): void {
    this.startTicker()
  }

  /**
   * call on application initialization.
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected init(): void {}

  /**
   * call on frame.
   */
  protected abstract frame(): void
}
