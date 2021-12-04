## Conceito de protótipos e cadeia de protótipos
- Todos os objetos JS herdam propriedades e métodos de um prototype. O objeto Object.prototype está no topo da cadeia.
- tipo um esqueleto de todos os objetos
- a classe __ proto __ tem métodos nele, é um objeto pai

</br>

## Apresentar a estrutura de classes em JavaScript
- classes no JS não existem nativamente
- SYNTATIC SUGAR
- qualquer tipo de herança é feito por protótipos
- está sendo feito "por baixo dos panos" por objetos
- Todas as classes são objetos e a herança se dá por protótipos

</br>

OLD:
~~~~JavaScript
var Meal = funnction(food){
    this.food
}

Meal.prototype.eat = function(){
    return 'satisfeito(a)!'
}
~~~~

</br>

NEW
~~~~JavaScript
class Meal{
    constructor (food){
        this.food = food;
    }

    eat(){
        return 'satisfeito(a)!'
    }
}
~~~~

## CLASSES
- construtor
- getter - get e settter - set

### classes filhas
- super() -> mandar pra função pai os parâmetros que estão ali
- método