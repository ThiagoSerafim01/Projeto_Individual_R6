var empresaModel = require("../models/organizacaoModel");

function buscar(req, res) {
    const idOrganizacao = req.query.id;

    empresaModel.buscar(idOrganizacao)
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

function cadastrarOrganizacao(req, res) {

    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idPerfil = req.body.idPerfil;
    var empresaNome = req.body.empresaNomeServer;
    var regiao = req.body.cnpjServer;
    var logradouro = req.body.logradouroServer;
    var cep = req.body.cepServer;
    var bairro = req.body.bairroServer;
    var complemento = req.body.complementoVar;
    

    // Faça as validações dos valores
    if (empresaNome == undefined) {
        res.status(400).send("O nome da empresa está undefined!");
    } else if (regiao == undefined) {
        res.status(400).send("A região está undefined!");
    } else if (logradouro == undefined) {
        res.status(400).send("O logradouro está undefined!");
    } else if (estado == undefined) {
        res.status(400).send("O estado está undefined!");
    } else if (cep == undefined) {
        res.status(400).send("O CEP está undefined!");
    }
    else {
        
        // Passe os valores como parâmetro e vá para o arquivo empresaModel.js
        empresaModel.cadastrarOrganizacao(idPerfil, empresaNome,  bairro, logradouro,
            cep, complemento, regiao)
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
    buscar,
    cadastrarOrganizacao
};