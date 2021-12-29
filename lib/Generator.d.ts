import { Config, ExtendedInterface, Interface, SyntheticalConfig, GeneratorOptions } from './types';
interface OutputFileList {
    [outputFilePath: string]: {
        projectId: string;
        categoryId: string;
        syntheticalConfig: SyntheticalConfig;
        content: string[];
        outputResponseDataJsonSchemaFilePath: string;
        responseDataJsonSchemaContent: string[];
        requestFunctionFilePath: string;
        requestHookMakerFilePath: string;
    };
}
export declare class Generator {
    private options;
    /** 配置 */
    private config;
    private disposes;
    constructor(config: Config, options?: GeneratorOptions);
    prepare(): Promise<void>;
    /**
     * 生成代码
     * @returns
     */
    generate(): Promise<OutputFileList>;
    /**
     * 写入文件
     * @param outputFileList
     * @returns
     */
    write(outputFileList: OutputFileList): Promise<void[]>;
    tsc(file: string): Promise<void>;
    /** 请求函数名生成 */
    requestFunctionNameGen(extendedInterfaceInfo: ExtendedInterface): string;
    /** 生成接口代码 */
    generateInterfaceCode(syntheticalConfig: SyntheticalConfig, interfaceInfo: Interface, categoryUID: string): Promise<{
        code: string;
        responseDataJsonSchema: string;
    }>;
    destroy(): Promise<any[]>;
}
export {};
