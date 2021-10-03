import { Component } from '@/Component/Component'

/**
 * ComponentManageable interface.
 */
export interface ComponentManageable {
  /**
   * install the given component.
   *
   * @param component component.
   */
  install(component: Component): void

  /**
   * call the each components method.
   *
   * @param method hook method.
   * @param arddgs hook arguments array.
   */
  call<T extends keyof Component>(method: T): void
}
