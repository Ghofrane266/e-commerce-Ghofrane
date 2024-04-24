import { Test, TestingModule } from '@nestjs/testing';
import { VuesController } from './vues.controller';
import { VuesService } from './vues.service';

describe('VuesController', () => {
  let controller: VuesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VuesController],
      providers: [VuesService],
    }).compile();

    controller = module.get<VuesController>(VuesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
