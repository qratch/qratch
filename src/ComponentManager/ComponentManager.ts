import { Component } from '@/Component/Component'
import { ComponentManageable } from './ComponentManageable'

/**
 * ComponentManager class.
 */
export class ComponentManager implements ComponentManageable {
  /**
   * components.
   */
  private components: Component[] = []

  install(component: Component): void {
    this.components.push(component)

    if (component['onInstall']) {
      component['onInstall']()
    }
  }

  call<T extends keyof Component>(method: T): void {
    for (const c of this.components) {
      const fn = c[method]

      if (fn) {
        fn.call(c)
      }
    }
  }
}
