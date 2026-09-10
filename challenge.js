// ======================================================
// SENTINELA — DESAFIO 1.0
// ======================================================

const CHALLENGES = [

  // ====================================================
  // 1 — LINKS E PHISHING
  // ====================================================

  {
    category: "🔗 Links e phishing",
    situation:
      "Você recebe uma mensagem dizendo: \"Seu banco identificou uma movimentação suspeita. Clique no link abaixo e informe sua senha para cancelar a operação imediatamente.\"",

    options: [
      "Clicar no link e informar a senha.",
      "Responder à mensagem pedindo mais informações.",
      "Entrar diretamente no aplicativo oficial do banco e verificar a movimentação.",
      "Encaminhar a mensagem para outras pessoas."
    ],

    correct: 2,

    points: [0, 5, 10, 0],

    explanation:
      "A decisão mais segura é acessar diretamente o aplicativo ou site oficial. Senhas e códigos não devem ser informados por links recebidos em mensagens.",

    indicators:
      "Link + senha + urgência + ameaça",

    skill:
      "Identificação de phishing"
  },


  {
    category: "🔗 Links e phishing",
    situation:
      "Você recebe um SMS: \"Último aviso! Seu pacote será devolvido hoje. Acesse o link para pagar uma pequena taxa de entrega.\"",

    options: [
      "Pagar a taxa imediatamente.",
      "Acessar o site oficial da transportadora digitando o endereço manualmente.",
      "Clicar no link porque a mensagem parece urgente.",
      "Enviar seus dados pessoais para confirmar a entrega."
    ],

    correct: 1,

    points: [0, 10, 0, 0],

    explanation:
      "A urgência e a cobrança por meio de um link são sinais de alerta. O ideal é verificar a entrega diretamente no canal oficial da transportadora.",

    indicators:
      "Urgência + prazo + link + pagamento",

    skill:
      "Verificação de links"
  },


  {
    category: "🔗 Links e phishing",
    situation:
      "Uma mensagem informa: \"Sua conta será suspensa. Para evitar o bloqueio, clique aqui e confirme seus dados.\"",

    options: [
      "Clicar rapidamente para evitar o bloqueio.",
      "Confirmar os dados pelo link.",
      "Ignorar completamente qualquer informação sobre a conta.",
      "Verificar a situação diretamente pelo aplicativo ou site oficial."
    ],

    correct: 3,

    points: [0, 0, 5, 10],

    explanation:
      "Mensagens que combinam ameaça de bloqueio, urgência e link devem ser verificadas por um canal oficial.",

    indicators:
      "Ameaça + urgência + link",

    skill:
      "Reconhecimento de phishing"
  },


  {
    category: "🔗 Links e phishing",
    situation:
      "Você recebe um link encurtado dizendo: \"Parabéns! Você foi selecionado. Clique para conferir seu prêmio.\"",

    options: [
      "Clicar porque você pode ter ganhado um prêmio.",
      "Compartilhar o link com seus amigos.",
      "Verificar se participou realmente da promoção e procurar o canal oficial da empresa.",
      "Informar seu CPF antes de abrir o link."
    ],

    correct: 2,

    points: [0, 0, 10, 0],

    explanation:
      "Prêmio inesperado combinado com link suspeito é um forte sinal de alerta. A promoção deve ser confirmada diretamente no canal oficial.",

    indicators:
      "Prêmio + link suspeito",

    skill:
      "Análise crítica de ofertas"
  },


  {
    category: "🔗 Links e phishing",
    situation:
      "Uma pessoa envia um QR Code dizendo que você precisa escaneá-lo para receber uma suposta restituição.",

    options: [
      "Escanear imediatamente.",
      "Verificar primeiro se existe realmente uma restituição e consultar o canal oficial.",
      "Enviar o QR Code para outra pessoa testar.",
      "Fornecer seus dados antes de escanear."
    ],

    correct: 1,

    points: [0, 10, 0, 0],

    explanation:
      "QR Codes podem direcionar para páginas ou ações desconhecidas. Antes de utilizá-los, a informação deve ser confirmada por uma fonte oficial.",

    indicators:
      "QR Code + benefício inesperado",

    skill:
      "Uso seguro de QR Codes"
  },


  // ====================================================
  // 6 — PIX E PAGAMENTOS
  // ====================================================

  {
    category: "💰 Pix e pagamentos",
    situation:
      "Uma pessoa conhecida envia: \"Troquei de número. Preciso que você faça um Pix urgente para pagar uma conta. Não conte para ninguém.\"",

    options: [
      "Fazer o Pix imediatamente.",
      "Confirmar a identidade da pessoa por outro canal antes de qualquer pagamento.",
      "Pedir a chave Pix e pagar sem confirmar.",
      "Enviar metade do valor para testar."
    ],

    correct: 1,

    points: [0, 10, 0, 5],

    explanation:
      "Troca de número, urgência e pedido de segredo podem indicar uma tentativa de engenharia social. Confirme a identidade por outro canal.",

    indicators:
      "Pix + urgência + segredo + identidade",

    skill:
      "Prevenção contra engenharia social"
  },


  {
    category: "💰 Pix e pagamentos",
    situation:
      "Uma empresa oferece uma vaga de emprego e informa: \"Para liberar seu cadastro, faça um pagamento de R$ 50 hoje.\"",

    options: [
      "Pagar para garantir a vaga.",
      "Pedir um desconto na taxa.",
      "Verificar a empresa e desconfiar da cobrança para participar da seleção.",
      "Enviar CPF e comprovante antes de confirmar."
    ],

    correct: 2,

    points: [0, 0, 10, 0],

    explanation:
      "Cobrança antecipada para liberar uma oportunidade de emprego é um forte sinal de alerta.",

    indicators:
      "Pagamento antecipado + emprego",

    skill:
      "Reconhecimento de falsas oportunidades"
  },


  {
    category: "💰 Pix e pagamentos",
    situation:
      "Você recebe: \"Você ganhou R$ 5.000! Para liberar o prêmio, faça um Pix de R$ 80 referente à taxa de processamento.\"",

    options: [
      "Fazer o Pix porque o valor do prêmio é muito maior.",
      "Pedir para a pessoa descontar a taxa do prêmio.",
      "Não pagar e verificar a suposta promoção em um canal oficial.",
      "Enviar seus dados bancários para receber o prêmio."
    ],

    correct: 2,

    points: [0, 5, 10, 0],

    explanation:
      "Prêmio inesperado associado a pagamento antecipado é uma combinação clássica de sinais de risco.",

    indicators:
      "Prêmio + Pix + taxa",

    skill:
      "Análise de golpes financeiros"
  },


  {
    category: "💰 Pix e pagamentos",
    situation:
      "Uma mensagem informa que existe uma dívida urgente e pede pagamento por Pix para evitar uma multa.",

    options: [
      "Pagar imediatamente.",
      "Verificar a dívida diretamente no site ou aplicativo oficial da instituição.",
      "Responder perguntando se a cobrança é verdadeira.",
      "Enviar o comprovante antes de confirmar a dívida."
    ],

    correct: 1,

    points: [0, 10, 5, 0],

    explanation:
      "Cobrança, ameaça e urgência podem ser utilizadas para pressionar uma decisão. A dívida deve ser confirmada diretamente com a instituição.",

    indicators:
      "Cobrança + urgência + ameaça + Pix",

    skill:
      "Verificação de cobranças"
  },


  // ====================================================
  // 10 — SENHAS E CÓDIGOS
  // ====================================================

  {
    category: "🔐 Senhas e códigos",
    situation:
      "Uma pessoa afirma ser do suporte de uma rede social e pede o código recebido por SMS para \"confirmar sua identidade\".",

    options: [
      "Informar o código para confirmar a identidade.",
      "Enviar apenas os últimos números do código.",
      "Não compartilhar o código e procurar o suporte pelo canal oficial.",
      "Perguntar por que precisam do código e depois enviar."
    ],

    correct: 2,

    points: [0, 0, 10, 5],

    explanation:
      "Códigos de verificação são informações de segurança. O usuário não deve compartilhá-los com terceiros.",

    indicators:
      "Código de verificação + falsa autoridade",

    skill:
      "Proteção de contas"
  },


  {
    category: "🔐 Senhas e códigos",
    situation:
      "Você recebe um e-mail pedindo sua senha para evitar que sua conta seja bloqueada.",

    options: [
      "Enviar a senha porque a mensagem parece oficial.",
      "Alterar a senha pelo link do e-mail.",
      "Acessar o serviço diretamente pelo endereço oficial e verificar a conta.",
      "Responder ao e-mail pedindo confirmação."
    ],

    correct: 2,

    points: [0, 0, 10, 5],

    explanation:
      "Senhas não devem ser fornecidas por e-mail. A conta deve ser verificada diretamente pelo serviço oficial.",

    indicators:
      "Senha + ameaça de bloqueio",

    skill:
      "Proteção de credenciais"
  },


  {
    category: "🔐 Senhas e códigos",
    situation:
      "Um suposto técnico pede acesso remoto ao seu computador para corrigir um problema que você não identificou.",

    options: [
      "Instalar o aplicativo indicado.",
      "Permitir acesso remoto somente porque a pessoa diz ser técnica.",
      "Encerrar o contato e procurar o suporte oficial por conta própria.",
      "Permitir o acesso, mas ficar observando."
    ],

    correct: 2,

    points: [0, 0, 10, 5],

    explanation:
      "Acesso remoto pode permitir que outra pessoa controle ou visualize o dispositivo. O contato deve ser confirmado por um canal oficial.",

    indicators:
      "Falsa autoridade + acesso remoto",

    skill:
      "Segurança do dispositivo"
  },


  {
    category: "🔐 Senhas e códigos",
    situation:
      "Uma mensagem diz: \"Enviei um código para seu celular por engano. Pode me mandar? Preciso dele para entrar na minha conta.\"",

    options: [
      "Enviar o código porque ele foi recebido por engano.",
      "Enviar somente se a pessoa for conhecida.",
      "Não compartilhar o código e verificar a segurança da própria conta.",
      "Enviar o código e depois trocar a senha."
    ],

    correct: 2,

    points: [0, 0, 10, 5],

    explanation:
      "Um código recebido no seu telefone pode estar relacionado à sua própria conta. Nunca compartilhe códigos de autenticação.",

    indicators:
      "Código de verificação + manipulação",

    skill:
      "Autenticação segura"
  },


  // ====================================================
  // 14 — ENGENHARIA SOCIAL
  // ====================================================

  {
    category: "🎭 Engenharia social",
    situation:
      "Uma pessoa se apresenta como funcionário de uma instituição e diz que precisa confirmar seus dados imediatamente.",

    options: [
      "Fornecer os dados para resolver rapidamente.",
      "Perguntar o nome do funcionário e fornecer os dados.",
      "Encerrar o contato e procurar a instituição por um canal oficial.",
      "Enviar somente o CPF."
    ],

    correct: 2,

    points: [0, 5, 10, 0],

    explanation:
      "Alegações de autoridade não são suficientes para comprovar identidade. A confirmação deve ser feita por outro canal.",

    indicators:
      "Falsa autoridade + urgência + dados pessoais",

    skill:
      "Verificação de identidade"
  },


  {
    category: "🎭 Engenharia social",
    situation:
      "Você recebe uma mensagem de um suposto familiar: \"Estou desesperado! Preciso de dinheiro agora. Não consigo falar por telefone.\"",

    options: [
      "Fazer o Pix imediatamente.",
      "Confirmar a identidade por outro meio antes de enviar qualquer dinheiro.",
      "Enviar uma pequena quantia primeiro.",
      "Pedir uma chave Pix e pagar."
    ],

    correct: 1,

    points: [0, 10, 5, 0],

    explanation:
      "Pressão emocional e urgência podem ser utilizadas para manipular a vítima. A identidade deve ser confirmada por outro meio.",

    indicators:
      "Manipulação emocional + urgência + Pix",

    skill:
      "Reconhecimento de engenharia social"
  },


  {
    category: "🎭 Engenharia social",
    situation:
      "Uma pessoa pede que você mantenha uma negociação em segredo e não conte para familiares ou colegas.",

    options: [
      "Manter segredo para não prejudicar a oportunidade.",
      "Continuar, mas sem informar seus dados.",
      "Desconfiar da pressão e procurar orientação antes de continuar.",
      "Compartilhar somente seu telefone."
    ],

    correct: 2,

    points: [0, 5, 10, 0],

    explanation:
      "Pedidos de segredo podem impedir que a pessoa confirme a informação com alguém de confiança.",

    indicators:
      "Segredo + manipulação",

    skill:
      "Pensamento crítico"
  },


  // ====================================================
  // 17 — OFERTAS E PRÊMIOS
  // ====================================================

  {
    category: "🎁 Ofertas e prêmios",
    situation:
      "Uma loja envia uma mensagem dizendo que você ganhou um celular em uma promoção da qual não se lembra de ter participado.",

    options: [
      "Enviar seus dados para receber o celular.",
      "Clicar no link enviado.",
      "Verificar a promoção diretamente nos canais oficiais da loja.",
      "Pedir para pagarem o frete primeiro."
    ],

    correct: 2,

    points: [0, 0, 10, 5],

    explanation:
      "Um prêmio inesperado deve ser confirmado antes de qualquer fornecimento de dados, pagamento ou clique em links.",

    indicators:
      "Prêmio inesperado",

    skill:
      "Análise de promoções"
  },


  {
    category: "🎁 Ofertas e prêmios",
    situation:
      "Uma oferta promete ganhar dinheiro rapidamente, sem investimento e com rendimento garantido.",

    options: [
      "Investir rapidamente para aproveitar a oportunidade.",
      "Enviar seus dados para conhecer a proposta.",
      "Pesquisar a empresa, verificar as informações e desconfiar de promessa de ganho garantido.",
      "Compartilhar a oferta com amigos."
    ],

    correct: 2,

    points: [0, 0, 10, 0],

    explanation:
      "Promessas de dinheiro fácil ou rendimento garantido devem ser analisadas criticamente antes de qualquer ação.",

    indicators:
      "Dinheiro fácil + benefício excepcional",

    skill:
      "Avaliação crítica de ofertas"
  },


  // ====================================================
  // 19 — DOWNLOADS
  // ====================================================

  {
    category: "📲 Downloads e aplicativos",
    situation:
      "Você recebe uma mensagem dizendo que precisa baixar um aplicativo enviado por um desconhecido para liberar uma encomenda.",

    options: [
      "Baixar o aplicativo imediatamente.",
      "Pesquisar a empresa e utilizar somente o aplicativo ou site oficial.",
      "Baixar o aplicativo e verificar depois.",
      "Enviar o aplicativo para um amigo testar."
    ],

    correct: 1,

    points: [0, 10, 0, 0],

    explanation:
      "Aplicativos recebidos por mensagens podem representar risco ao dispositivo. Utilize apenas fontes confiáveis e oficiais.",

    indicators:
      "Download suspeito",

    skill:
      "Segurança de aplicativos"
  },


  {
    category: "📲 Downloads e aplicativos",
    situation:
      "Uma pessoa afirma ser do suporte e pede que você instale um programa de acesso remoto para resolver um problema.",

    options: [
      "Instalar o programa imediatamente.",
      "Instalar, mas não informar a senha.",
      "Não instalar e procurar o suporte oficial diretamente.",
      "Pedir que a pessoa envie outro programa."
    ],

    correct: 2,

    points: [0, 5, 10, 0],

    explanation:
      "Programas de acesso remoto podem permitir controle do dispositivo. A solicitação deve ser confirmada por um canal oficial.",

    indicators:
      "Acesso remoto + falsa autoridade",

    skill:
      "Proteção do dispositivo"
  }

];


