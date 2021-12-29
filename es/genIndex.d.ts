/**
 * 生成入口文件
 */
import { Config } from './types';
declare const _default: (config: Config, categoryList: {
    categoryId: string;
    projectId: string;
}[]) => Promise<void>;
export default _default;
/**
 * 获取index.ts文件里的上次生成时的 git注释信息
 * @param config
 *
 */
export declare type GetIndexGitInfoResultName = 'repo' | 'branch' | 'commitId';
export interface GetIndexGitInfoResult {
    repo: string;
    branch: string;
    commitId: string;
}
export declare const getIndexGitInfo: (config: Config) => GetIndexGitInfoResult;
export declare const genGitRepoIndex: (config: Config, filePathList: string[], notes?: string | undefined) => Promise<void>;
