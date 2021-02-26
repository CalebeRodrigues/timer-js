const data = new Date('2002-11-27 00:00:00');
let time;

const relogio = document.querySelector('.relogio');

const btnIniciar = document.querySelector(".iniciar");
const btnPausar = document.querySelector(".pausar");
const btnZerar = document.querySelector(".zerar");

btnIniciar.addEventListener('click', 
  function () {    
    relogio.classList.remove('timer-pause');
    clearInterval(time);
    iniciarTimer();
});

btnPausar.addEventListener('click', function (e) {
    clearInterval(time);
    relogio.classList.add('timer-pause');
});

btnZerar.addEventListener('click', function (e) {
    data.setHours(0);
    data.setMinutes(0);
    data.setSeconds(0);
    data.setMilliseconds(0);
    relogio.classList.remove('timer-pause');
    clearInterval(time);
    relogio.innerHTML = '00:00:00';
});

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
