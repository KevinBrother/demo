async function stringPromise() {
    return "Hello, Semlinker!";
  }
  
  interface Person {
    name: string;
    age: number;
  }
  
  async function personPromise() {
    return { name: "Semlinker", age: 30 } as Person;
  }
  
  type PromiseType<T> = (args: any[]) => Promise<T>;
  type UnPromisify<T> = T extends PromiseType<infer U> ? U : never;
  
  type extractStringPromise = UnPromisify<typeof stringPromise>; // string
  type extractPersonPromise = UnPromisify<typeof personPromise>; // Person
  