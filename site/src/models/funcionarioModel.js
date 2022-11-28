var database = require("../database/config");

async function buscar(idOrganizacao) {
  const instrucao = `SELECT * FROM Empresa WHERE idEmpresa = ${idOrganizacao}`;
  return database.executar(instrucao);
}

function listarFuncionario() {
  console.log(
    "ACESSEI O Perfil MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
        SELECT * FROM Perfil;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarFuncionario(
  user,
  nome,
  email,
  contato,
  funcao,
  idOrganizacao
) {
  console.log(
    "ACESSEI O Perfil MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
    user,
    nome,
    email,
    contato,
    funcao
  );

  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.
  var instrucao = `
        INSERT INTO Perfil (username, nome ,email, telefone, funcao, fkOrg) 
        VALUES ('${user}', '${nome}', '${email}', '${contato}', '${funcao}', ${idOrganizacao});
    `;
  // console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  cadastrarFuncionario,
  listarFuncionario,
  buscar,
};
