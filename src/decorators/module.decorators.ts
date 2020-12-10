type Constructor<T = any> = new (...args: any[]) => T;

function Module(data: any) {
  return (target: any) => {
      for (const property in data) {
          if (data.hasOwnProperty(property)) {
              Reflect.defineMetadata(property, data[property], target);
          }
      }
  };
}

  
export { Module };