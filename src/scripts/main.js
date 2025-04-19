const dataDoAniversario = new Date("Sept 25, 2025 17:00:00");
const timeStampDoAniversario = dataDoAniversario.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOAniversario = timeStampDoAniversario - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;
    const segundosEmMs= 1000;

    const diasAteOAniversario = Math.floor(distanciaAteOAniversario / diasEmMs);
    const horasAteOAniversario = Math.floor((distanciaAteOAniversario % diasEmMs) / horasEmMs);
    const minutosAteOAniversario = Math.floor((distanciaAteOAniversario % horasEmMs) / minutosEmMs);
    const segundosAteOAniversario = Math.floor((distanciaAteOAniversario % minutosEmMs) / segundosEmMs);

    document.getElementById('contador').innerHTML = `${diasAteOAniversario}d ${horasAteOAniversario}h ${minutosAteOAniversario}m ${segundosAteOAniversario}s`;

    if (distanciaAteOAniversario < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'O aniversário já aconteceu'
    }
},1000)