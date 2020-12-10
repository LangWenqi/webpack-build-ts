import { UserService } from './user.service';
import { Module } from '@decorators';

@Module({
  providers: [UserService]
})

export class UserModule {
  constructor(public readonly userService: UserService) {
    this.getData();
  }

  getData() {
    // console.log(this.userService.getHello())
  }
}

