type Constructor<T = any> = new (...args: any[]) => T;

const Injectable = (): ClassDecorator => target => {
    const providers = Reflect.getMetadata('design:paramtypes', target);
    // const args = providers.map((provider: Constructor) => new provider());
    // console.log(providers)
    console.log(target)

    // return new target(...args);
};
function Module(data: any) {
  return (target: any) => {
      for (const property in data) {
          if (data.hasOwnProperty(property)) {
              Reflect.defineMetadata(property, data[property], target);
          }
      }
  };
}
function MethodParams(param: any) {
    /**
     * 参数1 类的构造函数(静态成员)/原型对象(实例成员)
     * 参数2 方法的名字
     * 参数3 参数的索引
     */
    return function(target: any, methodName: string, index: number) {
    //   console.log(param)
    //   console.log(target[methodName])
    //   console.log(target)
    //   console.log(methodName)
    //   console.log(index)
    }
}

  
export { Module, MethodParams, Injectable };