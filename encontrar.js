const clientes = require("./cliente.json");

function encontrar(lisa, chave, valor){
    return lista.find((item) => item[chave] === valor);
}

const encontrado = encontrar(clientes, "nome","Greer");

console.log(encontrado);