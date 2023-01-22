document.addEventListener('DOMContentLoaded', () => {
    // Паралакс
    // const scene1 = document.getElementById('scene1');
    // const scene2 = document.getElementById('scene2');
    // const scene3 = document.getElementById('scene3');
    // const scene4 = document.getElementById('scene4');
    // const scene5 = document.getElementById('scene5');
    // const scene6 = document.getElementById('scene6');
    const parallaxInstance1 = new Parallax(document.getElementById('scene1'));
    const parallaxInstance2 = new Parallax(document.getElementById('scene2'));
    const parallaxInstance3 = new Parallax(document.getElementById('scene3'));
    const parallaxInstance4 = new Parallax(document.getElementById('scene4'));
    const parallaxInstance5 = new Parallax(document.getElementById('scene5'));
    const parallaxInstance6 = new Parallax(document.getElementById('scene6'));

// Появление элементов при прокрутке страныцы
    AOS.init();

    // HAMBURGER

    const burgerButton = document.getElementById('burgerButton');
    if (burgerButton) {
        burgerButton.addEventListener('click', (e) => {
            e.preventDefault();
            burgerButton.classList.toggle('active');
            document.getElementById('burgerMenu').classList.toggle('active');
        })
    }
})
