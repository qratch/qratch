import { ComponentEvent } from '@/Component'
import { Component } from '@/Component/Component'
import { QratchApp } from '@/Qratch'

/**
 * ComponentManageable interface.
 */
export interface ComponentManageable<App extends QratchApp = QratchApp> {
  /**
   * install the given component.
   *
   * @param component component.
   */
  install(component: Component<App>): void

  /**
   * call the each components method.
   *
   * @param method hook method.
   * @param arddgs hook arguments array.
   */
  call<T extends keyof ComponentEvent>(method: T): void
}
