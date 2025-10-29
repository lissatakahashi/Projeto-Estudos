// --- Seletores ---
let timerDisplay = document.getElementById('timer');
let startButton = document.getElementById('start');
let pauseButton = document.getElementById('pause');
let resetButton = document.getElementById('reset');
let sessionsDisplay = document.getElementById('sessions');

// --- Variáveis do Pomodoro ---
let duration = 2; // segundos para teste
let timeLeft = duration;
let timer = null;
const somAlarme = new Audio('alarme.mp3');
somAlarme.volume = 0.5;

// --- Recupera sessões e moedas ---
let sessions = parseInt(localStorage.getItem("sessions")) || 0;
let moedas = parseInt(localStorage.getItem("moedas")) || 0;
let inventarioSalvo = JSON.parse(localStorage.getItem("inventario")) || [];

// --- Atualiza o contador de sessões na tela ---
if (sessionsDisplay) sessionsDisplay.textContent = sessions;

// --- Atualiza display do timer ---
function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
}

// --- Atualiza moedas na UI ---
function atualizarMoedasUI() {
    const moedasInfoElements = document.querySelectorAll('.moedas-info p');
    moedasInfoElements.forEach(p => {
        p.innerHTML = `&#x1FA99; Moedas: ${moedas}`;
    });
    localStorage.setItem("moedas", moedas);
}

