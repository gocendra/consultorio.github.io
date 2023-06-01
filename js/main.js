const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay: 75
});

typewriter
.typeString('Tu bienestar, nuestra prioridad')
.pauseFor(200)
.start();
