import { ParsedJsonFileInfo } from './downloadGitRepo';
import { Config, ExtendedInterface, Interface, SyntheticalConfig, GeneratorOptions } from './types';
interface OutputFileListType {
    [outputFilePath: string]: {
        syntheticalConfig: SyntheticalConfig;
        content: string[];
        outPath: string;
    };
}
export declare class Generator {
    private options;
    /** 配置 */
    private config;
    private disposes;
    private gitRepoInfo?;
    constructor(config: Config, options?: GeneratorOptions);
    static configValidator(config: Config): boolean;
    /**
     * 读取json文件内容
     * @param filePath
     * @returns
     */
    readJson(filePath: string): Promise<Interface[]>;
    /**
     * 获取更新了的文件列表
     */
    getUpdatedFiles(): Promise<ParsedJsonFileInfo['renderPaths']>;
    /**
     * 生成代码
     * @returns
     */
    generate(): Promise<OutputFileListType>;
    /**
     * 写入文件
     * @param outputFileList
     * @returns
     */
    write(outputFileList: OutputFileListType): Promise<void[]>;
    tsc(file: string): Promise<void>;
    /** 请求函数名生成 */
    requestFunctionNameGen(extendedInterfaceInfo: ExtendedInterface): string;
    /** 生成接口代码 */
    generateInterfaceCode(syntheticalConfig: SyntheticalConfig, interfaceInfo: Interface): Promise<{
        code: string;
        responseDataJsonSchema: string;
    }>;
    destroy(): Promise<any[]>;
    /**
     * 清除仓库代码
     * @returns
     */
    clearGitRepo(): Promise<unknown>;
}
export {};
