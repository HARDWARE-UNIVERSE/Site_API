var database = require("../database/config")

function limpar(idUsuario) {
    var instrucao2 = `
    delete from resultado where fkUsuario = ${idUsuario};
`;
return database.executar(instrucao2);
}

function cadastrar(nome, email, senha  ) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha );
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    

    var instrucao = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}','${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
   
}

module.exports = {
    limpar,
    cadastrar
};