const cliente = {
nome: "Joao",
idade: 24,
email: "joao@firma.com",
telefone: ["1155555550", "1144444440"],
};

//cliente.endereços = [
//{
//rua: "r. Joseph Climber",
//numero: 1337,
//apartamento: true,
//complemento: "ap 934",
//}
//];

const chavesDoObjeto = Object.keys(cliente);

if (!chavesDoObjeto.includes("enderecos")){
    console.error("erro. e necessario ter um endereco cadastrado");
}