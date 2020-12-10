
export const Module = (data: any = {}): ClassDecorator => target => {
    for (const property in data) {
        if (data.hasOwnProperty(property)) {
            Reflect.defineMetadata(property, data[property], target);
        }
    }
}
