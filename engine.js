function normalizeText(text) {
  return String(text)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}


// ======================================================
// DETECÇÃO DOS INDICADORES
// ======================================================

function detectIndicators(text) {
  const normalized = normalizeText(text);

  return INDICATORS.filter(indicator =>
    indicator.patterns.some(pattern =>
      normalized.includes(normalizeText(pattern))
    )
  );
}


// ======================================================
// CÁLCULO DO RISCO
// ======================================================

function calculateRisk(text) {
  const found = detectIndicators(text);

  // Evita contabilizar o mesmo indicador mais de uma vez.
  const uniqueIndicators = [
    ...new Map(
      found.map(indicator => [indicator.code, indicator])
    ).values()
  ];

  let score = uniqueIndicators.reduce(
    (sum, indicator) => sum + indicator.weight,
    0
  );

  const codes = new Set(
    uniqueIndicators.map(indicator => indicator.code)
  );

  const activated = [];

  // ====================================================
  // REGRAS DE COMBINAÇÃO
  // ====================================================

  for (const rule of COMBINATIONS) {
    const hasA = rule.anyOfA.some(code => codes.has(code));
    const hasB = rule.anyOfB.some(code => codes.has(code));

    if (hasA && hasB) {
      score += rule.bonus;
      activated.push(rule);
    }
  }

  // Limita o resultado entre 0 e 100.
  score = Math.max(0, Math.min(100, score));

  // ====================================================
  // CLASSIFICAÇÃO
  // ====================================================

  let level = "BAIXO RISCO";

  if (score >= 75) {
    level = "ALTO RISCO";
  } else if (score >= 50) {
    level = "RISCO ELEVADO";
  } else if (score >= 25) {
    level = "ATENÇÃO";
  }

  return {
    score,
    level,
    indicators: uniqueIndicators,
    combinations: activated
  };
}


// ======================================================
// EXPLICAÇÃO DA ANÁLISE
// ======================================================

function explanation(result) {
  const messages = [];

  if (!result.indicators.length) {
    messages.push(
      "O SENTINELA não identificou indicadores relevantes de risco na mensagem."
    );

    return messages;
  }

  for (const indicator of result.indicators) {
    if (indicator.description) {
      messages.push(indicator.description);
    } else {
      messages.push(
        `Foi identificado o indicador: ${indicator.code}.`
      );
    }
  }

  for (const rule of result.combinations) {
    if (rule.description) {
      messages.push(rule.description);
    }
  }

  return messages;
}


// ======================================================
// ORIENTAÇÕES DE SEGURANÇA
// ======================================================

function guidance(result) {
  const codes = new Set(
    result.indicators.map(indicator => indicator.code)
  );

  const tips = [];

  // Senhas, códigos e recuperação
  if (
    [...codes].some(code =>
      ["S01", "S02", "S03"].includes(code)
    )
  ) {
    tips.push(
      "Não compartilhe senhas, códigos de verificação ou códigos de recuperação."
    );
  }

  // Links
  if (
    [...codes].some(code =>
      ["L01", "L02", "L03"].includes(code)
    )
  ) {
    tips.push(
      "Não clique antes de verificar a origem. Prefira acessar diretamente o site ou aplicativo oficial."
    );
  }

  // Pagamentos
  if (
    [...codes].some(code =>
      ["F01", "F02", "F03", "F04"].includes(code)
    )
  ) {
    tips.push(
      "Não realize pagamentos antes de confirmar a solicitação por um canal oficial."
    );
  }

  // Urgência e ameaça
  if (
    [...codes].some(code =>
      ["U01", "U02", "U03", "A01", "A02", "A03"].includes(code)
    )
  ) {
    tips.push(
      "Pare antes de agir e confirme a informação sem utilizar o contato fornecido na mensagem."
    );
  }

  // Dados pessoais
  if (
    [...codes].some(code =>
      ["D01", "D02", "D03"].includes(code)
    )
  ) {
    tips.push(
      "Evite fornecer CPF, documentos ou dados bancários sem confirmar quem está solicitando."
    );
  }

  // Autoridade ou identidade
  if (
    [...codes].some(code =>
      ["I01", "I02"].includes(code)
    )
  ) {
    tips.push(
      "Não confie apenas no nome ou na aparência de quem enviou a mensagem. Confirme a identidade por outro canal."
    );
  }

  // Downloads e acesso remoto
  if (
    [...codes].some(code =>
      ["X01", "X02"].includes(code)
    )
  ) {
    tips.push(
      "Não instale aplicativos nem permita acesso remoto a pedido de mensagens desconhecidas."
    );
  }

  // Canal oficial
  if (codes.has("C01")) {
    tips.push(
      "Procure o canal oficial da instituição em vez de utilizar links ou contatos enviados na mensagem."
    );
  }

  if (!tips.length) {
    tips.push(
      "Mantenha atenção e confirme informações importantes por canais oficiais."
    );
  }

  return tips;
}