/**
 * 依赖包检测，自动安装所需依赖
 */
/**
 * 安装依赖包
 * @param packageName
 * @returns
 */
export declare function installPackage(packageName: string): Promise<any>;
/**
 * 检测是否安装依赖包
 * @param packageName
 * @param autoInstall
 * @returns
 */
export declare function packageCheck(packageName: string): Promise<any>;
