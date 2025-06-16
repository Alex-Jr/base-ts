import util from 'util';

import { ILogger, LogLevel } from "../interfaces/logger.interface";
import { JSONValue } from "../types/jsonValue.type";


const logFunctions = {
  error: console.error,
  info: console.log,
  warn: console.warn,
}

const logLevels = {
  error: 0,
  info: 2,
  warn: 1,
}

export class Logger implements ILogger {
  private readonly depth: number;
  private readonly loggerLevel: LogLevel;

  constructor({
    depth = 10,
    loggerLevel = 'info',
  }: {
    depth?: number;
    loggerLevel?: LogLevel;
  }) { 
    this.depth = depth;
    this.loggerLevel = loggerLevel;
  }

  error(message: string, data: JSONValue): void {
    this.log('error', message, data);
  }

  info(message: string, data: JSONValue): void {
    this.log('info', message, data);
  }

  warn(message: string, data: JSONValue): void {
    this.log('warn', message, data);
  }

  private log(level: 'error' | 'info' | 'warn', message: string, data: JSONValue): void {
    if (!this.shouldLog(level)) {
      return;
    }

    logFunctions[level](util.inspect({
      data,
      level,
      message,
      timestamp: new Date().toISOString(),
    }, {
      colors: true,
      depth: this.depth,
    }));
  }

  private shouldLog(level: 'error' | 'info' | 'warn'): boolean {
    return logLevels[level] <= logLevels[this.loggerLevel];
  }
}