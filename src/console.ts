import consola, { ConsolaLogObject } from 'consola';
import chalk from 'chalk';

/**
 * 普通提示
 * @param message
 * @param args
 */
export function log(message: ConsolaLogObject | any, ...args: any[]): void {
  consola.log(message, ...args);
}

/**
 * 错误提示
 * @param message
 * @param args
 */
export function error(message: ConsolaLogObject | any, ...args: any[]): void {
  consola.error(chalk.magenta(message), ...args);
}

/**
 * 信息提示
 * @param message
 * @param args
 */
export function info(message: ConsolaLogObject | any, ...args: any[]): void {
  consola.info(chalk.yellowBright(message), ...args);
}

/**
 * 警告信息提示
 * @param message
 * @param args
 */
export function warn(message: ConsolaLogObject | any, ...args: any[]): void {
  consola.warn(chalk.blue(message), ...args);
}

/**
 * 弱提示
 * @param message
 * @param args
 */
export function tips(message: ConsolaLogObject | any, ...args: any[]): void {
  consola.log(chalk.yellow(`-> ${message}`), ...args);
}

/**
 * 成功提示
 * @param message
 * @param args
 */
export function success(message: ConsolaLogObject | any, ...args: any[]): void {
  consola.success(chalk.cyan(message), ...args);
}

/**
 * table展示信息
 * @param tabularData
 * @param properties
 */
export function table(tabularData: any, properties?: ReadonlyArray<string>): void {
  // eslint-disable-next-line no-console
  console.table(tabularData, properties);
}
