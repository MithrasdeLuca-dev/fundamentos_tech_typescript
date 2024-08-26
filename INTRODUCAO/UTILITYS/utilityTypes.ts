//  -------------------------------- UTILITY TYPES EM TYPESCRIPT -------------------------------- //
/* 
 * Os Utility Types fornecem maneiras flexíveis de manipular tipos de maneira reutilizável.
 */

type Turma = {
  nome: string;
  serie: number;
  sala: number;
}

//  -------------------------------- KEYOF<TYPE> -------------------------------- //
/**
 * Retorna as chaves de um tipo de objeto.
 */
type TurmaProperties = keyof Turma;

const property = (property: TurmaProperties) => {
  return property;
}

// console.log(property('serie'));






//  -------------------------------- PARTIAL<TYPE> -------------------------------- //
/**
 * Transforma todos os atributos do tipo `Type` em opcionais.
 */
const atualizarTurma: Partial<Turma> = {
  nome: "João",
  serie: 3
};





//  -------------------------------- PICK<TYPE, KEYS> -------------------------------- //
/* 
 * Permite criar um tipo selecionando um conjunto de propriedades (`Keys`) de um tipo existente (`Type`).
 */
const contatoTurma: Pick<Turma, 'nome' | 'sala'> = {
  nome: "Ana",
  sala: 10
};





//  -------------------------------- OMIT<TYPE, KEYS> -------------------------------- //
/* 
 * Cria um tipo que tem todas as propriedades de `Type` exceto aquelas especificadas em `Keys`.
 */
const detalhesTurma: Omit<Turma, "serie"> = {
  nome: "Carlos",
  sala: 25
};





//  -------------------------------- RETURNTYPE<FUNC> -------------------------------- //
/* 
 * Utilizado para obter o tipo de retorno possiveis de uma função.
 */
function getNomeCompleto() {
  return { idade: "Maria", sobrenome: "Silva" };
}
type NomeCompleto = ReturnType<typeof getNomeCompleto>;

getNomeCompleto



//  -------------------------------- CONCLUSÃO -------------------------------- //
/* 
 * Os Utility Types em TypeScript são ferramentas poderosas para manipulação de tipos,
 * permitindo a criação de versões modificadas de tipos existentes de maneira flexível.
 */