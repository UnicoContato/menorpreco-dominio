// Menu Mobile
const btnMobile = document.getElementById('mobile-menu-btn');
const menuMobile = document.getElementById('mobile-menu');

btnMobile.addEventListener('click', () => {
    menuMobile.classList.toggle('hidden');
});

// Fechar menu mobile ao clicar em um link
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        menuMobile.classList.add('hidden');
    });
});

// Efeito de Header ao rolar
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('shadow-md');
        header.classList.replace('bg-white/90', 'bg-white/95');
    } else {
        header.classList.remove('shadow-md');
        header.classList.replace('bg-white/95', 'bg-white/90');
    }
});

// Scroll Reveal Animation (Aparecer ao rolar)
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
// Ativar no carregamento inicial
reveal();

// Modal
const modal = document.getElementById('privacy-modal');
const openModalBtn = document.getElementById('privacy-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalOverlay = document.getElementById('modal-overlay');

function openModal() {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);