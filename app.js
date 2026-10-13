// Entregável Desenvolvimento Web – Arrays, DOM e Eventos – Semana 04
// Abra index.html no navegador e o Console (F12).

// ============================================================
// BLOCO 1 – ARRAYS E MÉTODOS
// ============================================================
console.log("===== BLOCO 1 – Arrays =====");

// 1.1 forEach e map
const nomes = ["Ana", "Bruno", "Carla"];
nomes.forEach((nome) => console.log(`Olá, ${nome}!`));
const nomesMaiusculos = nomes.map((nome) => nome.toUpperCase());
console.log("Maiúsculos:", nomesMaiusculos);

// 1.2 filter e reduce
const precos = [10, 25, 40, 5, 60];
const acimaDe20 = precos.filter((preco) => preco > 20);
const somaPrecos = precos.reduce((acc, preco) => acc + preco, 0);
console.log("Preços acima de 20:", acimaDe20);
console.log("Soma dos preços:", somaPrecos);

// 1.3 array de objetos
const produtos = [
  { nome: "Caderno", preco: 15 },
  { nome: "Mochila", preco: 120 },
  { nome: "Caneta", preco: 4 },
  { nome: "Calculadora", preco: 45 },
];
console.log("Nomes:", produtos.map((p) => p.nome));
console.log("Preço < 50:", produtos.filter((p) => p.preco < 50));
console.log("Soma dos produtos:", produtos.reduce((acc, p) => acc + p.preco, 0));
produtos.forEach((p) => console.log(`${p.nome}: R$ ${p.preco}`));

// ============================================================
// BLOCO 2 – DOM
// ============================================================
console.log("===== BLOCO 2 – DOM =====");

// 2.1 título
const titulo = document.querySelector("#titulo");
titulo.textContent = "Blog do Weslley";

// 2.2 parágrafos
document.querySelectorAll(".texto").forEach((p) => console.log(p.textContent));

// 2.3 innerHTML (+= para preservar os 3 <li> do HTML usados no Bloco 3)
const lista = document.querySelector("#lista");
lista.innerHTML += "<li>Item via innerHTML 1</li><li>Item via innerHTML 2</li>";

// 2.4 createElement + append
const terceiro = document.createElement("li");
terceiro.textContent = "Terceiro item";
lista.append(terceiro);

// 2.5 classList
terceiro.classList.add("destaque");
console.log('contains("destaque"):', terceiro.classList.contains("destaque"));

// 2.6 tarefas
const tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];
const primeiraTarefa = [];
tarefas.forEach((tarefa) => {
  const li = document.createElement("li");
  li.textContent = tarefa;
  lista.append(li);
  primeiraTarefa.push(li);
});
primeiraTarefa[0].classList.add("feito");
console.log("Total de <li>:", document.querySelectorAll("li").length);

// ============================================================
// BLOCO 3 – EVENTOS
// ============================================================
console.log("===== BLOCO 3 – Eventos =====");

const botao = document.querySelector("#botao");
botao.addEventListener("click", () => console.log("Clicou!"));
botao.addEventListener("mouseover", () => {
  botao.textContent = "Pode clicar!";
});

const campoNome = document.querySelector("#nome");
campoNome.addEventListener("keyup", () => console.log(campoNome.value));

// Event Delegation: um único listener na lista
lista.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("feito");
    console.log(e.target.textContent);
  }
});

// Novo <li> criado via JS: o clique nele também funciona (delegation)
const dinamico = document.createElement("li");
dinamico.textContent = "Item criado via JS (clique em mim)";
lista.append(dinamico);

// Formulário
const formulario = document.querySelector("#formulario");
const campoTarefa = document.querySelector("#tarefa");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const texto = campoTarefa.value.trim();
  if (texto === "") return;
  const li = document.createElement("li");
  li.textContent = texto;
  lista.append(li);
  campoTarefa.value = "";
});
