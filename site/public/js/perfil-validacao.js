/* Validando os campos da org */
var validar_org = false;
function validarEmpresa() {
  var org = inputOrg.value;
  /* Verifica se o nome da org tem mais de 3 caractéres */
  if (org.length < 3) {
    inputOrg.classList.add("red");
    inputOrg.classList.remove("green");
  } else {
    inputOrg.classList.remove("red");
    inputOrg.classList.add("green");
    validar_org = true;
  }
}
//Validando regiao da org com os 4 caracteres
var validar_regiao = false;
function validarRegiao() {
  var regiao = inputRegiao.value;
  /* Verifica se o usuario tem mais de 4 caractéres */
  if (regiao.length < 3) {
    inputRegiao.classList.add("red");
    inputRegiao.classList.remove("green");
  } else {
    inputRegiao.classList.remove("red");
    inputRegiao.classList.add("green");
    validar_regiao = true;
  }
}

//Validando o Logradouro da org
var validar_logradouro = false;
function validarLogradouro() {
  var logradouro = inputLogradouro.value;
  /* Verifica se o logradouro tem mais de 3 caractéres */
  if (logradouro.length < 3) {
    inputLogradouro.classList.add("red");
    inputLogradouro.classList.remove("green");
  } else {
    inputLogradouro.classList.remove("red");
    inputLogradouro.classList.add("green");
    validar_logradouro = true;
  }
}
//Validando a cidade da org
var validar_cidade = false;
function validarCidade() {
  var cidade = inputCidade.value;
  /* Verifica se a cidade tem mais de 8 caractéres */
  if (cidade.length < 1) {
    inputCidade.classList.add("red");
    inputCidade.classList.remove("green");
  } else {
    inputCidade.classList.remove("red");
    inputCidade.classList.add("green");
    validar_cidade = true;
  }
}

// Validando o CEP da org
var validar_cep = false;
function validarCEP() {
  var CEP = inputCEP.value;
  /* Verifica se a cidade tem mais de 8 caractéres */
  if (CEP.length != 8) {
    inputCEP.classList.add("red");
    inputCEP.classList.remove("green");
  } else {
    inputCEP.classList.remove("red");
    inputCEP.classList.add("green");
    validar_cep = true;
  }
}

//Validando o Bairro da org
validar_bairro = false;
function validarBairro() {
  var bairro = inputBairro.value;
  //Verifica se o bairro da org tem mais que 6 caracteres
  if (bairro.length < 3) {
    inputBairro.classList.add("red");
    inputBairro.classList.remove("green");
  } else {
    inputBairro.classList.remove("red");
    inputBairro.classList.add("green");
    validar_bairro = true;
  }
}

//Validando o Complemento da org
function validarComplemento() {
  var complemento = inputBairro.value;
  //Verifica se o complemento da org tem mais que 4 caracteres
  if (complemento.length < 4) {
    inputComplemento.classList.add("red");
    inputComplemento.classList.remove("green");
  } else {
    inputComplemento.classList.remove("red");
    inputComplemento.classList.add("green");
  }
}
/* Validando os campos do cadastro do funcionario */
//Validando Nome de usuario
var validar_usuario = false;
function validarUsuario() {
  var usuario = inputUsuario.value;
  /* Verifica se o usuario tem mais de 6 caractéres */
  if (usuario.length < 6) {
    inputUsuario.classList.add("red");
    inputUsuario.classList.remove("green");
  } else {
    inputUsuario.classList.remove("red");
    inputUsuario.classList.add("green");
    validar_usuario = true;
  }
}
//Validando Nome Do usuario
var validar_nome = false;
function validarNome() {
  var nome = inputNome.value;
  /* Devolve a quantidade de nomes em numeros Ex: Sherlock Homes -> vai retornar 2 */
  const nomeCompleto = nome.split(" ");
  /* Verifica se a quantidade de nomes é menor que 1, pois ninguém tem um nome completo de um nome apenas */
  if (nomeCompleto.length <= 1) {
    inputNome.classList.add("red");
    inputNome.classList.remove("green");
  } else {
    inputNome.classList.remove("red");
    inputNome.classList.add("green");
    validar_nome = true;
  }
  /* Faz a substituição das primeiras letras dos nomes caso o usuário coloque a primeira leta do nome minuscula */
  for (let i = 0; i < nomeCompleto.length; i++) {
    nomeCompleto[i] =
      nomeCompleto[i][0].toUpperCase() + nomeCompleto[i].substr(1);
  }
  /* Junta os nomes novamente */
  nomeCompleto.join(" ");
}
//Validando Email do Usuario
var validar_email = false;
function validarEmail() {
  var email = inputEmail.value;
  var validacao = /\S+@\S+\.\S+/;
  /* Qualquer tipo de texto:
  Seguida por um caractere @ (que é obrigatório em e-mails);
  Seguido por algum outro texto, o domínio/provedor;
  E então temos a presença de um ponto, que também é obrigatório;
  E por fim mais um texto, validando tanto emails .com quanto .com.br, e outros que tenham terminologias diferentes */
  if (!validacao.test(email)) {
    inputEmail.classList.add("red");
    inputEmail.classList.remove("green");
  } else {
    inputEmail.classList.remove("red");
    inputEmail.classList.add("green");
    validar_email = true;
  }
}
//Validando Contato do Usuario
var validar_contato = false;
function validarContato() {
  var contato = inputContato.value;
  if (contato.length > 11) {
    // Valida números telefones celulares para contato
    inputContato.classList.add("red");
    inputContato.classList.remove("green");
  } else {
    inputContato.classList.remove("red");
    inputContato.classList.add("green");
    validar_contato = true;
  }
}

