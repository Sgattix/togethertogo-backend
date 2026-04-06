import { OnApplicationBootstrap } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
declare const PrismaClient: any;
export declare class PrismaService extends PrismaClient implements OnApplicationBootstrap {
    constructor(config: ConfigService);
    onApplicationBootstrap(): Promise<void>;
}
export {};
