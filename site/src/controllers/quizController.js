var quizmodel = require("../models/quizModel");

function listarAvaliacao(req, res) {
    quizmodel.listarAvaliacao()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function inserirtentativa(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var Pontuacao = req.body.RespostaCertaServer;
    var idPerfil = req.params.idPerfil;
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizmodel.inserirtentativa(Pontuacao, idPerfil)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao inserir as Tentativas! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

module.exports = {
    listarAvaliacao,
    inserirtentativa,
}