// ======================================================
// ESTADO
// ======================================================

let challengeIndex = 0;
let challengeScore = 0;
let challengeAnswered = false;


// ======================================================
// INICIAR
// ======================================================

function startChallenge() {

  challengeIndex = 0;
  challengeScore = 0;
  challengeAnswered = false;

  show("challenge");

  setTimeout(() => {
    renderChallenge();
  }, 50);
}


// ======================================================
// RENDERIZAR
// ======================================================

function renderChallenge() {

  const challenge = CHALLENGES[challengeIndex];

  if (!challenge) {
    finishChallenge();
    return;
  }

  challengeAnswered = false;


  // PROGRESSO

  const progress =
    document.getElementById("challengeProgress");

  if (progress) {
    progress.textContent =
      `Questão ${challengeIndex + 1} de ${CHALLENGES.length}`;
  }


  const progressBar =
    document.getElementById("progressBar");

  if (progressBar) {

    const percentage =
      (challengeIndex / CHALLENGES.length) * 100;

    progressBar.style.width =
      `${percentage}%`;
  }


  // CATEGORIA

  const category =
    document.getElementById("challengeCategory");

  if (category) {
    category.textContent =
      challenge.category;
  }


  // SITUAÇÃO

  const situation =
    document.getElementById("challengeSituation");

  if (situation) {
    situation.textContent =
      challenge.situation;
  }


  // ALTERNATIVAS

  const options =
    document.getElementById("challengeOptions");

  if (!options) {
    console.error(
      "SENTINELA: #challengeOptions não encontrado."
    );
    return;
  }

  options.innerHTML = "";


  challenge.options.forEach((text, index) => {

    const button =
      document.createElement("button");

    button.type = "button";

    button.className =
      "challenge-option";

    button.innerHTML = `
      <span class="option-letter">
        ${String.fromCharCode(65 + index)}
      </span>

      <span>
        ${escapeChallengeHTML(text)}
      </span>
    `;


    button.onclick = function() {
      answerChallenge(index);
    };


    options.appendChild(button);

  });


  // FEEDBACK

  const feedback =
    document.getElementById("challengeFeedback");

  if (feedback) {
    feedback.style.display = "none";
  }

}


