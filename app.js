// ======================================================
// SENTINELA 1.1
// CONTROLE DA INTERFACE E RESULTADO DA ANÁLISE
// ======================================================


// ======================================================
// NAVEGAÇÃO ENTRE TELAS
// ======================================================

function show(id) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  const target = document.getElementById(id);

  if (target) {
    target.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// ======================================================
// SEGURANÇA — ESCAPA TEXTO ANTES DE INSERIR NO HTML
// ======================================================

function escapeHTML(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


// ======================================================
// CALCULA A PONTUAÇÃO BRUTA
// ======================================================
//
// O motor limita o resultado final a 100.
// Aqui mostramos também quanto os indicadores + regras
// realmente somaram antes desse limite.
//
// Isso melhora a explicabilidade do SENTINELA.
// ======================================================

function calculateRawScore(result) {

  const indicatorScore = result.indicators.reduce(
    (sum, indicator) => sum + Number(indicator.weight || 0),
    0
  );

  const combinationScore = result.combinations.reduce(
    (sum, rule) => sum + Number(rule.bonus || 0),
    0
  );

  return {
    indicators: indicatorScore,
    combinations: combinationScore,
    total: indicatorScore + combinationScore
  };
}


// ======================================================
// ÍCONE DE ACORDO COM O NÍVEL
// ======================================================

function getRiskIcon(score) {

  if (score >= 75) {
    return "🔴";
  }

  if (score >= 50) {
    return "🟠";
  }

  if (score >= 25) {
    return "🟡";
  }

  return "🟢";
}


// ======================================================
// TEXTO EXPLICATIVO DO NÍVEL
// ======================================================

function getRiskDescription(score) {

  if (score >= 75) {
    return "Foram identificados diversos sinais de alerta. A situação exige extrema cautela antes de qualquer ação.";
  }

  if (score >= 50) {
    return "Foram identificados sinais relevantes de risco. Verifique cuidadosamente a situação antes de agir.";
  }

  if (score >= 25) {
    return "Alguns sinais merecem atenção. Não tome decisões precipitadas e confirme as informações.";
  }

  return "Poucos ou nenhum indicador relevante foi identificado. Mesmo assim, informações importantes devem ser confirmadas.";
}


// ======================================================
// GERA O PAINEL DE INDICADORES
// ======================================================

function renderIndicators(result) {

  if (!result.indicators.length) {

    return `
      <div class="signal">
        🟢
        <b>Nenhum indicador forte foi identificado.</b>
      </div>
    `;
  }

  return result.indicators
    .map(indicator => {

      const description = indicator.description
        ? `<small>${escapeHTML(indicator.description)}</small>`
        : "";

      return `
        <div class="signal">
          ⚠️
          <b>${escapeHTML(indicator.name)}</b>
          <small>(+${indicator.weight})</small>
          ${description}
        </div>
      `;
    })
    .join("");
}


// ======================================================
// GERA O PAINEL DAS REGRAS
// ======================================================

function renderCombinations(result) {

  if (!result.combinations.length) {

    return `
      <div class="logic-item">
        <span>ℹ️</span>
        <b>Nenhuma regra de combinação foi ativada.</b>
      </div>
    `;
  }

  return result.combinations
    .map(rule => {

      const description = rule.description
        ? `<small>${escapeHTML(rule.description)}</small>`
        : "";

      return `
        <div class="logic-item">
          <span>🧩</span>
          <b>${escapeHTML(rule.name || rule.code)}</b>
          <strong>+${rule.bonus}</strong>
          ${description}
        </div>
      `;
    })
    .join("");
}


// ======================================================
// GERA A EXPLICAÇÃO
// ======================================================

function renderExplanation(result) {

  if (typeof explanation !== "function") {

    return `
      <p>
        O resultado é uma avaliação de risco baseada
        nos indicadores e regras do protótipo SENTINELA.
      </p>
    `;
  }

  const explanations = explanation(result);

  if (!explanations.length) {

    return `
      <p>
        O SENTINELA não encontrou sinais suficientes
        para produzir uma explicação específica.
      </p>
    `;
  }

  return explanations
    .map(text => `<p>💡 ${escapeHTML(text)}</p>`)
    .join("");
}


// ======================================================
// GERA AS ORIENTAÇÕES
// ======================================================

function renderGuidance(result) {

  const tips = guidance(result);

  if (!tips.length) {

    return `
      <div class="tip">
        🛡️ Mantenha atenção e confirme informações importantes por canais oficiais.
      </div>
    `;
  }

  return tips
    .map(tip => `
      <div class="tip">
        🛡️ ${escapeHTML(tip)}
      </div>
    `)
    .join("");
}


// ======================================================
// CRIA O PAINEL DE DETALHAMENTO
// ======================================================

function renderDetailedAnalysis(result) {

  const raw = calculateRawScore(result);

  const container = document.getElementById("logic");

  if (!container) {
    return;
  }

  container.innerHTML = `

    <div class="sentinela-detail">

      <h3>🧠 Como o SENTINELA chegou ao resultado?</h3>

      <div class="score-summary">

        <div class="score-line">
          <span>Pontos dos indicadores</span>
          <strong>+${raw.indicators}</strong>
        </div>

        <div class="score-line">
          <span>Pontos das combinações</span>
          <strong>+${raw.combinations}</strong>
        </div>

        <div class="score-line total">
          <span>Pontuação calculada</span>
          <strong>${raw.total}</strong>
        </div>

        <div class="score-line final">
          <span>Pontuação SENTINELA</span>
          <strong>${result.score}/100</strong>
        </div>

      </div>


      <h3>🔍 Indicadores identificados</h3>

      <div class="indicator-list">

        ${
          result.indicators.length
            ? result.indicators.map(indicator => `
                <div class="logic-item">

                  <span>⚠️</span>

                  <div>
                    <b>${escapeHTML(indicator.code)} — ${escapeHTML(indicator.name)}</b>

                    <small>
                      Contribuição: +${indicator.weight} pontos
                    </small>
                  </div>

                </div>
              `).join("")
            : `
              <div class="logic-item">
                <span>🟢</span>
                <b>Nenhum indicador forte identificado.</b>
              </div>
            `
        }

      </div>


      <h3>🧩 Regras de combinação ativadas</h3>

      <div class="combination-list">

        ${renderCombinations(result)}

      </div>


      <h3>💡 Por que o SENTINELA alerta?</h3>

      <div class="explanation">

        ${renderExplanation(result)}

      </div>


      <div class="methodology">

        <b>ℹ️ Como funciona a pontuação?</b>

        <p>
          O SENTINELA utiliza uma matriz de indicadores e regras
          de combinação para produzir uma avaliação de risco de
          0 a 100.
        </p>

        <p>
          A pontuação não representa uma probabilidade real de fraude.
          Ela é um indicador educativo baseado nas regras definidas
          no protótipo.
        </p>

      </div>

    </div>
  `;
}


// ======================================================
// CRIA OS BOTÕES DE AÇÃO
// ======================================================

function renderActionButtons() {

  const resultScreen = document.getElementById("result");

  if (!resultScreen) {
    return;
  }

  let actions = document.getElementById("sentinelaActions");

  if (!actions) {

    actions = document.createElement("div");

    actions.id = "sentinelaActions";

    actions.innerHTML = `

      <div class="sentinela-actions">

        <button
          type="button"
          class="secondary-button"
          onclick="newAnalysis()"
        >
          🔄 Analisar outra situação
        </button>

        <button
          type="button"
          class="primary-button"
          onclick="openChallenge()"
        >
          🎮 Fazer Desafio Sentinela
        </button>

      </div>

    `;

    resultScreen.appendChild(actions);
  }
}


// ======================================================
// NOVA ANÁLISE
// ======================================================

function newAnalysis() {

  const message = document.getElementById("message");

  if (message) {
    message.value = "";
  }

  show("analyze");
}


// ======================================================
// ABRIR DESAFIO
// ======================================================

function openChallenge() {

  const challengeScreen = document.getElementById("challenge");

  if (challengeScreen) {

    show("challenge");

  } else {

    alert(
      "O módulo Desafio Sentinela será ativado nesta etapa do projeto."
    );
  }
}


// ======================================================
// FUNÇÃO PRINCIPAL DE ANÁLISE
// ======================================================

function analyze() {

  const messageElement = document.getElementById("message");

  if (!messageElement) {

    console.error(
      "SENTINELA: campo #message não encontrado."
    );

    return;
  }


  const text = messageElement.value.trim();


  // ----------------------------------------------------
  // VERIFICAÇÃO DE CAMPO VAZIO
  // ----------------------------------------------------

  if (!text) {

    alert(
      "Digite ou cole uma situação fictícia para analisar."
    );

    return;
  }


  // ----------------------------------------------------
  // EXECUTA O MOTOR
  // ----------------------------------------------------

  const result = calculateRisk(text);


  console.log(
    "SENTINELA — resultado da análise:",
    result
  );


  // ----------------------------------------------------
  // RESULTADO
  // ----------------------------------------------------

  const levelElement = document.getElementById("level");

  if (levelElement) {
    levelElement.textContent = result.level;
  }


  const scoreElement = document.getElementById("score");

  if (scoreElement) {
    scoreElement.textContent =
      result.score + " / 100";
  }


  // ----------------------------------------------------
  // CAIXA DE RISCO
  // ----------------------------------------------------

  const riskBox = document.getElementById("riskBox");

  if (riskBox) {

    let riskClass = "";

    if (result.score >= 75) {
      riskClass = "high";
    }

    else if (result.score >= 50) {
      riskClass = "elevated";
    }

    else if (result.score >= 25) {
      riskClass = "attention";
    }

    riskBox.className = "risk " + riskClass;

    riskBox.setAttribute(
      "data-score",
      result.score
    );

  }


  // ----------------------------------------------------
  // INDICADORES
  // ----------------------------------------------------

  const signalsElement =
    document.getElementById("signals");

  if (signalsElement) {

    signalsElement.innerHTML =
      renderIndicators(result);

  }


  // ----------------------------------------------------
  // ORIENTAÇÕES
  // ----------------------------------------------------

  const tipsElement =
    document.getElementById("tips");

  if (tipsElement) {

    tipsElement.innerHTML =
      renderGuidance(result);

  }


  // ----------------------------------------------------
  // EXPLICAÇÃO DETALHADA
  // ----------------------------------------------------

  renderDetailedAnalysis(result);


  // ----------------------------------------------------
  // BOTÕES
  // ----------------------------------------------------

  renderActionButtons();


  // ----------------------------------------------------
  // DESCRIÇÃO DO RISCO
  // ----------------------------------------------------

  let descriptionElement =
    document.getElementById("riskDescription");


  if (!descriptionElement) {

    const riskBox = document.getElementById("riskBox");

    if (riskBox) {

      descriptionElement =
        document.createElement("p");

      descriptionElement.id =
        "riskDescription";

      riskBox.appendChild(
        descriptionElement
      );

    }

  }


  if (descriptionElement) {

    descriptionElement.textContent =
      getRiskDescription(result.score);

  }


  // ----------------------------------------------------
  // MOSTRA RESULTADO
  // ----------------------------------------------------

  show("result");
}


// ======================================================
// DISPONIBILIZA FUNÇÕES PARA OS BOTÕES HTML
// ======================================================

window.show = show;
window.analyze = analyze;
window.newAnalysis = newAnalysis;
window.openChallenge = openChallenge;