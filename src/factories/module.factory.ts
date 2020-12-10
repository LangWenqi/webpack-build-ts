
type Constructor<T = any> = new (...args: any[]) => T;

class appFactory {
  static create<T>(target: Constructor<T>): T {
    const constructorArgs: Constructor[] = Reflect.getMetadata('design:paramtypes', target) || [];
    const providersArgs: Constructor[] = constructorArgs.map((constructorArg: Constructor) => appFactory.create<typeof constructorArg>(constructorArg));
    return new target(...providersArgs);
  }
}

export { appFactory } 