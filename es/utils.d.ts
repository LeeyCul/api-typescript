import { Options } from 'json-schema-to-typescript';
import prettier from 'prettier';
import { Interface, PropDefinitions } from './types';
import { JSONSchema4 } from 'json-schema';
/**
 * 抛出错误。
 *
 * @param msg 错误信息
 */
export declare function throwError(...msg: string[]): never;
/**
 * 将路径统一为 unix 风格的路径。
 *
 * @param path 路径
 * @returns unix 风格的路径
 */
export declare function toUnixPath(path: string): string;
/**
 * 获得规范化的相对路径。
 *
 * @param from 来源路径
 * @param to 去向路径
 * @returns 相对路径
 */
export declare function getNormalizedRelativePath(from: string, to: string): string;
/**
 * 原地处理 JSONSchema。
 *
 * @param jsonSchema 待处理的 JSONSchema
 * @returns 处理后的 JSONSchema
 */
export declare function processJsonSchema<T extends JSONSchema4>(jsonSchema: T): T;
/**
 * 将 JSONSchema 字符串转为 JSONSchema 对象。
 *
 * @param str 要转换的 JSONSchema 字符串
 * @returns 转换后的 JSONSchema 对象
 */
export declare function jsonSchemaStringToJsonSchema(str: string): JSONSchema4;
/**
 * 获得 JSON 数据的 JSONSchema 对象。
 *
 * @param json JSON 数据
 * @returns JSONSchema 对象
 */
export declare function jsonToJsonSchema(json: object): JSONSchema4;
/**
 * 获得 mockjs 模板的 JSONSchema 对象。
 *
 * @param template mockjs 模板
 * @returns JSONSchema 对象
 */
export declare function mockjsTemplateToJsonSchema(template: object): JSONSchema4;
/**
 * 获得属性定义列表的 JSONSchema 对象。
 *
 * @param propDefinitions 属性定义列表
 * @returns JSONSchema 对象
 */
export declare function propDefinitionsToJsonSchema(propDefinitions: PropDefinitions): JSONSchema4;
/**
 * 获取prettier配置
 * @returns
 */
export declare function getPrettier(filePath?: string): prettier.Options;
export declare function JSTTOptions(): Partial<Options>;
/**
 * 根据 JSONSchema 对象生产 TypeScript 类型定义。
 *
 * @param jsonSchema JSONSchema 对象
 * @param typeName 类型名称
 * @returns TypeScript 类型定义
 */
export declare function jsonSchemaToType(jsonSchema: JSONSchema4, typeName: string): Promise<string>;
export declare function getRequestDataJsonSchema(interfaceInfo: Interface): JSONSchema4;
export declare function getResponseDataJsonSchema(interfaceInfo: Interface, dataKey?: string): JSONSchema4;
export declare function sortByWeights<T extends {
    weights: number[];
}>(list: T[]): T[];
/**
 * 格式化代码字符串
 * @param content
 * @param config
 * @returns
 * https://prettier.io/docs/en/options.html
 */
export declare function formatContent(content: string, prettierConfigPath?: string): string;
/**
 * 通用生成文件顶部注释
 * @returns
 */
export declare function topNotesContent(): string;
