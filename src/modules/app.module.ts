import { UserService } from './user/user.service';
import { AppService } from './app.service';
import { Module } from '@decorators';

@Module({
  // providers: [UserService, AppService]
})

export class AppModule {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService
  ) {
    this.getData();
  }

  getData() {
    console.log(this.appService.getHello())
    console.log(this.userService.getHello())
  }
}

