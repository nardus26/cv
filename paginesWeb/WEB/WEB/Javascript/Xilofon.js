window.onload = () => {
  const puntuacioHtml = document.getElementById('puntuacio')

  var puntuacio = 0;

  const tecles = document.querySelectorAll('.tecla');

  tecles.forEach(tecla => {
    tecla.addEventListener('click', () => {
      const audio = tecla.querySelector('audio');
      audio.play();
      tecla.classList.add('activat');

      puntuacio += 10;
      puntuacioHtml.innerHTML = puntuacio;
      setTimeout(() => {
        tecla.classList.remove('activat');
      }, 300);
    });
  });

  const cancons = document.getElementsByClassName('canco');
  const stopBtn = document.getElementById('stop-btn');

  Array.from(cancons).forEach(canco => {
    const audio = canco.querySelector('audio');

    canco.addEventListener('click', () => {
      audio.play();
    });
  });

  stopBtn.addEventListener('click', () => {
    Array.from(cancons).forEach(canco => {
      const audio = canco.querySelector('audio');
      audio.pause();
      audio.currentTime = 0; // Reinicia el tiempo de reproducción a cero
    });
  });

  const stopBtnPapallona = document.getElementById('stop-btn-papallona');
  stopBtnPapallona.addEventListener('click', function() {
    papallona.classList.remove('papallona');
    papallona.classList.add('papallonaInvisible');
  })

  
  var papallona = document.querySelector('.papallona');
  // Moure la papallona en un camí aleatori

  papallona.addEventListener('click', function() {
    puntuacio += 250;
    puntuacioHtml.innerHTML = puntuacio;
  });

  function mourePapallona() {
    // Obté l'ample i l'alçada de la finestra
    var finestraAmple = window.innerWidth;
    var finestraAlcada = window.innerHeight;

    // Calcula una nova posició aleatòria per la papallona
    var novaPosicioX = Math.random() * (finestraAmple * 0.75 - finestraAmple * 0.25) + finestraAmple * 0.30;
    var novaPosicioY = Math.random() * (finestraAlcada * 0.9 - finestraAlcada * 0.8) + finestraAlcada * 0.30
    ;

    // Actualitza la posició de la papallona
    papallona.style.left = novaPosicioX + 'px';
    papallona.style.top = novaPosicioY + 'px';
  }


  setInterval(mourePapallona, 800);
};