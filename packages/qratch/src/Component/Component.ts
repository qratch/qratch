import { QratchApp } from '@/Qratch'

/**
 * ComponentEvent interface.
 */
export interface ComponentEvent {
  /**
   * call when the component uninstalled.
   */
  uninstall?(): void

  /**
   * call when the application is initialized.
   */
  init?(): void

  /**
   * call before the application starts.
   */
  beforeStart?(): void

  /**
   * call when the application started.
   */
  started?(): void

  /**
   * call before the tick starts.
   */
  beforeTick?(): void

  /**
   * call when the tick is ended.
   */
  tickEnded?(): void
}

/**
 * Component interface.
 */
export interface Component<T extends QratchApp = QratchApp>
  extends ComponentEvent {
  /**
   * install to the application.
   *
   * @param app the application.
   */
  install?(app: T): void
}
