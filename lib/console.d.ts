import { ConsolaLogObject } from 'consola';
/**
 * 普通提示
 * @param message
 * @param args
 */
export declare function log(message: ConsolaLogObject | any, ...args: any[]): void;
/**
 * 错误提示
 * @param message
 * @param args
 */
export declare function error(message: ConsolaLogObject | any, ...args: any[]): void;
/**
 * 信息提示
 * @param message
 * @param args
 */
export declare function info(message: ConsolaLogObject | any, ...args: any[]): void;
/**
 * 警告信息提示
 * @param message
 * @param args
 */
export declare function warn(message: ConsolaLogObject | any, ...args: any[]): void;
/**
 * 弱提示
 * @param message
 * @param args
 */
export declare function tips(message: ConsolaLogObject | any, ...args: any[]): void;
/**
 * 成功提示
 * @param message
 * @param args
 */
export declare function success(message: ConsolaLogObject | any, ...args: any[]): void;
/**
 * table展示信息
 * @param tabularData
 * @param properties
 */
export declare function table(tabularData: any, properties?: ReadonlyArray<string>): void;
