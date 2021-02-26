const data = new Date('10/09/2002 00:00:00');
const relogio = document.querySelector('.relogio');

const btnIniciar = document.querySelector(".iniciar");
const btnPausar = document.querySelector(".pausar");
const btnZerar = document.querySelector(".zerar");

btnIniciar.addEventListener('click', function () {iniciarTimer();});

btnPausar.addEventListener('click', function (e) {
    setTimeout(function () {
        clearInterval(time);
    }, 1);
});

btnZerar.addEventListener('click', function (e) {
    data.setHours(0);
    data.setMinutes(0);
    data.setSeconds(0);
    data.setMilliseconds(0);
    relogio.innerHTML = '00:00:00';
})

let time;

function iniciarTimer () {
    time = setInterval(function () {
        relogio.innerHTML = returnDate();
    }, 1000);
}

function returnDate () {
    data.setSeconds(data.getSeconds() + 1);
    return data.toLocaleTimeString(
        'pt-BR', {hour12: false}
    );
}
