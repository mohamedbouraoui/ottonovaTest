import { Controller, Get, Query, Param } from '@nestjs/common';
import {CitiesService} from "./cities.service";
import {ApiQuery, ApiTags} from "@nestjs/swagger";

@ApiTags('cities')
@Controller('cities')
export class CitiesController {
    constructor( private readonly citiesService: CitiesService ) {}

    @Get('/filter')
    @ApiQuery({ name: 'page', required: false, description: 'page index', type: Number })
    @ApiQuery({ name: 'limit', required: false, description: 'fetch limit', type: Number })
    @ApiQuery({ name: 'name', required: false, description: 'filter name', type: String })
    fetchByName(@Query() query) {
        return this.citiesService.fetchByName(query);
    }

    @Get()
    fetchAll() {
        return this.citiesService.fetchAll();
    }
}