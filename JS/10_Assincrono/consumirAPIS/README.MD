# O que são APIS
## Application Programming Interface
- Uma API é uma forma de intermediar os resultados do back-end com oq é apresentado no front-end.
- Você consegue acessar através de URLs.

</br>

## é comum que APIs retornem os dados no formato .json(JavaScript Object Notation), então é preciso tratar esses dados quando recebê-los.

</br>

# fetch
~~~~javascript
fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))
    
//retorna uma Promisse
~~~~

- sempre converter a resposta pra json, caso ela venha como uma string, para poder usar dentro do js;
- como retorna uma promisse é preciso usar o await qnd usar o fetch.

### Operações no banco:
- POST;
- GET;
- PUT;
- DELETE;
Etc.

</br>

- GET
~~~~javascript
fetch('https://endereco-api.com/', {
    method: 'GET',
    cache: 'no-cache',
})
    .then(response => response.json())
    .then(json => console.log(json))
    
//retorna uma Promisse
~~~~

- POST
~~~~javascript
fetch('https://endereco-api.com/', {
    method: 'POST',
    cache: 'no-cache',
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(json => console.log(json))
    
//retorna uma Promisse
~~~~