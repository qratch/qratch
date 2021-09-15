type Characters<S extends string, O = ''> = S extends ''
  ? O
  : S extends `${infer C}${infer A}`
  ? Characters<A, O extends '' ? C : O | C>
  : never

type Items<T extends { [x: number]: string }> = T[number]

const ALPHABETS = 'abcdefghijklmnopqrstuvwxyz' as Characters<'abcdefghijklmnopqrstuvwxyz'>
type Alphabets = typeof ALPHABETS

// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values#modifier_keys
const MODIFIERS = [
  'Alt',
  'CapsLock',
  'Control',
  'Fn',
  'NumLock',
  'ScrollLock',
  'Shift',
] as const
type Modifiers = Items<typeof MODIFIERS>

// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values#whitespace_keys
// ' ' => 'Space'
const WHITESPACES = ['Enter', 'Tab', 'Space'] as const
type Whitespaces = Items<typeof WHITESPACES>

// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values#navigation_keys
const NAVIGATIONS = ['ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp']
type Navigations = Items<typeof NAVIGATIONS>

// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values#editing_keys
const EDITINGS = ['Backsapce']
type Editings = Items<typeof EDITINGS>

// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values#ui_keys
const UIS = ['Escape']
type UIs = Items<typeof UIS>

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

export const KEY_CODES = [
  ...ALPHABETS,
  ...MODIFIERS,
  ...WHITESPACES,
  ...NAVIGATIONS,
  ...EDITINGS,
  ...UIS,
]
