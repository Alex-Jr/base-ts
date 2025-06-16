export type JSONValue = 
  | boolean
  | JSONValue[]
  | null
  | number
  | string
  | { [key: string]: JSONValue };