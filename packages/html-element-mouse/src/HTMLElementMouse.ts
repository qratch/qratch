import { Mouse, MouseButtonCode, MOUSE_BUTTON_CODES } from 'qratch'

type ButtonState = {
  isPressed: boolean
  isUp: boolean
  isDown: boolean
}

/**
 * HTMLElementMouse class.
 */
export class HTMLElementMouse implements Mouse {
  /**
   * button states.
   */
  private readonly buttonStates: {
    [K in MouseButtonCode]: ButtonState
  } = {
    Left: {
      isPressed: false,
      isUp: false,
      isDown: false,
    },
    Middle: {
      isPressed: false,
      isUp: false,
      isDown: false,
    },
    Right: {
      isPressed: false,
      isUp: false,
      isDown: false,
    },
  }

  private wheelValue = 0

  /**
   * HTMLElementMouse constructor.
   *
   * @param element HTML element.
   */
  constructor(private readonly element: HTMLElement) {
    const buttonToButtonCode = (button: number): MouseButtonCode => {
      return MOUSE_BUTTON_CODES[button] as MouseButtonCode
    }

    element.addEventListener('mousedown', (event) => {
      if (event.button > 2) {
        return
      }

      const code = buttonToButtonCode(event.button)
      this.buttonStates[code].isDown = true
      this.buttonStates[code].isPressed = true
    })

    element.addEventListener('mouseup', (event) => {
      if (event.button > 2) {
        return
      }

      const code = buttonToButtonCode(event.button)
      this.buttonStates[code].isUp = true
      this.buttonStates[code].isPressed = false
    })

    element.addEventListener('wheel', (event) => {
      this.wheelValue = event.deltaY
    })
  }

  pressed(code: MouseButtonCode): boolean {
    return this.buttonStates[code].isPressed
  }

  down(code: MouseButtonCode): boolean {
    return this.buttonStates[code].isDown
  }

  up(code: MouseButtonCode): boolean {
    return this.buttonStates[code].isUp
  }

  wheel(): number {
    return this.wheelValue
  }

  tickEnded(): void {
    for (const code of MOUSE_BUTTON_CODES) {
      this.buttonStates[code] = {
        ...this.buttonStates[code],
        isUp: false,
        isDown: false,
      }
    }

    this.wheelValue = 0
  }
}
