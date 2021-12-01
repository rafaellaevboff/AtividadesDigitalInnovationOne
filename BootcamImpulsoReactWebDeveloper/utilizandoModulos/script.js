//O que são MÓDULOS?
/*
    São arquivos JS que tem a capacidade de exportar e importar infos de outros arquivos do msm tipo
    - conectar arquivos js
    
    display.js <--- main.js ---> counter.js

    VANTAGENS:
    - Organização do código;
    - Compartilhandmento de variáveis de escopos diferentes
    -Explicita as dependências dos arquivos
*/


//EXPORTAR:

//NAMED EXPORTS - exportar mais de uma coisa de um arquivo
export function mostraIdade(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}

export function mostraCidade(pessoa){
    return `A cidade de ${pessoa.nome} é ${pessoa.cidade}`;
}

export function mostraHobby(pessoa){
    return `O hobby de ${pessoa.nome} é ${pessoa.hobby}`;
}

//OU ENTÃO:

function mostraIdade(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}

function mostraCidade(pessoa){
    return `A cidade de ${pessoa.nome} é ${pessoa.cidade}`;
}

function mostraHobby(pessoa){
    return `O hobby de ${pessoa.nome} é ${pessoa.hobby}`;
}

export{
    mostraIdade,
    mostraCidade,
    mostraHobby
}

//DEFAULT EXPORTS
/*
Só pode ter um por arquivo;
Será o retorno padrão do arquivo
*/
function mostraIdade(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
};

function mostraIdade(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
};

function mostraIdade(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
};

export{
    mostraIdade,
    mostraCidade,
}

export default mostraHobby;

//IMPORTAR
//Named exports:
import{funcao, variavel, classe} from './arquivo.js'

//Default exports:
import valorDefault from './arquivo.js'

//Trocando nome de imports:
import{arquivo as Apelido} from './arquivo.js';
Apelido.metodo();

//Importando todos os dados de um arquivo
import * as INFOS from './arquivo.js';
INFOS.metodoA();
console.log(INFOS.variavel);

//LINKANDO NO HTML:
//precisa colocar type="module" no link do script pra html e browser entender que se está usando tipo de módulo
//pra testar localmente precisa ter um servidor, que pode ser feito usando a extensão Live Server do VSCode.

//CURIOSIDADES:
/*
- Módulos sempre estão em "strict mode"
- Podem ser utilizadas as extensões .js e .mjs
- Para testes locais, é necessário utilizar um servidor
- Ao importar, sempre lembrar da extensão(.js, .mjs)
- Ao importar utilizar "./" como ponto de início/partida
*/