const INDICATORS = [
  {
    code: "U01",
    name: "Urgência temporal",
    patterns: [
      "urgente",
      "agora",
      "imediatamente",
      "última chance",
      "ultima chance",
      "faça já",
      "faca ja",
      "com urgência",
      "com urgencia",
      "urgência",
      "urgencia",
      "não perca tempo",
      "nao perca tempo",
      "é urgente",
      "e urgente"
    ],
    weight: 10,
    description:
      "A mensagem cria pressão para que a pessoa tome uma decisão rapidamente."
  },

  {
    code: "U02",
    name: "Prazo artificial",
    patterns: [
      "só até hoje",
      "so ate hoje",
      "vence em poucos minutos",
      "último aviso",
      "ultimo aviso",
      "somente hoje",
      "até hoje",
      "ate hoje",
      "última oportunidade",
      "ultima oportunidade",
      "prazo termina hoje"
    ],
    weight: 10,
    description:
      "A mensagem apresenta um prazo curto ou artificial para pressionar uma decisão."
  },

  {
    code: "U03",
    name: "Pressão para decidir",
    patterns: [
      "responda agora",
      "não pode esperar",
      "nao pode esperar",
      "não pense",
      "nao pense",
      "responda imediatamente",
      "faça agora",
      "faca agora",
      "decida agora",
      "não espere",
      "nao espere",
      "não pense duas vezes",
      "nao pense duas vezes"
    ],
    weight: 10,
    description:
      "A mensagem tenta impedir que a pessoa tenha tempo para verificar a informação."
  },

  {
    code: "D01",
    name: "Pedido de CPF/documento",
    patterns: [
      "cpf",
      "rg",
      "documento",
      "numero do documento",
      "número do documento",
      "foto do documento",
      "foto do rg",
      "foto do cpf"
    ],
    weight: 15,
    description:
      "A mensagem solicita informações relacionadas à identificação pessoal."
  },

  {
    code: "D02",
    name: "Pedido de dados bancários",
    patterns: [
      "dados bancários",
      "dados bancarios",
      "número da conta",
      "numero da conta",
      "agência",
      "agencia",
      "dados do cartão",
      "dados do cartao",
      "número do cartão",
      "numero do cartao",
      "conta bancária",
      "conta bancaria"
    ],
    weight: 20,
    description:
      "A mensagem solicita informações bancárias ou financeiras."
  },

  {
    code: "D03",
    name: "Pedido de dados pessoais",
    patterns: [
      "endereço",
      "endereco",
      "data de nascimento",
      "nome completo",
      "telefone",
      "número de telefone",
      "numero de telefone",
      "dados pessoais"
    ],
    weight: 10,
    description:
      "A mensagem solicita informações pessoais que podem ser utilizadas para identificar o usuário."
  },

  {
    code: "S01",
    name: "Pedido de senha",
    patterns: [
      "senha",
      "sua senha",
      "informe sua senha",
      "digite sua senha",
      "confirme sua senha"
    ],
    weight: 30,
    description:
      "A mensagem solicita uma senha, informação que normalmente deve permanecer em sigilo."
  },

  {
    code: "S02",
    name: "Pedido de código de verificação",
    patterns: [
      "código sms",
      "codigo sms",
      "código de segurança",
      "codigo de seguranca",
      "token",
      "código recebido por sms",
      "codigo recebido por sms",
      "código que recebeu",
      "codigo que recebeu",
      "código enviado",
      "codigo enviado",
      "código de verificação",
      "codigo de verificacao"
    ],
    weight: 30,
    description:
      "A mensagem solicita um código de verificação que pode permitir acesso ou confirmação de uma conta."
  },

  {
    code: "S03",
    name: "Pedido de código de recuperação",
    patterns: [
      "código de recuperação",
      "codigo de recuperacao",
      "recuperar sua conta",
      "código para recuperar",
      "codigo para recuperar",
      "código de recuperação da conta",
      "codigo de recuperacao da conta"
    ],
    weight: 25,
    description:
      "A mensagem solicita informações utilizadas para recuperar ou proteger uma conta."
  },

  {
    code: "F01",
    name: "Pedido de Pix",
    patterns: [
      "pix",
      "faça um pix",
      "faca um pix",
      "mande um pix",
      "envie um pix",
      "transfira via pix",
      "transferência via pix",
      "transferencia via pix"
    ],
    weight: 20,
    description:
      "A mensagem solicita uma transferência financeira por Pix."
  },

  {
    code: "F02",
    name: "Pagamento antecipado",
    patterns: [
      "pague antes",
      "pagamento antecipado",
      "pagar para liberar",
      "pague uma taxa",
      "pague pequena taxa",
      "pague uma pequena taxa",
      "deposite uma taxa",
      "faça um pagamento",
      "faca um pagamento",
      "realize o pagamento",
      "pagamento para liberar",
      "pagar para receber",
      "pague antecipadamente",
      "pagamento antecipado"
    ],
    weight: 20,
    description:
      "A mensagem exige um pagamento antes que um produto, benefício ou serviço seja liberado."
  },

  {
    code: "F03",
    name: "Cobrança inesperada",
    patterns: [
      "cobrança",
      "cobranca",
      "dívida",
      "divida",
      "fatura pendente",
      "pagamento pendente",
      "cobrança pendente",
      "cobranca pendente",
      "valor em aberto",
      "conta em aberto"
    ],
    weight: 15,
    description:
      "A mensagem apresenta uma cobrança ou dívida que pode não ter sido esperada pelo usuário."
  },

  {
    code: "F04",
    name: "Taxa para liberar benefício",
    patterns: [
      "taxa para liberar",
      "pague a taxa",
      "taxa do prêmio",
      "taxa do premio",
      "taxa para receber",
      "taxa para receber o prêmio",
      "taxa para receber o premio",
      "taxa para receber o benefício",
      "taxa para receber o beneficio",
      "taxa de liberação",
      "taxa de liberacao",
      "taxa de cadastro",
      "pague uma taxa para receber",
      "taxa para liberar benefício",
      "taxa para liberar beneficio"
    ],
    weight: 20,
    description:
      "A mensagem exige uma taxa para que um suposto benefício, prêmio ou valor seja liberado."
  },

  {
    code: "L01",
    name: "Link/interação",
    patterns: [
      "clique aqui",
      "acesse o link",
      "link abaixo",
      "clique no link",
      "acesse este link",
      "clique neste link",
      "link para acessar",
      "acesse agora"
    ],
    weight: 10,
    description:
      "A mensagem direciona o usuário para um link ou interação externa."
  },

  {
    code: "L02",
    name: "Link suspeito",
    patterns: [
      "bit.ly",
      "tinyurl",
      "url encurtada",
      "link encurtado",
      "link curto",
      "link suspeito"
    ],
    weight: 15,
    description:
      "A mensagem apresenta características de um endereço eletrônico que merece verificação."
  },

  {
    code: "L03",
    name: "QR Code",
    patterns: [
      "qr code",
      "qrcode",
      "qr-code",
      "leia o qr",
      "escaneie o qr"
    ],
    weight: 10,
    description:
      "A mensagem direciona o usuário para um QR Code que pode levar a uma ação ou endereço externo."
  },

  {
    code: "P01",
    name: "Prêmio inesperado",
    patterns: [
      "você ganhou",
      "voce ganhou",
      "parabéns, você foi sorteado",
      "parabens voce foi sorteado",
      "prêmio",
      "premio",
      "foi sorteado",
      "você foi premiado",
      "voce foi premiado",
      "ganhou um prêmio",
      "ganhou um premio"
    ],
    weight: 15,
    description:
      "A mensagem informa sobre um prêmio ou vantagem que o usuário não esperava receber."
  },

  {
    code: "P02",
    name: "Dinheiro fácil",
    patterns: [
      "dinheiro fácil",
      "dinheiro facil",
      "ganhe dinheiro",
      "renda garantida",
      "lucro garantido",
      "ganho garantido",
      "dinheiro rápido",
      "dinheiro rapido",
      "ganhe muito dinheiro"
    ],
    weight: 15,
    description:
      "A mensagem promete ganhos financeiros fáceis, rápidos ou garantidos."
  },

  {
    code: "P03",
    name: "Benefício excepcional",
    patterns: [
      "benefício exclusivo",
      "beneficio exclusivo",
      "bônus especial",
      "bonus especial",
      "vantagem exclusiva",
      "oferta exclusiva",
      "benefício especial",
      "beneficio especial"
    ],
    weight: 10,
    description:
      "A mensagem apresenta uma vantagem ou benefício excepcional para estimular uma ação."
  },

  {
    code: "A01",
    name: "Ameaça de bloqueio",
    patterns: [
      "conta será bloqueada",
      "conta sera bloqueada",
      "conta bloqueada",
      "cartão será bloqueado",
      "cartao sera bloqueado",
      "cartão bloqueado",
      "cartao bloqueado",
      "será bloqueada",
      "sera bloqueada",
      "será suspensa",
      "sera suspensa",
      "vai ser bloqueada",
      "vai ser suspensa",
      "será bloqueado",
      "sera bloqueado"
    ],
    weight: 15,
    description:
      "A mensagem ameaça bloquear ou suspender uma conta, cartão ou serviço."
  },

  {
    code: "A02",
    name: "Ameaça de multa/perda",
    patterns: [
      "multa",
      "perderá o benefício",
      "perdera o beneficio",
      "será suspenso",
      "sera suspenso",
      "benefício será suspenso",
      "beneficio sera suspenso",
      "será cancelado",
      "sera cancelado",
      "perderá sua conta",
      "perdera sua conta",
      "perderá o acesso",
      "perdera o acesso"
    ],
    weight: 15,
    description:
      "A mensagem utiliza ameaça de perda, cancelamento ou penalidade para pressionar o usuário."
  },

  {
    code: "A03",
    name: "Consequência grave",
    patterns: [
      "será punido",
      "sera punido",
      "consequência imediata",
      "consequencia imediata",
      "problema grave",
      "consequência grave",
      "consequencia grave",
      "terá problemas",
      "tera problemas",
      "medida judicial",
      "processo judicial"
    ],
    weight: 10,
    description:
      "A mensagem apresenta consequências graves para pressionar o usuário."
  },

  {
    code: "I01",
    name: "Falsa autoridade",
    patterns: [
      "sou do banco",
      "sou funcionário",
      "sou funcionario",
      "sou da polícia",
      "sou da policia",
      "sou do governo",
      "sou da receita",
      "sou do suporte",
      "sou atendente",
      "sou funcionário do banco",
      "sou funcionario do banco"
    ],
    weight: 15,
    description:
      "A mensagem tenta utilizar uma suposta autoridade ou instituição para ganhar confiança."
  },

  {
    code: "I02",
    name: "Imitação de identidade",
    patterns: [
      "conta oficial",
      "perfil oficial",
      "representante oficial",
      "canal oficial",
      "atendimento oficial",
      "suporte oficial"
    ],
    weight: 20,
    description:
      "A mensagem utiliza aparência ou alegação de identidade oficial para ganhar credibilidade."
  },

  {
    code: "E01",
    name: "Segredo",
    patterns: [
      "não conte para ninguém",
      "nao conte para ninguem",
      "mantenha segredo",
      "não conte a ninguém",
      "nao conte a ninguem",
      "não fale para ninguém",
      "nao fale para ninguem",
      "mantenha isso em segredo"
    ],
    weight: 10,
    description:
      "A mensagem tenta impedir que o usuário confirme a informação com outras pessoas."
  },

  {
    code: "E02",
    name: "Manipulação emocional",
    patterns: [
      "preciso de você",
      "preciso de voce",
      "estou desesperado",
      "por favor, faça agora",
      "por favor faca agora",
      "me ajude imediatamente",
      "estou com problemas",
      "preciso muito da sua ajuda",
      "é muito importante",
      "e muito importante"
    ],
    weight: 10,
    description:
      "A mensagem utiliza emoções, medo, urgência ou relações pessoais para influenciar a decisão."
  },

  {
    code: "X01",
    name: "Download suspeito",
    patterns: [
      "baixe o arquivo",
      "faça o download",
      "faca o download",
      "baixar aplicativo",
      "baixe este arquivo",
      "baixe o aplicativo",
      "instale o arquivo",
      "arquivo para baixar",
      "download do arquivo"
    ],
    weight: 15,
    description:
      "A mensagem solicita o download ou instalação de um arquivo ou aplicativo."
  },

  {
    code: "X02",
    name: "Instalação/acesso remoto",
    patterns: [
      "instale este aplicativo",
      "acesso remoto",
      "anydesk",
      "teamviewer",
      "aplicativo de acesso remoto",
      "programa de acesso remoto",
      "controle remoto",
      "acesse remotamente",
      "permita acesso ao seu computador",
      "permita acesso remoto",
      "controle seu computador"
    ],
    weight: 25,
    description:
      "A mensagem solicita instalação de ferramenta ou permissão para acesso remoto ao dispositivo."
  },

  {
    code: "C01",
    name: "Desvio do canal oficial",
    patterns: [
      "não ligue para o banco",
      "nao ligue para o banco",
      "não procure o site oficial",
      "nao procure o site oficial",
      "resolva somente por aqui",
      "não entre em contato com o banco",
      "nao entre em contato com o banco",
      "não use o aplicativo oficial",
      "nao use o aplicativo oficial",
      "não confirme por outro canal",
      "nao confirme por outro canal"
    ],
    weight: 20,
    description:
      "A mensagem tenta impedir que o usuário confirme a informação utilizando um canal oficial."
  },

  {
    code: "C02",
    name: "Inconsistência contextual",
    patterns: [
      "não reconheço",
      "nao reconheco",
      "não solicitei",
      "nao solicitei",
      "não fiz essa compra",
      "nao fiz essa compra",
      "não reconheço essa compra",
      "nao reconheco essa compra",
      "não fui eu",
      "nao fui eu",
      "não pedi isso",
      "nao pedi isso"
    ],
    weight: 10,
    description:
      "A mensagem indica que a ação, cobrança ou solicitação pode não ter sido realizada pelo usuário."
  }
];


