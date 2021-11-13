/**
 * <T>
 * 여러 타입에 대해 호환을 맞춰야 할때
 * 즉 어떤 타입이 들어올지 정해지지 않을 때
 */

/**
 * 함수 활용1
 */
function merge<T1, T2>(a: any, b: any) {
  return {
    ...a,
    ...b
  }
}

const merged = merge({foo: 1}, {bar: "22"});
console.log(merged.foo)
console.log(merged.bar)

/**
 * 함수 활용2
 */
function wrap<T>(param: T) {
  return {
    param
  }
}

const wrapped = wrap("aaa")
console.log(wrapped.param);

/**
 * 인터페이스 활용
 */
interface Item<T> {
  list: T[];
}

const items: Item<number> = {
  list: [1, 2, 3]
}
const items2: Item<string> = {
  list: ["a", "b", "c"]
}

/**
 * 클래스 활용
 */

class Queue<T> {
  list: T[] = [];

  get length() {
    return this.list.length
  }

  enqueue(item: T) {
    this.list.push(item);
  }

  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

while (queue.length > 0){
  console.log(queue.dequeue());
}

