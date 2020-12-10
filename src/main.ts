import 'reflect-metadata';
import { appFactory } from '@factories';
import { AppModule } from '@/modules/app.module';

const BF:AppModule = appFactory.create<AppModule>(AppModule);
BF.pay.getData();

if (module.hot) {
  module.hot.accept()
}