// ======================================================
// REGRAS DE COMBINAÇÃO
// ======================================================

const COMBINATIONS = [
  {
    code: "R01",
    name: "Urgência + ameaça",
    anyOfA: ["U01", "U02", "U03"],
    anyOfB: ["A01", "A02", "A03"],
    bonus: 15,
    description:
      "A combinação entre pressão de tempo e ameaça aumenta o risco da situação."
  },

  {
    code: "R02",
    name: "Financeiro + urgência",
    anyOfA: ["F01", "F02", "F03", "F04"],
    anyOfB: ["U01", "U02", "U03"],
    bonus: 15,
    description:
      "A combinação entre solicitação financeira e urgência merece atenção especial."
  },

  {
    code: "R03",
    name: "Link + dados pessoais",
    anyOfA: ["L01", "L02", "L03"],
    anyOfB: ["D01", "D02", "D03"],
    bonus: 15,
    description:
      "Um link associado à solicitação de dados pessoais ou financeiros aumenta o risco."
  },

  {
    code: "R04",
    name: "Link + senha/código",
    anyOfA: ["L01", "L02", "L03"],
    anyOfB: ["S01", "S02", "S03"],
    bonus: 20,
    description:
      "Um link associado à solicitação de senha ou código de segurança é um forte sinal de alerta."
  },

  {
    code: "R05",
    name: "Prêmio/benefício + pagamento",
    anyOfA: ["P01", "P02", "P03"],
    anyOfB: ["F01", "F02", "F04"],
    bonus: 20,
    description:
      "A promessa de benefício ou prêmio acompanhada de solicitação financeira merece extrema cautela."
  },

  {
    code: "R06",
    name: "Autoridade + urgência",
    anyOfA: ["I01", "I02"],
    anyOfB: ["U01", "U02", "U03"],
    bonus: 15,
    description:
      "A alegação de autoridade combinada com pressão para agir rapidamente aumenta o risco."
  },

  {
    code: "R07",
    name: "Desvio do canal oficial + solicitação sensível",
    anyOfA: ["C01"],
    anyOfB: [
      "F01",
      "F02",
      "F03",
      "F04",
      "D01",
      "D02",
      "S01",
      "S02",
      "S03"
    ],
    bonus: 15,
    description:
      "Impedir a confirmação por canais oficiais enquanto solicita informações ou dinheiro é um sinal importante de risco."
  },

  {
    code: "R08",
    name: "Manipulação/segredo + solicitação sensível",
    anyOfA: ["E01", "E02"],
    anyOfB: [
      "F01",
      "F02",
      "F04",
      "D01",
      "D02",
      "S01",
      "S02",
      "S03"
    ],
    bonus: 15,
    description:
      "Segredo ou manipulação emocional combinados com pedidos sensíveis aumentam o risco da situação."
  },

  {
    code: "R09",
    name: "Download/acesso remoto + link",
    anyOfA: ["X01", "X02"],
    anyOfB: ["L01", "L02"],
    bonus: 15,
    description:
      "Links associados a downloads ou acesso remoto exigem atenção especial."
  }
];