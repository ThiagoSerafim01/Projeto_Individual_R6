var express = require("express");
var router = express.Router();

var organizacaoController = require("../controllers/organizacaoController");

router.get("/", function (req, res) {
    organizacaoController.buscar(req, res);
});

router.get("/listar", function (req, res) {
    organizacaoController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de organizacaoController.js
router.post("/cadastrarOrganizacao", function (req, res) {
    organizacaoController.cadastrarOrganizacao(req, res);
})

router.post("/autenticar", function (req, res) {
    organizacaoController.entrar(req, res);
});

module.exports = router;