// ======================================================
// ESCAPE DE TEXTO
// ======================================================

function escapeChallengeHTML(text) {

  const div =
    document.createElement("div");

  div.textContent =
    text;

  return div.innerHTML;
}


// ======================================================
// RESPONDER
// ======================================================

function answerChallenge(selectedIndex) {

  if (challengeAnswered) {
    return;
  }

  challengeAnswered = true;


  const challenge =
    CHALLENGES[challengeIndex];


  const points =
    challenge.points[selectedIndex];


  challengeScore += points;


  const buttons =
    document.querySelectorAll(
      ".challenge-option"
    );


  buttons.forEach((button, index) => {

    button.disabled = true;

    if (index === challenge.correct) {
      button.classList.add("correct");
    }

    if (
      index === selectedIndex &&
      index !== challenge.correct
    ) {
      button.classList.add("incorrect");
    }

  });


  const feedback =
    document.getElementById(
      "challengeFeedback"
    );


  const title =
    document.getElementById(
      "feedbackTitle"
    );


  const text =
    document.getElementById(
      "feedbackText"
    );


  const pointsElement =
    document.getElementById(
      "feedbackPoints"
    );


  if (feedback) {
    feedback.style.display = "block";
  }


  if (title) {

    if (selectedIndex === challenge.correct) {

      title.textContent =
        "✅ Decisão segura!";

    }

    else if (points === 5) {

      title.textContent =
        "🟡 Decisão parcialmente adequada";

    }

    else {

      title.textContent =
        "❌ Essa não foi a decisão mais segura";

    }

  }


  if (text) {

    text.innerHTML = `
      <strong>Por quê?</strong>

      <p>
        ${escapeChallengeHTML(challenge.explanation)}
      </p>

      <p>
        <strong>Sinais envolvidos:</strong>
        ${escapeChallengeHTML(challenge.indicators)}
      </p>

      <p>
        <strong>Habilidade:</strong>
        ${escapeChallengeHTML(challenge.skill)}
      </p>
    `;

  }


  if (pointsElement) {

    pointsElement.textContent =
      `+${points} pontos`;

  }


  const progressBar =
    document.getElementById("progressBar");

  if (progressBar) {

    const percentage =
      ((challengeIndex + 1) /
        CHALLENGES.length) * 100;

    progressBar.style.width =
      `${percentage}%`;

  }

}


