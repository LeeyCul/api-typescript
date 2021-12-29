#!/usr/bin/env node
import yargs from 'yargs';
interface OptionsType {
    configFile?: string;
}
export declare function getConfig(options?: OptionsType): Promise<{
    cwd: string;
    configFileExist: boolean;
    useCustomConfigFile: boolean;
    configFile: string;
    configTSFile: string;
    configJSFile: string;
}>;
export declare function genConfig(options: OptionsType): Promise<void>;
export declare function start(options?: {
    configFile?: string;
}): Promise<false | void | null>;
export default class CLI {
    argvs: any;
    run(args: any, callback?: yargs.ParseCallback): {
        [x: string]: any;
    };
    init(): yargs.Argv<any>;
}
export {};
