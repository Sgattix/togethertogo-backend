import { SearchService } from './search.service';
export declare class SearchController {
    private searchService;
    constructor(searchService: SearchService);
    search(q: string): Promise<{
        sprints: any;
        tasks: any;
    }>;
}
