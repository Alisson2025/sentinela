# SENTINELA — MVP

## Estrutura
- index.html — telas e fluxo principal
- style.css — interface responsiva
- data.js — matriz de indicadores e regras
- engine.js — motor de análise
- app.js — interação da interface

## Como executar
Abra `index.html` no navegador. Para desenvolvimento, também pode usar uma extensão de servidor local no VS Code.

## O que o MVP faz
1. Recebe uma situação textual.
2. Normaliza o texto.
3. Procura indicadores da matriz.
4. Evita duplicidade por indicador.
5. Soma os pesos.
6. Aplica regras de combinação.
7. Limita o resultado a 100.
8. Classifica em quatro níveis.
9. Explica os sinais.
10. Gera orientações.

## Importante
Os pesos e padrões são parâmetros educacionais iniciais. Eles precisam ser validados pelo banco de testes do projeto. O sistema não determina com certeza se uma mensagem é golpe.

## Próximas evoluções
- Banco de 50 situações de teste.
- Tela de desafio.
- Perfil de desempenho.
- Painel de métricas.
- Melhor tratamento de contexto e falsos positivos.
