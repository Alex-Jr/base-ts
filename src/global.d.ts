declare global {
  namespace NodeJS {
    interface ProcessEnv {
      LOG_LEVEL: "error" | "info" | "warn";
      NODE_ENV: "development" | "production" | "test";
    }
  }
}

export {};
