import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(role?: string): string;
    create(users: {
        username: string;
    }): string;
}
