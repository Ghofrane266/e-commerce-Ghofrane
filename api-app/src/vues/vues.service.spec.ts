import { Test, TestingModule } from '@nestjs/testing';
import { VuesService } from './vues.service';

describe('VuesService', () => {
  let service: VuesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VuesService],
    }).compile();

    service = module.get<VuesService>(VuesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
