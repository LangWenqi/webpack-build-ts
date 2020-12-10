import { Module } from '@decorators';
import { PayModule } from './pay/pay.module';
@Module()

export class AppModule {
  constructor(
    public readonly pay: PayModule,
  ) {}
}

