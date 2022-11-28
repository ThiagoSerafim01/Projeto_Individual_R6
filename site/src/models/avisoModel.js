var database = require("../database/config");

function listar() {
    console.log("ACESSEI O Comentarios  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT 
            a.idComentario AS idComentario,
            a.descricao,
            u.idPerfil AS idUsuario,
            u.nome,
            u.email,
        FROM Perfil u
            INNER JOIN Comentarios a
                ON a.idComentario = u.idPerfil;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function publicar(descricao) {
    console.log("ACESSEI O Comentarios MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ",descricao);
    var instrucao = `
        INSERT INTO Comentarios (comentario) VALUES (${descricao});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar,
    publicar,
}
