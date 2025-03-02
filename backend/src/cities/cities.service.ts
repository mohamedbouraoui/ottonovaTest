import { Injectable } from '@nestjs/common';
import { City } from "./interfaces/city.interface";
import { readFileSync } from "fs";
import { Query } from './interfaces/query.interface';

@Injectable()
export class CitiesService {
    private readonly cities: City[];

    constructor() {
        const filePath = __dirname+"/../data/cities.json"
        try {
            const data = readFileSync(filePath, 'utf-8');
            const parsedData = JSON.parse(data);
            this.cities = parsedData.cities || [];
        } catch (error) {
            console.error('Error reading cities.json:', error);
            this.cities = [];
        }
    }
    fetchByName(query:Query) : {cities:City[], total:number} {
    console.log("🚀 ~ CitiesService ~ fetchByName ~ query:", query)

        const { page = 1, limit=10, name = "" } = query;

        const pageNumber = Number(page) || 1;
        const limitNumber = Number(limit) || 10;
        
        const filteredCities = this.cities.filter(city => city.name.toLowerCase().includes(name.toLowerCase()));

        const startIndex = (pageNumber -1) * limitNumber 
        const endIndex =Math.min(startIndex + limitNumber, filteredCities.length)

        return {cities:filteredCities.slice(startIndex, endIndex) , total:filteredCities.length}
    }

    fetchAll() : City[]   {
        return this.cities
    }

}