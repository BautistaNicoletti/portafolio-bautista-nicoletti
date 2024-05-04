/* Header */

const btnToggle = document.querySelector('.btn__toggle'),
menu = document.querySelector('.menu');

btnToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

btnToggle.addEventListener("click", () => {
    btnToggle.classList.toggle("active");
    header.classList.toggle('border');
});

window.onscroll = function() {
    scroll = document.documentElement.scrollTop;

    header = document.getElementById('header');

    if(scroll > 20) {
        header.classList.add('header_mod');
    } else {
        header.classList.remove('header_mod');
    }
};

/* Btn Dark */

const btnDark = document.querySelector('#btn-dark'),
btnDarkL = document.querySelector('#btn-darkL'),
btnDarkM = document.querySelector('#btn-darkM');

btnDark.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnDark.classList.toggle('active');
});
btnDarkL.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnDarkL.classList.toggle('active');
});
btnDarkM.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnDarkM.classList.toggle('active');
});

/* Home */

const typed = new Typed('.typed', {
    strings: [
        'Web Designer',
        'Creative Developer',
        'Freelancer'
    ],
    stringsElement: '#cadenas-texto',
	typeSpeed: 75,
	startDelay: 300,
	backSpeed: 75,
	smartBackspace: true,
	shuffle: false,
	backDelay: 1500,
	loop: true,
	loopCount: false,
	showCursor: true,
	cursorChar: '|',
	contentType: 'html',
});

const about = document.getElementById('aboutText'),
profileImg = document.getElementById('profile-img'),
proyect = document.getElementById('proyect');

about.addEventListener("click", () => {
    Swal.fire({
        template: '#about-text',
        imageUrl: "",
        imageWidth: 250,
        imageHeight: 200,
        padding: "20px 40px",
        width: "600px",
        confirmButtonText: "Ok",
        icon: "",
        iconColor: "#4169E1",
        confirmButtonColor: "#4169E1"
    })
});

profileImg.addEventListener("click", () => {
    Swal.fire({
        title: "",
        text: "Hola!👋 Pasa algo?",
        padding: "20px 0",
        width: "300px",
        confirmButtonText: "No... Nada",
        icon: "",
        backdrop: `
        rgba(0,0,123,0.4)
        url("../assets/images/nyan-cat/nyan-cat.gif")
        left top
        no-repeat`,
        iconColor: "#4169E1",
        confirmButtonColor: "#4169E1"
    })
})

/* Portfolio - Proyect */ 
/* First Proyect */ 
const firstProyectBtn = document.getElementById('first-proyect-btn'),
firstProyect = document.getElementById('first-proyect'),
firstProyectClose = document.getElementById('first-proyect-close');

firstProyectBtn.addEventListener('click', () => {
    firstProyect.classList.toggle('active');
});
firstProyectClose.addEventListener('click', () => {
    firstProyect.classList.remove('active');
});

/* Seconds Proyect */ 
const secondProyectBtn = document.getElementById('second-proyect-btn'),
secondProyect = document.getElementById('second-proyect'),
secondProyectClose = document.getElementById('second-proyect-close');

secondProyectBtn.addEventListener('click', () => {
    secondProyect.classList.toggle('active');
});
secondProyectClose.addEventListener('click', () => {
    secondProyect.classList.remove('active');
});

/* About More */
const btnMoreAbout = document.getElementById('btn-more-about'),
aboutPopup = document.getElementById('about-popup'),
aboutPopupClose = document.getElementById('about-popup-close');

btnMoreAbout.addEventListener('click', () => {
    aboutPopup.classList.toggle('active');
})

aboutPopupClose.addEventListener('click', () => {
    aboutPopup.classList.remove('active');
})

