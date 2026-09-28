const clientes = require("./cliente.json");

function encontrar(lisa, chave, valor){
    return lista.find((item) => item[chave] === valor);
}

const encontrado = encontrar(clientes, "nome","Greer");

const encontrado2 = encontrar(cliente, "telefone", "1918820860");

console.log(encontrado2);