import { Keyboard, KeyCode, KEY_CODES } from 'qratch'

type KeyState = {
  isPressed: boolean
  isUp: boolean
  isDown: boolean
}

/**
 * HTMLElementKeyboard class.
 */
export class HTMLElementKeyboard implements Keyboard {
  /**
   * key states.
   */
  private readonly keyStates: {
    [K in KeyCode]: KeyState
  }

  /**
   * HTMLElementKeyboard constructor.
   *
   * @param element html element.
   */
  constructor(private readonly element: HTMLElement) {
    this.keyStates = {} as HTMLElementKeyboard['keyStates']
    for (const key of KEY_CODES) {
      this.keyStates[key] = {
        isPressed: false,
        isUp: false,
        isDown: false,
      }
    }

    const eventKeyToCode = (key: string): KeyCode => {
      if (key === ' ') {
        return 'Space'
      }

      return key as KeyCode
    }

    element.addEventListener('keydown', (event) => {
      if (!event.key) {
        return
      }

      const code = eventKeyToCode(event.key)
      this.keyStates[code].isDown = !event.repeat
      this.keyStates[code].isUp = false
      this.keyStates[code].isPressed = true
    })

    element.addEventListener('keyup', (event) => {
      if (!event.key) {
        return
      }

      const code = eventKeyToCode(event.key)
      this.keyStates[code].isDown = false
      this.keyStates[code].isUp = true
      this.keyStates[code].isPressed = false
    })
  }

  pressed(code: KeyCode): boolean {
    return this.keyStates[code].isPressed ?? false
  }

  up(code: KeyCode): boolean {
    return this.keyStates[code].isUp ?? false
  }

  down(code: KeyCode): boolean {
    return this.keyStates[code].isDown ?? false
  }

  onFrameEnd(): void {
    for (const code of KEY_CODES) {
      this.keyStates[code] = {
        ...this.keyStates[code],
        isUp: false,
      }
    }
  }
}
