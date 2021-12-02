new Error(message, filleName, lineNumber)
//tds os parâmetros são opcionais
//fileName e lineNumber não funcionarão em todos os navegadores, usar geralmente só a mensagem
const MeuErro = new Error('Mensagem Inválida');
throw MeuErro

const MeuError = new Error('Mensagem Inválida');
MeuError.name = 'InvalidMessage';
throw MeuError

/*
MeuError.name
"InvalidMessage"

MeuError.stack (pilha) - oq foi executado e em que linha
"InvalidMessage: Mensagem inválida\n at <anonymous>:3:17"

MeuError
Invalid Message: Mensagem Inválida
at <aonymous>:3:17
*/