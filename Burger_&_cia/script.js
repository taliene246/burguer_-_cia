

// ========================================================
// REQUISITO 5: DUAS VARIÁVEIS EXIBINDO INFORMAÇÕES
// ========================================================

// Variável 1: Nome da Lanchonete
var nomeLanchonete = "Burguer & Cia";

// Variável 2: Ano Atual
var anoAtual = new Date().getFullYear();

// Exibindo as variáveis na página HTML
document.getElementById("boas-vindas").textContent = "Bem-vindo à " + nomeLanchonete + "!";
document.getElementById("rodape-info").textContent = "© " + anoAtual + " " + nomeLanchonete + " - Todos os direitos reservados.";


// ========================================================
// DESAFIO EXTRA: ESTRUTURA CONDICIONAL (IF / ELSE)
// ========================================================

function calcularFrete() {
    // Obter o valor digitado no campo de input
    var valorPedido = parseFloat(document.getElementById("valorPedido").value);
    var divResultado = document.getElementById("resultadoFrete");

    // Validação se o campo estiver vazio
    if (isNaN(valorPedido) || valorPedido <= 0) {
        divResultado.textContent = "Por favor, digite um valor válido para o pedido.";
        divResultado.style.color = "#d32f2f";
        return;
    }

    // Estrutura Condicional (If / Else)
    if (valorPedido >= 50.00) {
        divResultado.textContent = "Parabéns! Seu pedido deu R$ " + valorPedido.toFixed(2) + " e você GANHOU FRETE GRÁTIS! 🎉";
        divResultado.style.color = "#2e7d32";
    } else {
        var valorFaltante = 50.00 - valorPedido;
        divResultado.textContent = "Taxa de entrega: R$ 8,00. Adicione mais R$ " + valorFaltante.toFixed(2) + " para garantir Frete Grátis!";
        divResultado.style.color = "#c62828";
    }
}