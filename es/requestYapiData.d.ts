/// <reference types="lodash" />
import { CategoryList, Category, Project, SyntheticalConfig } from './types';
/**
 *
 * @param url 请求方法
 * @param query
 * @returns
 */
export declare const fetchApi: <T = any>(url: string, query: Record<string, any>) => Promise<T>;
/**
 * 获取项目基本信息
 * 缓存
 */
export declare const fetchProject: (({ serverUrl, token }: SyntheticalConfig) => Promise<Project>) & import("lodash").MemoizedFunction;
/**
 * 通过导出接口获取项目下的所有接口
 */
export declare const fetchExport: (({ serverUrl, token }: SyntheticalConfig) => Promise<Category[]>) & import("lodash").MemoizedFunction;
/**
 * 获取
 * @param param0
 * @returns
 */
export declare const fetchInterfaceList: ({ serverUrl, token, id }: SyntheticalConfig) => Promise<Category[]>;
/**
 * 获取项目信息
 * @param syntheticalConfig
 * @returns
 */
export declare const fetchProjectInfo: (syntheticalConfig: SyntheticalConfig) => Promise<{
    cats: CategoryList;
    getMockUrl: () => string;
    getDevUrl: (devEnvName: string) => string;
    getProdUrl: (prodEnvName: string) => string;
    _id: number;
    name: string;
    desc: string;
    basepath: string;
    tag: string[];
    env: {
        name: string;
        domain: string;
    }[];
}>;
