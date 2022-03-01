import winston from "winston";
const { printf } = winston.format;

const customFormat = printf((info) => {
  console.log("统一拦截到的", info);

  const { level, message } = info;
  const time = `${moment().format("YYYY-MM-DD HH:mm:ss")}`;
  return `${time} [${level}]: ${
    isString(message) ? message : JSON.stringify(message)
  }`;
});

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(winston.format.splat(), customFormat),
  defaultMeta: { service: "user-service" },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log", level: "info" }),
  ],
});

export default logger;
