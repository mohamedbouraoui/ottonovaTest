import { Test, TestingModule } from '@nestjs/testing';
import { CitiesController } from './cities.controller';
import {CitiesService} from "./cities.service";
import { City } from './interfaces/city.interface';

describe('CitiesController', () => {
  let controller: CitiesController;
  let service: CitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CitiesController],
      providers: [CitiesService],
    }).compile();

    controller = module.get<CitiesController>(CitiesController);
    service = module.get<CitiesService>(CitiesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should find all cities', () => {
    const cities: City[] = [{
      name: 'City1',
      name_native: 'City1 native',
      country: 'Country1',
      continent: 'Continent1',
      latitude: 'latitude1',
      longitude: 'longitude1',
      founded: 'founded1',
      population: 'population1',
      landmarks: ['landmark1', 'landmark2'],
      image: 'image1'
    }, {
      name: 'City2',
      name_native: 'City2 native',
      country: 'Country2',
      continent: 'Continent2',
      latitude: 'latitude2',
      longitude: 'longitude2',
      founded: 'founded2',
      population: 'population2',
      landmarks: ['landmark3', 'landmark4'],
      image: 'image2'
    }];
    jest.spyOn(service, 'fetchAll').mockReturnValue(cities);

    expect(controller.fetchAll).toEqual(cities);
  });

  it('should find city by name', () => {
    const cityName = 'Lagos';
    const city: City = {
      name: cityName,
      name_native: 'Lagos native',
      country: 'Nigeria',
      continent: 'Africa',
      latitude: '6.5244',
      longitude: '3.3792',
      founded: 'some date',
      landmarks: ['landmark1', 'landmark2'],
      population: 'some population',
      image: 'image1'
    };
    jest.spyOn(service, 'fetchByName').mockReturnValue({cities:[city], total:1});

    expect(controller.fetchByName(cityName)).toEqual(city);
  });
});