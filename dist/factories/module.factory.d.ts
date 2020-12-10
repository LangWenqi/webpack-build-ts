declare type Constructor<T = any> = new (...args: any[]) => T;
declare class appFactory {
    static create<T>(target: Constructor<T>): T;
}
export { appFactory };
