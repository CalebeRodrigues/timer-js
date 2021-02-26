main();

function main () {
    const data = new Date('2002-11-27 00:00:00');
    let time;
    
    const relogio = document.querySelector('.relogio');
    
    document.addEventListener ('click', function (e) {
        const element = e.target;
    
        if(element.classList.contains('iniciar')) {
            relogio.classList.remove('timer-pause');
            clearInterval(time);
            iniciarTimer();
        }
    
        else if(element.classList.contains('pausar')) {
            clearInterval(time);
            relogio.classList.add('timer-pause');
        }
    
        else if(element.classList.contains('zerar')) {
            data.setHours(0);
            data.setMinutes(0);
            data.setSeconds(0);
            data.setMilliseconds(0);
            relogio.classList.remove('timer-pause');
            clearInterval(time);
            relogio.innerHTML = '00:00:00';
        }
    } );
    
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
}