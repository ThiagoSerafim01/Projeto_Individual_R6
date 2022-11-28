//selecionando todos os elementos necessários
const start_btn_home = document.querySelector(".start_btn");
const start_btn = document.querySelector(".start_btn #button_play");
const info_box = document.querySelector(".info_box");
const highscores = document.querySelector("#highscores");
const scoreTextPoint = document.getElementById("score");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

const loader = document.getElementById("loader");
loader.classList.add("hidden");

// se o botão startQuiz for clicado
start_btn.onclick = () => {
  info_box.classList.add("activeInfo"); //mostrar as informações
};

// se o botão exitQuiz for clicado
exit_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); //ocultar as informações
};

// se o botão continueQuiz for clicado
continue_btn.onclick = () => {

  info_box.classList.remove("activeInfo"); //ocultar as informações
  start_btn_home.classList.add("hidden");

  loader.classList.remove("hidden");
  const myTimeout = setTimeout(startQuiz, 3000);

  function startQuiz() {
    loader.classList.add("hidden");
    start_btn_home.classList.remove("hidden");
    quiz_box.classList.add("activeQuiz"); //mostrar caixa de teste
    showQuetions(0); //chamando a função showQestions
    queCounter(1); //passando 1 parâmetro para queCounter
    startTimer(15); //chamando a função startTimer
    startTimerLine(0);
  }
};

let timeValue = 15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// se o botão restartQuiz for clicado
restart_quiz.onclick = () => {
  localStorage.setItem("mostRecentScore", userScore); /*ir para a página final*/
  return window.location.assign("./end.html");
};

// se o botão quitQuiz for clicado
quit_quiz.onclick = () => {
  window.location.reload(); //recarregar a janela atual
};

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// se o botão proximo Que foi clicado
next_btn.onclick = () => {
  if (que_count < questions.length - 1) {
    //se a contagem de perguntas for menor que o tamanho total das perguntas
    que_count++; //incrementar o valor que_count
    que_numb++; //incrementar o valor que_numb
    showQuetions(que_count); //chamando a função showQestions
    queCounter(que_numb); //passando valor que_numb para queCounter
    clearInterval(counter); //limpar contador
    clearInterval(counterLine); //limpar contraLinha
    startTimer(timeValue); //chamando a função startTimerLine
    startTimerLine(widthValue); //chamando a função startTimerLine
    timeText.textContent = "Tempo Restante"; //chamando a função startTimerLine  Time Left
    next_btn.classList.remove("show"); // se o botão proximo Que foi clicado
  } else {
    clearInterval(counter); //limpar contador
    clearInterval(counterLine); //limpar contraLinha
    showResult(); //chamando a função showResult

  }
};

