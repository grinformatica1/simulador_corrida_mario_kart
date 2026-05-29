# 🏎️ Mario Kart Racing Simulator

Simulador de corrida inspirado no universo Mario Kart, desenvolvido em JavaScript para praticar conceitos fundamentais de lógica de programação e manipulação de objetos.

---

## 📖 Sobre o Projeto

O projeto simula uma corrida entre dois personagens clássicos:

- Mario
- Luigi

Durante a corrida, diferentes tipos de desafios são sorteados, exigindo habilidades específicas dos competidores para conquistar pontos e vencer a disputa.

---

## 🎯 Objetivos de Aprendizagem

Este projeto foi desenvolvido com o objetivo de praticar:

- Estruturas condicionais (`if`, `else`, `switch`)
- Laços de repetição (`for`)
- Objetos e propriedades
- Funções
- Operadores lógicos
- Operadores ternários
- Geração de números aleatórios
- Manipulação de estados em objetos
- Simulação de eventos e regras de negócio

---

## 🏁 Regras da Corrida

A corrida acontece em **5 rodadas**.

Em cada rodada:

1. Um tipo de bloco é sorteado.
2. Cada jogador lança um dado de 1 a 6.
3. O valor do dado é somado ao atributo correspondente.
4. O jogador com maior resultado vence a rodada e ganha 1 ponto.

---

## 🛣️ Tipos de Bloco

| Bloco | Atributo Utilizado |
|---------|---------|
| 🏎️ RETA | Velocidade |
| ↪️ CURVA | Manobrabilidade |
| 🥊 CONFRONTO | Poder |

---

## ⚔️ Sistema de Confronto

Quando o bloco sorteado é **CONFRONTO**, os jogadores disputam utilizando o atributo **PODER**.

Além disso, um item é sorteado aleatoriamente.

### 🐢 Casco

- O vencedor recebe:
  - +1 ponto (Turbo)

- O derrotado perde:
  - -1 ponto

---

### 💣 Bomba

- O vencedor recebe:
  - +1 ponto (Turbo)

- O derrotado perde:
  - -2 pontos

---

### 🤝 Empate

Se ambos os jogadores obtiverem o mesmo resultado:

- Nenhum ponto é alterado.

---

## 🎮 Personagens

### Mario

| Atributo | Valor |
|-----------|---------|
| Velocidade | 4 |
| Manobrabilidade | 3 |
| Poder | 3 |

### Luigi

| Atributo | Valor |
|-----------|---------|
| Velocidade | 3 |
| Manobrabilidade | 4 |
| Poder | 4 |

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

Ter o Node.js instalado na máquina.

Verifique a instalação:

```bash
node -v
```

### Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/mario-kart-racing-simulator.git
```

### Acessar a Pasta do Projeto

```bash
cd mario-kart-racing-simulator
```

### Executar a Aplicação

```bash
node index.js
```

---

## 📂 Estrutura do Projeto

```text
📦 mario-kart-racing-simulator
├── 📄 index.js
└── 📄 README.md
```

---

## 📚 Conceitos Aplicados

- Programação Orientada a Objetos (objetos literais)
- Manipulação de propriedades
- Funções assíncronas
- Estruturas de decisão
- Estruturas de repetição
- Simulação de regras de negócio
- Geração de números aleatórios
- Controle de pontuação

---

## 🔮 Melhorias Futuras

- [ ] Adicionar novos personagens
- [ ] Criar itens especiais exclusivos
- [ ] Permitir seleção de personagens
- [ ] Definir número de rodadas pelo usuário
- [ ] Implementar sistema de ranking
- [ ] Criar modo torneio
- [ ] Exibir estatísticas ao final da corrida

---

## 📚 Créditos

Este projeto foi utilizado como exercício de estudo durante meu aprendizado de JavaScript e Node.js.

O código original foi desenvolvido como parte de um desafio/projeto educacional. Neste repositório realizei modificações, correções e melhorias com o objetivo de praticar conceitos de programação e aprofundar meu entendimento da linguagem.

---

## ✍️ Minha Contribuição

Este repositório foi utilizado como projeto de estudo para praticar JavaScript e Node.js.

As principais alterações realizadas por mim foram:

- Implementação do sistema de itens aleatórios durante os confrontos:
  - 🐢 Casco
  - 💣 Bomba
- Criação da lógica para sorteio aleatório dos itens.
- Ajuste da regra da bomba para remover **2 pontos** do adversário.
- Ajuste da regra do casco para remover **1 ponto** do adversário.
- Ajuste das mensagens exibidas no console para informar perda de pontos apenas quando a penalidade é efetivamente aplicada.
- Correções e melhorias na lógica do jogo para fins de aprendizado.

O objetivo dessas modificações foi praticar conceitos de:

- JavaScript
- Node.js
- Estruturas condicionais
- Manipulação de objetos
- Regras de negócio
- Lógica de programação