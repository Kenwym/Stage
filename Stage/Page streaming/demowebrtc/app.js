document.querySelector('#start').addEventListener('click', function (e) {
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
    }).then(function (stream) {
        let emitterVideo = document.querySelector('#emitter-video');
        emitterVideo.srcObject = stream;
        emitterVideo.play();
    }).catch(function (err) {
        console.error('Erreur accès caméra/micro :', err);
    });
});