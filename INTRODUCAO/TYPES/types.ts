//  -------------------------------- TIPOS BÁSICOS E ARRAYS -------------------------------- //
/* 
 * TypeScript permite definir tipos estáticos para variáveis, funções, objetos e arrays.
 */

/* 
 * Define variáveis com tipos específicos e um array de strings.
 */
let idade: number = 30; // Variável do tipo número
let nome: string = "Carlos"; // Variável do tipo string
let isEstudante: boolean = true; // Variável booleana
let hobbies: string[] = ["Futebol", "Leitura"]; // Array de strings
let objeto: { nome: string; idade: number } = { nome: "Carlos", idade: 30 }; // Objeto com propriedades tipadas


//Demonstra a declaração de arrays tipados em TypeScript.
const dadosTipoNumberArray: number[] = [1, 2, 3]; // Array contendo apenas números
const dadosTipoStringArray: string[] = ['a', 'b', 'c']; // Array contendo apenas strings

// Ou usando a sintaxe genérica Array
const dadosTipoArrayNumber: Array<number> = [1, 2, 3]; // Sintaxe genérica para array de números
const dadosTipoArrayString: Array<string> = ['a', 'b', 'c']; // Sintaxe genérica para array de strings





//  -------------------------------- TIPOS PRIMITIVOS COM (LETRAS MINÚSCULAS) -------------------------------- //
/*
 * TypeScript possui tipos primitivos com (letras minúsculas) para valores simples.
 * São mais leves e geralmente mais rápidos, pois são armazenados diretamente na memória.
 * 
 * number: Representa um valor numérico primitivo.
 * string: Representa uma cadeia de caracteres primitiva.
 * boolean: Representa um valor verdadeiro ou falso primitivo.
*/ 
let numPrimitive: number = 123;
let strPrimitive:string = "Hello";
let boolPrimitive: boolean = true;





//  -------------------------------- TIPOS DE OBJETOS COM (LETRAS MAIÚSCULAS) -------------------------------- //
/*
 * São instâncias de classes e, portanto, têm métodos e propriedades adicionais.
 * São mais pesados e menos eficientes em termos de performance.
 * 
 * Number: É um objeto que encapsula um valor numérico primitivo.
 * String: É um objeto que encapsula uma cadeia de caracteres primitiva.
 * Boolean: É um objeto que encapsula um valor verdadeiro ou falso primitivo.
*/
let numObject = new Number(123);
let strObject = new String("Hello");
let boolObject = new Boolean(true);





//  -------------------------------- TIPOS DE RETORNO PROMISE-------------------------------- //
/*
 * Define uma função com um tipo de retorno específico
*/
const cadastrar = (name: string): string => {
    return `O ${name} usuário foi cadastrado com sucesso!`;
}





//  -------------------------------- PARÂMETRO OPCIONAL -------------------------------- //
/* 
 * Define uma função que aceita um parâmetro opcional.
 * Em js quando não mandamos um parâmetro ele se torna opcional.
 */
const opticonalType = (userCad: {name:string, idade?:number}) => {
    console.log(userCad.name);
}





//  -------------------------------- UNION TYPES -------------------------------- //
/* 
 * Utiliza union types para aceitar múltiplos tipos de valores para um unico dado recebido.
 */
const unionType = (value: string | number) => {
    console.log(`O seu saldo é ${value}`);
}





//  -------------------------------- TYPE, TYPE ALIAS E UNION TYPE ALIAS -------------------------------- //
/*
 * Utiliza "type" para definir tipos específicos ou aliases de tipos, permitindo a criação de tipos personalizados.
*/

// Definindo um tipo simples.
type Peso = number;
let meuPeso: Peso = 60;

/*
 * union type alias: Permite que uma variável possa ser de mais de um tipo. 
 * Isso é útil quando uma variável pode assumir diferentes tipos de valores.
 */
type Valor = number | string;

const typeAlias = (value: Valor) => {
    console.log(`Você tem ${value}kg.`);
}





//  -------------------------------- TYPEOF E INSTANCEOF -------------------------------- //
/*
 * Utiliza "typeof" para verificar o tipo de uma variável muito comum em JavaScript. 
 * 
 * "instanceof" para verificar se um objeto é de uma determinada função construtora.
 * É útil para determinar a herança de objetos. 
*/

// Uso simples do typeof com tipos primitivos.

console.log(typeof "Hello, world!"); // "string"
console.log(typeof 42);               // "number"
console.log(typeof true);             // "boolean"
console.log(typeof undefined);        // "undefined"
console.log(typeof null);             // "object" (isso é considerado um comportamento histórico estranho em JavaScript)
console.log(typeof {});               // "object"
console.log(typeof []);               // "object"
console.log(typeof function(){});     // "function"


// Uso do instanceof validando acessos através de classes diferentes.

class User {
    nome: string;
    email: string;

    constructor(nome: string, email: string) {
        this.nome = nome;
        this.email = email;
    }
}

class UserAdmin extends User {
    accessLevel: string;

    constructor(nome: string, email: string, accessLevel: string = "admin") {
        super(nome, email);
        this.accessLevel = accessLevel;
    }
}

const user = new User("User Normal", "user@example.com");
const admin = new UserAdmin("Admin User", "admin@example.com");

const validateAccess = (user: User) => {
    if (user instanceof UserAdmin) {
        console.log("Acesso total concedido.");
    } else if (user instanceof User) {
        console.log("Acesso restrito.");
    }
};

validateAccess(user); // Acesso restrito.
validateAccess(admin); // Acesso total concedido.