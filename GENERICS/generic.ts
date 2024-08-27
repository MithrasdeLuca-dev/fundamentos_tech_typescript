//  -------------------------------- GENERICS EM TYPESCRIPT -------------------------------- //
/* 
 * Generics fornecem uma maneira de criar componentes reutilizáveis que podem trabalhar com vários tipos.
 */


//  -------------------------------- EXEMPLO BÁSICO DE GENERIC -------------------------------- //
/**
 * Um exemplo simples de uma função genérica que retorna o argumento que recebe.
 */
  function identity<T>(arg: T): T {
    return arg;
  }
  
  // Uso da função identity
  const output = identity("minhaString");
  // console.log(output);
  




  //  -------------------------------- ARRAY GENERIC -------------------------------- //
  /**
   * Um exemplo de função genérica para retornar o primeiro elemento de um array.
   */
  function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
  }
  
  // Uso da função getFirstElement
  const first = getFirstElement([1, 2, 3]);
  // console.log(first);
  




  //  -------------------------------- ARRAY GENERIC -------------------------------- //
  /**
   * Um exemplo de função que tem um tipo generico e que recebe dois argumentos tipo string.
   * 
   */
  function unionGeneric<T>(arr1: T[], arr2: T[]){
    return arr1.concat(arr2);
  }
  
  // Uso da função getFirstElement
  console.log(unionGeneric<number | string>([1,2,3],["a","b","c"])); // Union Generic
  // console.log(unionGeneric([1,2,3],[1,2,3]));
  




  //  -------------------------------- GENERIC INTERFACE -------------------------------- //
  /**
   * Definindo uma interface genérica para um par chave-valor.
   */
  interface KeyValuePair<K, V> {
    key: K;
    value: V;
  }
  
  // Uso da interface KeyValuePair
  const myPair: KeyValuePair<string, number> = { key: "idade", value: 30 };
  // console.log(myPair);
  




  //  -------------------------------- GENERIC CLASS -------------------------------- //
  /**
   * Uma classe genérica para gerenciar uma fila de elementos.
   */
  class Queue<T> {
    private data: T[] = [];
    
    enqueue(item: T) {
      this.data.push(item);
    }
    
    dequeue(): T | undefined {
      return this.data.shift();
    }
  }
  
  // Uso da classe Queue
  const queue = new Queue<number>();
  queue.enqueue(1);
  queue.enqueue(2);
  const dequeued = queue.dequeue();
  // console.log(dequeued); // 1
  
  //  -------------------------------- GENERIC CONSTRAINTS -------------------------------- //
  /**
   * Usando constraints em Generics para limitar os tipos que podem ser usados.
   */
  function mergeObjects<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
  }
  
  // Uso da função mergeObjects
  const merged = mergeObjects({ nome: "João" }, { idade: 25 });
  // console.log(merged);
  
  //  -------------------------------- CONCLUSÃO -------------------------------- //
  /* 
   * Generics são extremamente úteis em TypeScript para criar código flexível e reutilizável,
   * permitindo que funções, classes e interfaces operem com vários tipos enquanto mantêm a segurança de tipo.
   */
