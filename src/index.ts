// interface User {
//   name: string;
//   id: number;
// }

// class UserAccount {
//   name: string;
//   id: number;

//   constructor (name: string, id: number) {
//     this.name = name;
//     this.id = id;
//   }
// }

// const user: User = new UserAccount("Murphy", 1);

// const names = ["Alice", "Bob", "Eve"];

// // Contextual typing for function
// names.forEach(function (s) {
//   console.log(s.toUpperCase());
// });

// // Contextual typing also applies to arrow functions
// names.forEach((s) => {
//   console.log(s.toUpperCase());
// });

// 推斷number没有toUpperCase方法
// function printId(id: number | string) {
//   console.log(id.toUpperCase());
// }


// function printId(id: number | string) {
  // if(typeof id === 'string'){
  //   return id.toUpperCase()
  // } else {
  //   return id;
  // }

//   return typeof id === 'string' ? id.toUpperCase() : id;
// }

// type User = {name: 'mark', age: 20}
// type a = keyof User

// type Arrayish = { [n: number]: unknown };
// type A = keyof Arrayish;

// type Mapish = { [k: string]: boolean };
// type M = keyof Mapish;

// function f() {
//   return { x: 10, y: 3 };
// }
// type P = ReturnType<typeof f>

// interface IdLabel {
//   id: number;
// }

// interface NameLabel {
//   name: string;
// }

// type NameOrId<T extends number | string> = T extends number
//   ? IdLabel
//   : NameLabel;

// // idOrName 类型 T，类型T继承number|string， 
// function showLabel<T extends number | string>(idOrName: T) : NameOrId<T> {
//   throw "unimplemented"
// }

// let a = showLabel('typescript')
// let b = showLabel(29)


type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;

interface Email {
  message: string;
}

interface Dog {
  bark(): void;
}

type EmailMessageContents = MessageOf<Email>

type DogMessageContents = MessageOf<Dog>

// type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
//   ? Return
//   : never;
// type Num = GetReturnType<(x: number) => number[]>;
// type Str = GetReturnType<(x: string) => string>;

// type booleanV = GetReturnType<(x: boolean, y: string) => boolean>