// --- Timer ---
function startTimer() {
    if (timer === null) {
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                timer = null;
                concluirSessao();
                timeLeft = duration;
                updateDisplay();
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    timeLeft = duration;
    updateDisplay();
}

// --- Concluir sessão ---
function concluirSessao() {
    sessions++;
    localStorage.setItem("sessions", sessions);
    if (sessionsDisplay) sessionsDisplay.textContent = sessions;

    moedas += 5;
    localStorage.setItem("moedas", moedas);
    atualizarMoedasUI();

    // Marca bichinho como feliz
    localStorage.setItem("estadoBichinho", "feliz");
    localStorage.setItem("ultimoCuidado", Date.now());

    somAlarme.play();
    Swal.fire({
        title: 'Sessão concluída! 🎉',
        text: 'Você ganhou 5 moedas!',
        icon: 'success',
        confirmButtonColor: '#4caf50',
        confirmButtonText: 'Ok'
    }).then(() => {
        somAlarme.pause();
        somAlarme.currentTime = 0;
    });

    verificarEstadoBichinho(); // atualiza imagem imediatamente
}

// --- Verificar estado do bichinho com evolução ---
function verificarEstadoBichinho() {
    const avatarImg = document.querySelector('.avatar img');
    if (!avatarImg) return;

    const sessions = parseInt(localStorage.getItem("sessions")) || 0;
    const estado = localStorage.getItem("estadoBichinho") || "triste";
    const ultimoCuidado = parseInt(localStorage.getItem("ultimoCuidado")) || 0;
    const agora = Date.now();
    //const limiteFeliz = 2 * 60 * 60 * 1000; // 2 horas
    const limiteFeliz = 2 * 1000; // 2 segundos

    // Define fase: criança ou adulto
    let fase = sessions >= 10 ? "adulto" : "crianca";

    if (estado === "feliz" && (agora - ultimoCuidado) < limiteFeliz) {
        avatarImg.src = fase === "adulto" ? "imagens/universitariofeliz.png" : "imagens/criancafeliz.png";
        avatarImg.alt = fase === "adulto" ? "Adulto feliz" : "Criança feliz";
    } else {
        avatarImg.src = fase === "adulto" ? "imagens/universitariotriste.png" : "imagens/criancatriste.png";
        avatarImg.alt = fase === "adulto" ? "Adulto triste" : "Criança triste";
        localStorage.setItem("estadoBichinho", "triste");
    }
}

// --- Inicialização ---
window.addEventListener('DOMContentLoaded', () => {
    if (timerDisplay) updateDisplay();
    atualizarMoedasUI();
    if (sessionsDisplay) sessionsDisplay.textContent = sessions;

    verificarEstadoBichinho(); // checa ao carregar
});

// --- Inventário Lateral ---
const botaoInventario = document.getElementById("abrir-inventario");
const inventario = document.getElementById("inventario");
const fecharInventario = document.getElementById("fechar-inventario");
const itensInventario = document.getElementById("itens-inventario");

if (botaoInventario) {
    botaoInventario.addEventListener("click", () => {
        inventario.classList.add("aberto");
        botaoInventario.style.display = "none"; 
        carregarInventario();
    });
}

if (fecharInventario) {
    fecharInventario.addEventListener("click", () => {
        inventario.classList.remove("aberto");
        botaoInventario.style.display = "block"; 
    });
}

function carregarInventario() {
    itensInventario.innerHTML = "";
    const inventarioSalvo = JSON.parse(localStorage.getItem("inventario")) || [];

    if (inventarioSalvo.length === 0) {
        itensInventario.innerHTML = "<p>Você ainda não comprou nenhum item.</p>";
        return;
    }

    inventarioSalvo.forEach((item, index) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <p><strong>${item.nome}</strong></p>
            <img src="${item.imagem}" alt="${item.nome}" style="width: 80px;">
            <br>
            <button class="dar-comida" data-index="${index}">Oferecer</button>
            <hr>
        `;
        itensInventario.appendChild(div);
    });

    document.querySelectorAll('.dar-comida').forEach(botao => {
        botao.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute("data-index"));
            darComida(index);
        });
    });
}

// --- Dar comida ---
function darComida(index) {
    let inventario = JSON.parse(localStorage.getItem("inventario")) || [];
    const comida = inventario[index];
    if (!comida) return;

    inventario.splice(index, 1);
    localStorage.setItem("inventario", JSON.stringify(inventario));
    carregarInventario();

    const avatarImg = document.querySelector('.avatar img');
    if (avatarImg) {
        const sessions = parseInt(localStorage.getItem("sessions")) || 0;
        const fase = sessions >= 10 ? "adulto" : "crianca";
        avatarImg.src = fase === "adulto" ? "imagens/universitariofeliz.png" : "imagens/criancafeliz.png";
        avatarImg.alt = fase === "adulto" ? "Adulto feliz" : "Criança feliz";
    }

    localStorage.setItem("estadoBichinho", "feliz");
    localStorage.setItem("ultimoCuidado", Date.now());

    Swal.fire({
        title: 'Bichinho alimentado!',
        text: `Você deu ${comida.nome} ao bichinho! Ele está feliz!`,
        icon: 'success',
        confirmButtonColor: '#4caf50',
        confirmButtonText: 'Bacana!'
    });

    // Atualiza imagem depois de 2 segundos
    setTimeout(verificarEstadoBichinho, 2000);
}

// --- Resetar sessões ---
const resetSessionsButton = document.getElementById('reset-sessions');

function resetSessions() {
    sessions = 0;
    localStorage.setItem("sessions", sessions);
    if (sessionsDisplay) sessionsDisplay.textContent = sessions;

    Swal.fire({
        title: 'Sessões resetadas!',
        text: 'O contador de sessões foi zerado.',
        icon: 'warning',
        confirmButtonColor: '#f8bb86',
        confirmButtonText: 'Ok'
    });
}

if (resetSessionsButton) {
    resetSessionsButton.addEventListener('click', resetSessions);
}

// --- Listeners Pomodoro ---
if (startButton) startButton.addEventListener('click', startTimer);
if (pauseButton) pauseButton.addEventListener('click', pauseTimer);
if (resetButton) resetButton.addEventListener('click', resetTimer);

// ----------------------
// Sistema da Loja
// ----------------------
const botoesComprar = document.querySelectorAll(".botao-comprar");

function comprarItem(nome, preco, imagem) {
    if (moedas >= preco) {
        moedas -= preco;
        atualizarMoedasUI();

        // adiciona item ao inventário
        let inventario = JSON.parse(localStorage.getItem("inventario")) || [];
        inventario.push({ nome, imagem });
        localStorage.setItem("inventario", JSON.stringify(inventario));

        Swal.fire({
            title: 'Compra realizada!',
            text: `${nome} foi adicionado ao seu inventário!`,
            icon: 'success',
            confirmButtonColor: '#4caf50',
            confirmButtonText: 'Ok'
        });
    } else {
        Swal.fire({
            title: 'Moedas insuficientes!',
            text: 'Você não tem moedas suficientes para esta compra.',
            icon: 'error',
            confirmButtonColor: '#d33',
            confirmButtonText: 'Entendi'
        });
    }
}

if (botoesComprar) {
    botoesComprar.forEach((botao) => {
        botao.addEventListener("click", () => {
            let item = botao.parentElement;
            let nome = item.querySelector(".nome").textContent;
            let precoTexto = item.querySelector(".preco").textContent;
            let preco = parseInt(precoTexto.replace(/\D/g, ""));
            let imagem = item.querySelector("img").getAttribute("src");

            comprarItem(nome, preco, imagem);
        });
    });
}