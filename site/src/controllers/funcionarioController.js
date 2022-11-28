var funcionarioModel = require("../models/funcionarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA funcionarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function buscar(req, res) {
    const idOrganizacao = req.params.idOrganizacao;

    funcionarioModel.buscar(idOrganizacao)
        .then(
            function (resultado) {
                res.json(resultado[0]);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listarFuncionario(req, res) {
    var idOrganizacao = req.params.idOrganizacao;
    funcionarioModel.listarFuncionario(idOrganizacao)
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


function cadastrarFuncionario(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var user = req.body.userServer;
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var contato = req.body.contatoServer;
    var funcao = req.body.funcaoServer;
    var idOrganizacao = req.params.idOrganizacao;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (user == undefined) {
        res.status(400).send("Seu user está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Sua email está undefined!");
    }
    
    else {
        
        // Passe os valores como parâmetro e vá para o arquivo funcionarioModel.js
        funcionarioModel.cadastrarFuncionario(user, nome, email, contato, funcao, idOrganizacao)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrarFuncionario,
    listarFuncionario,
    testar,
    buscar
}