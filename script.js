// ===== NAVBAR SCROLL =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navItems = navLinks.querySelectorAll('a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
    });
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section');
const navLinkAll = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) {
            current = section.getAttribute('id');
        }
    });
    navLinkAll.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== COUNTER ANIMATION =====
const counters = document.querySelectorAll('.stat .number');

const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-count'));
    const duration = 2000;
    const step = Math.max(1, Math.floor(target / 60));
    let current = 0;

    const update = () => {
        current += step;
        if (current >= target) {
            el.textContent = target + '+';
            return;
        }
        el.textContent = current;
        requestAnimationFrame(update);
    };
    update();
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            animateCounter(el);
            observer.unobserve(el);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => observer.observe(counter));

// ===== SKILL BAR ANIMATION =====
const skillCards = document.querySelectorAll('.skill-card');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            const card = entry.target;
            const delay = parseInt(card.getAttribute('data-delay')) || 0;
            setTimeout(() => {
                card.classList.add('visible');
                const progress = card.querySelector('.skill-progress');
                const width = progress.getAttribute('data-width');
                setTimeout(() => {
                    progress.style.width = width + '%';
                }, 200);
            }, delay);
            skillObserver.unobserve(card);
        }
    });
}, { threshold: 0.1 });

skillCards.forEach(card => skillObserver.observe(card));

// ===== PROJECT CARD ANIMATION =====
const projectCards = document.querySelectorAll('.project-card');
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            projectObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    card.style.transition = `all 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.1}s`;
    projectObserver.observe(card);
});

// ===== CONTACT FORM =====
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('.btn-primary');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;

    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        btn.style.background = '#34d399';
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
            btn.style.background = '';
            e.target.reset();
        }, 3000);
    }, 2000);
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

console.log('%c Dwinzz Portfolio ', 'background:#6C3CE1;color:#fff;font-size:24px;font-weight:bold;padding:12px 24px;border-radius:8px;');
console.log('%c Built with ❤️ by Dwinzz ', 'color:#a855f7;font-size:14px;');