// ======================================================
// PRÓXIMA
// ======================================================

function nextChallenge() {

  challengeIndex++;

  if (
    challengeIndex >=
    CHALLENGES.length
  ) {

    finishChallenge();

    return;
  }


  renderChallenge();


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


// ======================================================
// FINAL
// ======================================================

function finishChallenge() {

  const maxScore =
    CHALLENGES.length * 10;


  const percentage =
    Math.round(
      (challengeScore / maxScore) * 100
    );


  let level =
    "⚠️ Precisa de Atenção";


  let message =
    "Continue treinando para desenvolver seu instinto digital.";


  if (percentage >= 90) {

    level =
      "🛡️ Guardião Digital";

    message =
      "Excelente! Você demonstrou grande capacidade de reconhecer situações de risco.";

  }

  else if (percentage >= 70) {

    level =
      "🔰 Sentinela Avançado";

    message =
      "Muito bom! Você reconhece a maioria dos sinais de risco.";

  }

  else if (percentage >= 50) {

    level =
      "📚 Em Treinamento";

    message =
      "Você já reconhece alguns sinais, mas ainda precisa praticar.";

  }


  const profileLevel =
    document.getElementById(
      "profileLevel"
    );

  const profileScore =
    document.getElementById(
      "profileScore"
    );

  const profileMessage =
    document.getElementById(
      "profileMessage"
    );


  if (profileLevel) {
    profileLevel.textContent =
      level;
  }


  if (profileScore) {
    profileScore.textContent =
      `${percentage} / 100`;
  }


  if (profileMessage) {
    profileMessage.textContent =
      message;
  }


  show("profile");

}


// ======================================================
// FUNÇÕES GLOBAIS
// ======================================================

window.startChallenge =
  startChallenge;

window.answerChallenge =
  answerChallenge;

window.nextChallenge =
  nextChallenge;