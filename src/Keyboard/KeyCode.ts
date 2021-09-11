type Characters<S extends string, O = ''> = S extends ''
  ? O
  : S extends `${infer C}${infer A}`
  ? Characters<A, O extends '' ? C : O | C>
  : never

type Alphabets = Characters<'abcdefghijklmnopqrstuvwxyz'>

// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values#modifier_keys
type Modifiers =
  | 'Alt'
  | 'CapsLock'
  | 'Control'
  | 'Fn'
  | 'NumLock'
  | 'ScrollLock'
  | 'Shift'

// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values#whitespace_keys
// ' ' => 'Space'
type Whitespaces = 'Enter' | 'Tab' | 'Space'

// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values#navigation_keys
type Navigations = 'ArrowDown' | 'ArrowLeft' | 'ArrowRight' | 'ArrowUp'

// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values#editing_keys
type Editings = 'Backspace'

// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values#ui_keys
type UIs = 'Escape'

/**
 * KeyCode type.
 */
export type KeyCode =
  | Alphabets
  | Modifiers
  | Whitespaces
  | Navigations
  | Editings
  | UIs
