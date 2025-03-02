import { Test, TestingModule } from '@nestjs/testing';
import { CitiesService } from './cities.service';

describe('CitiesService', () => {
  let service: CitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CitiesService],
    }).compile();

    service = module.get<CitiesService>(CitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find cities by name', () => {
    const cityName = 'Lagos';
    const query = { page: 1, limit: 10, name: cityName };
    const response = service.fetchByName(query);
    expect(response).toBeDefined();
    expect(response.cities[0]?.name).toEqual(cityName);
  });

  it('should find all cities', () => {
    const cities = service.fetchAll();
    expect(cities).toBeDefined();
  });
});