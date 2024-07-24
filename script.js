const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual festa cultural você prefere?",
        alternativas: [
            {
                texto: "festa junina",
                afirmacao: "Comemorada durante mês de junho,a festa junina é a mais típica,comemorada em todo Brasil conta com dança, comidas típicas, entre outros" 
            },
            {
                texto: "Folia de Reis",
                afirmacao: "relembrando as visita dos reis magos ao menino Jesus,a festa engloba músicas,oraçoẽs,danças,comidas típicas,entre outros"
            }
        ]
    },
    {
        enunciado: "você gosta de dançar quadrilha ou reisado?",
        alternativas: [
            {
                texto: "Quadrilha",
                afirmacao: "trata-se de uma dança coletiva em pares, e que possúi uma coreografia específica baseados em passos tradicionais,e um orador, que proclama frases divertidas que determinam os movimentos da d"
            },
            {
                texto: "Reisado",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "que tal conhecer algumas comidas das festas?",
        alternativas: [
            {
                texto: "Junina",
                afirmacao: "afirmação"
            },
            {
                texto: "Folha de reis",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();