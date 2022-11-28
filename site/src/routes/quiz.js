var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.get("/listarAvaliacao", function (req, res) {
    quizController.listarAvaliacao(req, res);
});

router.post("/inserirtentativa/:idPerfil", function (req, res) {
    quizController.inserirtentativa(req, res);
})
module.exports = router;