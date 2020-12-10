import 'reflect-metadata';
import { appFactory } from '@factories';
import { AppModule } from '@/modules/app.module';

const app = appFactory.create<AppModule>(AppModule);

if (module.hot) {
  module.hot.accept()
}