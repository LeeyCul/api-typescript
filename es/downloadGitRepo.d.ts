import { DownloadGitRepoSettings } from './types';
import { JSONSchema4 } from 'json-schema';
/**
 * 获取下载的目录目录
 * @param props
 * @returns
 */
export declare function getDownloadTargetPath(props: DownloadGitRepoSettings): string;
/**
 * 从json仓库下载接口定义json
 * @param props
 * @returns
 */
export declare function download(props: DownloadGitRepoSettings): Promise<{
    target: string;
    repository: string;
}>;
/**
 * 遍历文件
 * @param target
 * @returns
 */
export declare function mapFile(target: string): any[];
export interface ParsedJsonFileInfo {
    jsonFileDir: string;
    jsonFilePaths: string[];
    renderPaths: {
        name: string;
        dir: string;
        base: string;
        outPath: string;
        jsonFilePath: string;
    }[];
}
export interface ParameterType {
    name: string;
    description: string;
    in?: 'path' | 'query' | 'header' | 'body' | 'formData';
    required: boolean;
    type: string;
    schema?: {
        $ref: string;
    };
}
/**
 * 接口内容格式定义
 */
export interface JsonFileInterfaceInfo {
    summary: string;
    responses: {
        [method: string]: JSONSchema4;
    };
    parameters: ParameterType[];
    tags?: string[];
}
/**
 * JSON文件内容格式定义
 */
export interface JsonFileContentInfo {
    schemes?: string[];
    paths: Record<string, {
        [method: string]: JsonFileInterfaceInfo;
    }>;
    definitions: Record<string, JSONSchema4>;
    [k: string]: any;
}
export declare function start(props: DownloadGitRepoSettings): Promise<ParsedJsonFileInfo>;
export default start;
