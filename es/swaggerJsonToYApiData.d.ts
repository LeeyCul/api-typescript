import { Category, Interface, Project } from './types';
export declare function swaggerJsonToYApiData(data: any): Promise<{
    project: Project;
    cats: Category[];
    interfaces: Interface[];
}>;
