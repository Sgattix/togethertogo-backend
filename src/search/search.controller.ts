import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller({ version: '1', path: 'search' })
export class SearchController {
  constructor(private searchService: SearchService) {}

  @Get()
  async search(@Query('q') q: string) {
    return this.searchService.search(q || '');
  }
}
