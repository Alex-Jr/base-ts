import { JSONValue } from "../types/jsonValue.type";

export interface ILogger {
  error(message: string, data: JSONValue): void;
  info(message: string, data: JSONValue): void;
  warn(message: string, data: JSONValue): void;
}

export type LogLevel = "error" | "info" | "warn";
