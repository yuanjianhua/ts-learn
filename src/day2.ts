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


// 分配条件类型
// 会映射到每个成员类型
// type ToArray<Type> = Type extends any ? Type[] : never;
// type strArrOrNumArr = ToArray<number | string>
// ToArray<number> | ToArray<string>
// number[] | string[]

// 如果使用[]将类型包裹起来，则将变成 <number | string>[]
// type ToArray2<Type> = [Type] extends [any] ? Type[] : never;
// type strArrOrNumArr2 = ToArray2<number | string>

// 模版文字 
// type world = "world"
// type print = `Hello ${world}`;

// js 雷同
// const worldJs = 'world';
// const printJs = `hello ${worldJs}`

// type typeStatus = "pay" | "unpay";
// type payTypes = 'online' | 'offline'
// keyof union 组合
// type allTypes = `${typeStatus | payTypes}_status`

// type Lang = "en" | 'ja' | 'pt' | 'cn'

// type LangTypes = `${Lang | allTypes}`

// type LangTypes2 = `${Lang}-${allTypes}`

// mapping 映射修饰符

// 使用 + / - 前缀添加/删除修饰符

type createMutable<Type> = {
  -readonly [property in keyof Type] : Type[property];
}

type lockedAccount = {
  readonly id: number;
  readonly userName: string;
}

type unlockedAmount = createMutable<lockedAccount>

type conCrete<Type> = {
  [Property in keyof Type]+?: Type[Property];
}

type MaybeUser = {
  id: number;
  nickName?: string;
  age: number;
}

type User = conCrete<MaybeUser>

// as
type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
}

type Getters2<Type> = {
  [Property in keyof Type as `get${Capitalize<string & Property>}`]-?: () => Type[Property]
}

interface UserModel {
  id: number;
  nickName?: string;
  age: number;
}

/**
  type getUser = {
    getId: () => number;
    getNickName?: (() => string | undefined) | undefined;
    getAge: () => number;
  }
 */
type getUser = Getters<UserModel>

// 删除修饰符
/**
  type getUser2 = {
    getId: () => number;
    getNickName: () => string | undefined;
    getAge: () => number;
  }
 */
type getUser2 = Getters2<UserModel>

// 过滤Property
type ExcludeKindFiled<Type> = {
  [Property in keyof Type as Exclude<Property, "nickName">]: Type[Property]
}

interface UserModel2 {
  kind: "test";
  id: number;
}

// 可以是接口的属性，或者对象的属性
type kindless = ExcludeKindFiled<UserModel>

type EventConfig<Events extends {kind: string}> = {
  [E in Events as E["kind"]]: (event: E) => void
}

type SquareEvent = {kind: "square", x: number, y: number};
type CircleEvent = {kind: "circle", radius: number}
type ClickEvent = { radius: number}

type config = EventConfig<SquareEvent | CircleEvent >

type test = keyof SquareEvent

// 後處理
type EventConfig2<Events> = {
  [E in Events as (E extends {kind: string} ? E["kind"]: never)]: (event: E) => void
}

type config2 = EventConfig2<SquareEvent | CircleEvent | ClickEvent>
