const pessoa = {
    nome: "Luma",
    profissao: "Engenharia"
};

console.log(pessoa.nome);

console.log(pessoa.telefone);

pessoa.telefone = "11 222333444";

console.log(pessoa.telefone);

pessoa.nome = "luma silva"

console.log(pessoa);

const novapessoa = {
    nome: "Pedro";
}

pessoa = novapessoa;