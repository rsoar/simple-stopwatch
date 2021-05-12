// Atribui à variável "relógio" o elemento html com id clock
const relogio = document.getElementById('clock');
let seconds = 0;
let timer;

// Função para converter o tempo contado para hora/minutos/segundos
function getTimeFromSeconds(seconds) {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });

};
// Função que inicia a contagem do cronômetro
function start() {
    timer = setInterval(function () {
        seconds += 1
        relogio.innerHTML = getTimeFromSeconds(seconds)

    }, 1000)
};

// Evento para capturar o clique do usuário no documento (página)
document.addEventListener('click', (e) => {

    let typeOfClass = e.target

    // Caso o clique seja no botao com id "start" é executado a chamada da funcao start()
    if (typeOfClass === document.getElementById('start')) {
        clearInterval(timer)
        start()
    };

    //Caso o clique seja no botao com id "stop" o cronômetro é pausado
    if (typeOfClass === document.getElementById('stop')) {
        clearInterval(timer)
    };

    //Caso o clique seja no botao com id "restart" o cronômetro é pausado,
    //o valor da variavel é atualizado para 0 e o texto do relógio é alterado para 00:00:00
    if (typeOfClass === document.getElementById('restart')) {
        clearInterval(0)
        seconds = 0
        relogio.innerHTML = "00:00:00"
    };
});
