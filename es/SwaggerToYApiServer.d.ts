import { AsyncReturnType } from 'vtils/types';
import { swaggerJsonToYApiData } from './swaggerJsonToYApiData';
import { OpenAPIV2 as SwaggerType } from 'openapi-types';
export interface SwaggerToYApiServerOptions {
    swaggerJsonUrl: string;
}
export declare class SwaggerToYApiServer {
    private readonly options;
    private port;
    private swaggerJson;
    private httpServer;
    private yapiData;
    constructor(options: SwaggerToYApiServerOptions);
    getPort(): Promise<number>;
    getUrl(): Promise<string>;
    getSwaggerJson(): Promise<SwaggerType.Document>;
    getYApiData(): Promise<AsyncReturnType<typeof swaggerJsonToYApiData>>;
    start(): Promise<string>;
    stop(): Promise<void>;
}
