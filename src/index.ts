import { Logger } from "./services/logger.service";

const logger = new Logger({});

export function sum(a: number, b: number): number {
  logger.info("Calculating sum", { a, b });

  return a + b;
}

sum(1, 2);
