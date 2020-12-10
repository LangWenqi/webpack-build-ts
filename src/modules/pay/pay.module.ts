import { Module } from '@decorators';
import { YmnService } from '@/services/pay/ymn.service';

@Module()

export class PayModule {
  constructor(
    private readonly ymnService: YmnService,
  ) {}
  getData() {
    this.ymnService.getData();
  }
}