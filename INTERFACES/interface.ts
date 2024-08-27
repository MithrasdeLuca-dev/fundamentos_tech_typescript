
//  -------------------------------- INTERFACES E EXTENSÕES -------------------------------- //
/*
 * Interfaces permitem definir contratos de estruturas para objetos e classes,
 * facilitando a organização, a reutilização de código e a extensibilidade.
 */

// Definindo uma interface para estruturar objetos do tipo Aluno.
interface Aluno {
    nome: string;
    idade: number;
    status: boolean | null;
    dataNascimento: Date;
    endereco: string;
}

// Demonstrando a extensão de interfaces em TypeScript.
interface Pessoa {
    nome: string;
    idade: number;
}

interface Funcionario extends Pessoa {
    cargo: string;
    salario: number;
    dataContratacao: Date;
}

//  -------------------------------- MERGING INTERFACES -------------------------------- //
/*
 * A mesclagem de interfaces no TypeScript permite combinar múltiplas declarações da mesma interface
 * em uma única interface com o mesmo nome, unindo mecanicamente os membros de ambas as declarações.
 */

interface Box {
    height: number;
    width: number;
}

interface Box {
    scale: number;
}

let box: Box = { height: 5, width: 6, scale: 10 };

//  -------------------------------- INTERFACES ou TYPES -------------------------------- //
/*
 * A escolha entre "interface" e "type" depende das necessidades específicas do projeto e da preferência pessoal.
 * 
 * "interface":
 * - Você está definindo um 'contrato' para objetos ou classes.
 * - Você precisa de extensibilidade ou mesclagem de declarações.
 */

interface User {
    nome:string;
    idade: number;
    email:string;
    endereco: string;
    dataNasc: string;
}

/*
 * "type":
 * - Você precisa definir tipos de união ou interseção.
 * - Você está trabalhando com tipos primitivos, tuplas ou precisa de composição de tipos.
 * - Você precisa de um alias para uma união de tipos ou um tipo específico que não se encaixe bem no modelo de interface.
 * 
 * Enquanto "interface" é mais adequada para definir 'contratos' para objetos e classes com a possibilidade de extensão,
 * "type" oferece mais flexibilidade para compor tipos complexos.
 */

type CaixaPequena = {
    altura:number;
    largura: number;
}

type CaixaComEscala = CaixaPequena & {
    escala: number;
}

let caixaComEscala: CaixaComEscala = { altura: 5, largura: 6, escala: 10 };





//  -------------------------------- INTERSECTION ou TYPES -------------------------------- //
/**
 * Intersection types em TypeScript permitem combinar múltiplos tipos.
 * Um único tipo pode possuir todas as propriedades dos tipos combinados.
 * Isso é útil para criar tipos mais complexos e reutilizáveis.
 */

interface Animal {
  especie: string;
  idade: number;
}

interface Dono {
  nome: string;
  endereco: string;
}

type Pet = Animal & Dono;

const meuPet: Pet = {
  especie: "Cachorro",
  idade: 5,
  nome: "Rex",
  endereco: "Rua das Flores, 123"
};

console.log(meuPet);

