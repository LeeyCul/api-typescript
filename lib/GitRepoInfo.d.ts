import { LogResult, SimpleGit, DiffResult } from 'simple-git';
export interface GitRepoInfoProps {
    gitRepoPath?: string;
}
declare class GitRepoInfo {
    gitRepoPath: string;
    gitInstance: SimpleGit;
    constructor(props: GitRepoInfoProps);
    initInstance(): SimpleGit;
    /**
     * 获取log日志
     * @returns
     */
    logs(): Promise<LogResult>;
    /**
     * 获取当前分支
     * @returns
     */
    branch(): Promise<string>;
    /**
     * 获取距离对应commit的文件变更
     * @param commitId
     * @returns
     */
    diffSummary(commitId?: string): Promise<DiffResult>;
    /**
     * git注释信息
     * @returns
     */
    gitNotesContent(): Promise<string>;
}
export default GitRepoInfo;
