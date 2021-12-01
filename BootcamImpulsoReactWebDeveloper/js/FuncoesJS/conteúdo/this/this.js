//O QUE É O THIS
//é uma referência ed contexto

//quando uma função está dentro de um objeto ele se chama método
//qnd o this está dentro de um método ele se refere ao objeto pai desse objeto
//vai retornar o valor da propriedade pedida
const pessoa = {
    firstName:  "André",
    lastName:   "Soares",
    id:         1,
    fullName:   function(){
        return this.firstName + " " + this.lastName;
    },
    getId:      function(){
        return this.id;
    }
};
pessoa.fullName();
//"André Soares"
pessoa.getId();
//1

//Seu lugar pode mudar de acordo com o lugar no código onde foi chamada
/*      CONTEXTO                          REFERÊNCIA
    em um objeto(método)          próprio objeto dono do método
        sozinha                objeto global(em navegadores, window)
         função                          objeto global
         evento                  elemento que recebeu o evento
*/

//              -----EXEMPLOS:-----
//FORA DE FUNÇÃO
console.log(this);
//{} retorna objeto global pai

//NO NAVEGADOR
this
//window{...(infos da pagina)}

//DENTRO DE UMA FUNÇÃO:
function testeThis(){
    console.log(this);
};
console.log(testeThis());
//vai ser do objeto global e vai mostrar infos

//DENTRO DE UM OBJETO
const pessoaNome = {
    firstName:      'Diego',
    lastName:       'Vieira',
    getFullName:    function(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
};
pessoaNome.getFullName();
//vai se referir ao objeto, nesse caso vai retornar o nome completo da pessoa

//EM UM EVENTO NO HTML
/*
<body>
    <button>
        id="my-btn"
        onclick="console.log(this)"
        Clique aqui!
    </button>
</body>
*/
//vai mostrar o elemento que recebeu o evento, nesse caso ao clicar no botão ele vai mostrar no console o elemento button que foi apresentado acima