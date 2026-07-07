// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-out-cubic'
});

// Modal Logic
function openModal() {
    const modal = document.getElementById('ujianModal');
    const content = document.getElementById('modalContent');

    modal.classList.remove('hidden');
    modal.classList.add('flex');

    setTimeout(() => {
        content.classList.remove('modal-hidden');
        content.classList.add('modal-visible');
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('ujianModal');
    const content = document.getElementById('modalContent');

    content.classList.remove('modal-visible');
    content.classList.add('modal-hidden');

    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }, 300);
}

// Mobile Menu Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuIcon = mobileMenuBtn ? mobileMenuBtn.querySelector('i') : null;
let isMobileMenuOpen = false;

function updateNavbarState() {
    const navbar = document.getElementById('navbar');
    const logo1 = document.getElementById('logo-text-1');
    const logo2 = document.getElementById('logo-text-2');
    const logoSpan = document.getElementById('logo-text-span');
    const links = document.querySelectorAll('.nav-link');
    const mobileBtnIcon = document.getElementById('mobile-btn-icon');

    const shouldBeSolid = window.scrollY > 50 || isMobileMenuOpen;

    if (shouldBeSolid) {
        navbar.classList.remove('bg-transparent', 'border-transparent', 'py-2');
        navbar.classList.add('bg-white/95', 'backdrop-blur-md', 'border-slate-200', 'shadow-sm', 'py-0');
        
        if(logo1) { logo1.classList.remove('text-white'); logo1.classList.add('text-slate-800'); }
        if(logoSpan) { logoSpan.classList.remove('text-emerald-400'); logoSpan.classList.add('text-orange-500'); }
        if(logo2) { logo2.classList.remove('text-white/80'); logo2.classList.add('text-slate-500'); }
        if(mobileBtnIcon) { mobileBtnIcon.classList.remove('text-white/90'); mobileBtnIcon.classList.add('text-slate-600'); }
        
        links.forEach(l => {
            l.classList.remove('text-white/90', 'hover:text-emerald-300');
            l.classList.add('text-slate-600', 'hover:text-emerald-600');
        });
    } else {
        navbar.classList.add('bg-transparent', 'border-transparent', 'py-2');
        navbar.classList.remove('bg-white/95', 'backdrop-blur-md', 'border-slate-200', 'shadow-sm', 'py-0');
        
        if(logo1) { logo1.classList.remove('text-slate-800'); logo1.classList.add('text-white'); }
        if(logoSpan) { logoSpan.classList.remove('text-orange-500'); logoSpan.classList.add('text-emerald-400'); }
        if(logo2) { logo2.classList.remove('text-slate-500'); logo2.classList.add('text-white/80'); }
        if(mobileBtnIcon) { mobileBtnIcon.classList.remove('text-slate-600'); mobileBtnIcon.classList.add('text-white/90'); }
        
        links.forEach(l => {
            l.classList.remove('text-slate-600', 'hover:text-emerald-600');
            l.classList.add('text-white/90', 'hover:text-emerald-300');
        });
    }
}

window.addEventListener('scroll', updateNavbarState);

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        isMobileMenuOpen = mobileMenu.classList.contains('max-h-0');
        
        if (isMobileMenuOpen) {
            mobileMenu.classList.remove('max-h-0', 'opacity-0', 'pointer-events-none');
            mobileMenu.classList.add('max-h-[400px]', 'opacity-100', 'pointer-events-auto');
            if (mobileMenuIcon) {
                mobileMenuIcon.classList.remove('fa-bars');
                mobileMenuIcon.classList.add('fa-times');
            }
        } else {
            mobileMenu.classList.remove('max-h-[400px]', 'opacity-100', 'pointer-events-auto');
            mobileMenu.classList.add('max-h-0', 'opacity-0', 'pointer-events-none');
            if (mobileMenuIcon) {
                mobileMenuIcon.classList.remove('fa-times');
                mobileMenuIcon.classList.add('fa-bars');
            }
        }
        updateNavbarState();
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            isMobileMenuOpen = false;
            mobileMenu.classList.remove('max-h-[400px]', 'opacity-100', 'pointer-events-auto');
            mobileMenu.classList.add('max-h-0', 'opacity-0', 'pointer-events-none');
            if (mobileMenuIcon) {
                mobileMenuIcon.classList.remove('fa-times');
                mobileMenuIcon.classList.add('fa-bars');
            }
            updateNavbarState();
        });
    });
}