// obtendo perguntas e opções do array
function showQuetions(index) {
  loader.classList.add("hidden");
  const que_text = document.querySelector(".que_text");
  //criando uma nova tag span e div para question e option e passando o valor usando array index
  let que_tag =
    "<span>" +
    questions[index].numb +
    ". " +
    questions[index].question +
    "</span>";
  let option_tag =
    '<div class="option"><p class="choice-prefix">A</p><p class="choice-text" data-number="1"><span class="question">' +
    questions[index].options[0] +
    "</span></div>" +
    '<div class="option"><p class="choice-prefix">B</p><p class="choice-text" data-number="2"><span class="question">' +
    questions[index].options[1] +
    "</span></p></div>" +
    '<div class="option"><p class="choice-prefix">C</p><p class="choice-text" data-number="3"><span class="question">' +
    questions[index].options[2] +
    "</span></p></div>" +
    '<div class="option"><p class="choice-prefix">D</p><p class="choice-text" data-number="4"><span class="question">' +
    questions[index].options[3] +
    "</span></p></div>";
  que_text.innerHTML = que_tag; //adicionando nova tag span dentro de que_tag
  option_list.innerHTML = option_tag; //adicionando nova tag div dentro de option_tag


  const option = option_list.querySelectorAll(".option");

  // definir o atributo onclick para todas as opções disponíveis
  for (i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}
// criando as novas tags div que para ícones
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//se o usuário clicou na opção
function optionSelected(answer) {
  clearInterval(counter); //limpar contador
  clearInterval(counterLine); //limpar time
  let userAns = answer.querySelector(".choice-text", "InserirResultado()").textContent; //obtendo a opção selecionada pelo usuário
  let correcAns = questions[que_count].answer; //obtendo a resposta correta da matriz
  const allOptions = option_list.children.length; //obtendo todos os itens de opção
  if (userAns == correcAns) {
    //se a opção selecionada pelo usuário for igual à resposta correta da matriz(answer)
    userScore += 1; //atualizando o valor da pontuação com 1
    scoreTextPoint.innerHTML = userScore * 10;
    answer.classList.add("correct"); //adicionando cor verde para corrigir a opção selecionada
    answer.insertAdjacentHTML("beforeend", tickIconTag); //adicionando ícone de marca para corrigir a opção selecionada
    console.log("Correct Answer");
    console.log("Your correct answers = " + userScore);
  } else {
    answer.classList.add("incorrect"); //adicionando cor vermelha para corrigir a opção selecionada
    answer.insertAdjacentHTML("beforeend", crossIconTag); //adicionando ícone de cruz para corrigir a opção selecionada
    console.log("Wrong Answer");
    
    for (i = 0; i < allOptions; i++) {
      if (option_list.children[i].textContent == correcAns) {
        //se houver uma opção que corresponda a uma matrizanswer
        option_list.children[i].setAttribute("class", "option correct"); //adicionando cor verde à opção correspondente
        option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adicionando o ícone de marca à opção correspondente
        console.log("Auto selected correct answer.");
      }
    }
  }
  for (i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled"); //uma vez que o usuário seleciona uma opção, desativa todas as opções
  }
  next_btn.classList.add("show"); //mostrar o próximo botão se o usuário selecionou qualquer opção
  InserirResultado()
}

function InserirResultado() {
  var pontuação = userScore * 10 ;
  var idPerfil = sessionStorage.ID_PERFIL;

  fetch(`/quiz/inserirtentativa/${idPerfil}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      RespostaCertaServer: pontuação,
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        console.log("Tentativa inserida com sucesso");
      } else {
        alert("Houve um erro ao tentar inserir a  tentativa!");
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });

  return false;
}

function showResult() {
  fetch("/quiz/listarAvaliacao")
    .then(function (resposta) {
      if (resposta.ok) {
        if (resposta.status == 204) {
          alert("Nenhum resultado encontrado.");
        }
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          for (let c = 0; c <= resposta.length; c++) {
            info_box.classList.remove("activeInfo"); //ocultar caixa de informações
            quiz_box.classList.remove("activeQuiz"); //ocultar caixa do quiz
            result_box.classList.add("activeResult"); //mostrar o resultado
            const scoreText = result_box.querySelector(".score_text");
            if (userScore > 3) {
              // se o usuário marcou mais de 3
              //criando uma nova tag span e passando o número da pontuação do usuário e o número total da pergunta
              let scoreTag =
                "<span>E parabéns!!, você fez <p>" +
                userScore * 10 +
                "</p> de <p>" +
                questions.length * 10 +
                "</p></span>";
              scoreText.innerHTML = scoreTag; //adicionando nova tag span dentro de score_Text
            } else if (userScore > 1) {
              // se o usuário marcou mais de 1
              let scoreTag =
                "<span>E legal, você fez  <p>" +
                userScore * 10 +
                "</p> de <p>" +
                questions.length * 10 +
                "</p></span>";
              scoreText.innerHTML = scoreTag;
            } else {
              // se o usuário marcou menos de 1
              let scoreTag =
                "<span>e desculpe , Você fez apenas <p>" +
                userScore * 10 +
                "</p> de <p>" +
                questions.length * 10 +
                "</p></span>";
              scoreText.innerHTML = scoreTag;
            }
          }
        });
      } else {
        throw "Houve um erro na API!";
      }
    })
    .catch(function (resposta) {
      console.error(resposta);
    });
}


function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time; //alterando o valor de timeCount com valor de tempo
    time--; //diminuir o valor do tempo
    if (time < 9) {
      //se o timer for menor que 9

      let addZero = timeCount.textContent;
      timeCount.textContent = "0" + addZero; //adicione um 0 antes do valor do tempo
    }
    if (time < 0) {
      //se o temporizador for menor que 0
      clearInterval(counter); //limpar contador
      timeText.textContent = "Intervalo"; //altere o texto da hora para folga
      const allOptions = option_list.children.length; //obtendo todos os itens de opção
      let correcAns = questions[que_count].answer; //obtendo a resposta correta da matriz
      for (i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent == correcAns) {
          //se houver uma opção que corresponda a uma matriz(answer)
          option_list.children[i].setAttribute("class", "option correct"); //adicionando cor verde à opção correspondente
          option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adicionando o ícone de marca à opção correspondente
          console.log("Time Off: Auto selected correct answer.");
        }
      }
      for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); //uma vez que o usuário seleciona uma opção, desativa todas as opções
      }
      next_btn.classList.add("show"); //mostrar o próximo botão se o usuário selecionou qualquer opção
    }
  }
}

function startTimerLine(time) {
  counterLine = setInterval(timer, 29);
  function timer() {
    time += 1; //atualizando o valor do tempo com 1
    time_line.style.width = time + "px"; //aumentando a largura da time_line com px por valor de tempo
    if (time > 549) {
      //se o valor do tempo for maior que 549
      clearInterval(counterLine); //limpar contraLinha
    }
  }
}

function queCounter(index) {
  //criando uma nova tag span e passando o número da pergunta e o total da pergunta
  let totalQueCounTag =
    "<span><p>" +
    index +
    "</p> de <p>" +
    questions.length +
    "</p> Questões</span>";
  bottom_ques_counter.innerHTML = totalQueCounTag; //adicionando nova tag span dentro bottom_ques_counter
}