//Confirmar cadastro da org

 function registrar_org() {
   alert("org cadastrada com sucesso!");

//   //nome da empresa
var nome_empresa = json.nomeEmpresa;
titulo_div_empresa.innerHTML = nome_empresa;
subtitulo_div_empresa.remove();
inputOrg.remove();
nome_org_cadastro.innerHTML = `Nome da Empresa`;
nome_org_box.innerHTML += nome_empresa;

//cnpj da empresa
var cnpj_empresa = Number(json.cnpj);
inputRegiao.remove();
regiao_org_box.innerHTML += cnpj_empresa;
regiao_org_cadastro.innerHTML = "CNPJ";

//Logradouro da empresa
var logradouro_empresa = json.logradouro;
inputLogradouro.remove();
logradouro_org_box.innerHTML += logradouro_empresa;
logradouro_org_cadastro.innerHTML = "Logradouro";

//Cep da empresa
var cep_empresa = Number(json.cep);
inputCEP.remove();
cep_empresa_box.innerHTML += cep_empresa;
cep_empresa_cadastro.innerHTML = "CEP";

//Bairro da empresa
var bairro_empresa = json.bairro;
inputBairro.remove();
bairro_empresa_box.innerHTML += bairro_empresa;

//Complemento da empresa
var complemento_empresa = json.complemento;
inputComplemento.remove();
complemento_org_box.innerHTML += complemento_empresa;

btn_cadastrar_org.remove();
document.getElementById(
  "container_filho_empresa"
).style.marginLeft = "17vw";
document.getElementById("titulo_2_empresa").style.marginLeft =
  "12vw";
}
function botao_registro() {
  if (
    validar_org &&
    validar_regiao &&
    validar_logradouro &&
    validar_cidade &&
    validar_uf &&
    validar_cep &&
    validar_bairro
  ) {
    registrar_org();
  } else {
    alert("Cadastro inválido");
  }
}
var contador_div_funcionario = 0;
function registrar_func() {
  contador_div_funcionario += 1;
  alert("Cadastro realizado com sucesso!");

  const username = inputUsuario.value;
  const senha = inputSenha.value;
  const nome = inputNome.value;
  const email = inputEmail.value;
  const tel = inputContato.value;
  const funcao = select_funcao.value;

  tabela_funcionarios.innerHTML += `
  <div class="func" id="${contador_div_funcionario}">
    <div class="estilo-atributos">
      <h5>Login:</h5>
      <p>${username}</p>
    </div>
    <div class="estilo-atributos">
      <h5>Senha:</h5>
      <p>${senha}</p>
    </div>
    <div class="estilo-atributos">
      <h5>Nome Completo:</h5>
      <p>${nome}</p>
    </div>
    <div class="estilo-atributos">
      <h5>Email:</h5>
      <p>${email}</p>
    </div>
    <div class="estilo-atributos">
      <h5>Telefone:</h5>
      <p>${tel}</p>
    </div>
    <div class="estilo-atributos">
      <h5>Função:</h5>
      <p>${funcao}</p>
    </div>
    <button class="removerCard" onclick="removerCard(${contador_div_funcionario})">Remover</button>
</div>
  `;
}

function botao_registro_func() {
  if (
    validar_usuario &&
    validar_senha &&
    validar_nome &&
    validar_email
  ) {
    registrar_func();
  } else {
    alert("Cadastro de funcionário inválido");
  }
}

function removerCard(idFuncionario) {
  var card = document.getElementById(idFuncionario);
  card.remove();
}
