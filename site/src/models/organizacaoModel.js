var database = require("../database/config");

function buscar(idOrganizacao) {
  const instrucao = `SELECT * FROM Organizacao WHERE idOrganizacao  = ${idOrganizacao}`;
  return database.executar(instrucao);
}

async function cadastrarOrganizacao(
  idPerfil,
  empresaNome,
  bairro,
  logradouro,
  cep,
  complemento,
  regiao
) {
  console.log(
    "ACESSEI O Organizao MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():"
  );

  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.
  var instrucao = `
        INSERT INTO Organizacao (nomeOrganizacao, regiao, logradouro , cep, bairro, complemento) VALUES 
        ('${empresaNome}', '${regiao}', '${logradouro}','${cep}','${bairro}','${complemento}');

    `;

  console.log("Executando a instrução SQL: \n" + instrucao);
  var linhaInserida = await database.executar(instrucao);

  instrucao = `
    UPDATE Perfil
    SET Perfil.fkOrg = ${linhaInserida.insertId}
    WHERE idPerfil = ${parseInt(idPerfil)};
  `
  console.log("Executando a instrução SQL: \n" + instrucao); 
  database.executar(instrucao);

  return linhaInserida.insertId;
}

module.exports = {
  buscar,
  cadastrarOrganizacao
};
