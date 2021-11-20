// 扁平

// type Flatten<T> = T extends any[] ? T[number] : T;

// type str = Flatten<string[]>

// type num = Flatten<number>

// type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;

// type num = Flatten<number>

// // 
// type str = Flatten<never[]>


// never = null 占位符 
// type GetReturnType<Type> = Type extends (...args: never[]) => infer Return ? Return : never;

// type num = GetReturnType<() => number>;

// type boo = GetReturnType<(a: boolean) => boolean[]>


