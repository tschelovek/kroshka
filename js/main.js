
// Паралакс
const scene1 = document.getElementById('scene1');
const scene2 = document.getElementById('scene2');
const scene3 = document.getElementById('scene3');
const scene4 = document.getElementById('scene4');
const scene5 = document.getElementById('scene5');
const scene6 = document.getElementById('scene6');
const parallaxInstance1 = new Parallax(scene1);
const parallaxInstance2 = new Parallax(scene2);
const parallaxInstance3 = new Parallax(scene3);
const parallaxInstance4 = new Parallax(scene4);
const parallaxInstance5 = new Parallax(scene5);
const parallaxInstance6 = new Parallax(scene6);

// Появление элементов при прокрутке страныцы
AOS.init();