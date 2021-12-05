/*
Atividade 1: Maps
Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

Crie uma função getAdmins que recebe um Map;
Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usuários que são administradores.
 */

const mapUsuarios = new Map();
mapUsuarios.set('Luiz', 'Admin');
mapUsuarios.set('Pedro', 'User');
mapUsuarios.set('Ana', 'Admin');
mapUsuarios.set('Luiza', 'User');
mapUsuarios.set('Lucas', 'Admin');
mapUsuarios.set('Mariana', 'User');
mapUsuarios.set('Eduarda', 'Admin');

function getAdmins(map){
    let mapAdmins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            mapAdmins.push(key)
        }
    }
    return mapAdmins
}

console.log(getAdmins(mapUsuarios));