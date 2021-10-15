import { ComponentEvent } from '@/Component'
import { Component } from '@/Component/Component'
import { QratchApp } from '@/Qratch'
import { ComponentManageable } from './ComponentManageable'

/**
 * ComponentManager class.
 */
export class ComponentManager<App extends QratchApp = QratchApp>
  implements ComponentManageable
{
  /**
   * components.
   */
  private components: Component<App>[] = []

  /**
   * ComponentManager constructor.
   *
   * @param app the application.
   */
  constructor(protected app: App) {}

  install(component: Component<App>): void {
    this.components.push(component)

    if (component.install) {
      component.install(this.app)
    }
  }

  call<T extends keyof ComponentEvent>(method: T): void {
    for (const c of this.components) {
      const fn = c[method]

      if (fn) {
        fn.bind(c)()
      }
    }
  }
}
