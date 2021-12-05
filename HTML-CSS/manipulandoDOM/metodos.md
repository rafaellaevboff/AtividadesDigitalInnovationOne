 - tag      (body, h1, p...)
 - class    (class, . ) - mais de um elemento
 - id       (id, # ) - elemento único

 ## Chamar elemetos no JS:
 document.getElementById('titulo');

 document.getElementByTagName('li');

 document.getElementByClassName('textos');

document.querySelectorAll('.primeira-classe .segunda-classe'); //seleciona um elemento que tem essas duas classes

document.querySelectorAll('li .opcao'); //combinando uma tag e uma classe/id

## Adicionar e deletar
MÉTODO                          | DESCRIÇÃO
--------------------------------| -------------------------
document.createElement(element) | Cria um novo elemento HTML
document.removeChild(element)   | Remove um elemento
document.appendChild(element)   | Adiciona um elemento
document.replaceChild(new, old) | Substitui um elemento
