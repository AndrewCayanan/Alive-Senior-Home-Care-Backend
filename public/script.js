(function () {

    // ─────────────────────────────────────────
    // 1. SCROLL PROGRESS BAR
    // ─────────────────────────────────────────
    const progressBar = document.getElementById('scrollProgress');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            progressBar.style.width = pct + '%';
        }, { passive: true });
    }

    // ─────────────────────────────────────────
    // 2. NAVBAR SCROLL EFFECT
    // ─────────────────────────────────────────
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 60);
        }, { passive: true });
    }

    // ─────────────────────────────────────────
    // 3. HAMBURGER MENU
    // ─────────────────────────────────────────
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            mobileMenu.classList.toggle('open');
        });

        document.addEventListener('click', (e) => {
            const navbar = document.getElementById('navbar');
            if (navbar && !navbar.contains(e.target)) {
                hamburger.classList.remove('open');
                mobileMenu.classList.remove('open');
            }
        });
    }

    // ─────────────────────────────────────────
    // 4. COUNTERS (UNCHANGED)
    // ─────────────────────────────────────────
    const counters = document.querySelectorAll('.stat-number[data-target]');

    if (counters.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.dataset.target, 10);
                    const duration = 1800;
                    const start = performance.now();

                    const tick = (now) => {
                        const elapsed = now - start;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);

                        el.textContent = Math.floor(eased * target);

                        if (progress < 1) requestAnimationFrame(tick);
                        else el.textContent = target;
                    };

                    requestAnimationFrame(tick);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(c => observer.observe(c));
    }

    // ─────────────────────────────────────────
    // 5. TESTIMONIAL CAROUSEL (UNCHANGED)
    // ─────────────────────────────────────────
    const track = document.getElementById('testimonialsTrack');
    const dotsContainer = document.getElementById('testimonialDots');

    if (track && dotsContainer) {
        const cards = track.querySelectorAll('.testimonial-card');
        let current = 0;
        let autoplay;

        const getVisible = () =>
            window.innerWidth >= 900 ? 3 :
            window.innerWidth >= 600 ? 2 : 1;

        const buildDots = () => {
            dotsContainer.innerHTML = '';
            const visible = getVisible();
            const totalSlides = Math.max(1, cards.length - visible + 1);

            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('button');
                dot.className = 't-dot' + (i === current ? ' active' : '');
                dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
                dot.addEventListener('click', () => goTo(i));
                dotsContainer.appendChild(dot);
            }
        };

        const goTo = (idx) => {
            const visible = getVisible();
            const max = Math.max(0, cards.length - visible);
            current = Math.max(0, Math.min(idx, max));

            const cardWidth = track.querySelector('.testimonial-card').offsetWidth + 24;
            track.style.transform = `translateX(-${current * cardWidth}px)`;

            dotsContainer.querySelectorAll('.t-dot').forEach((d, i) => {
                d.classList.toggle('active', i === current);
            });
        };

        const nextSlide = () => {
            const visible = getVisible();
            const max = Math.max(0, cards.length - visible);
            goTo(current >= max ? 0 : current + 1);
        };

        const startAutoplay = () => {
            stopAutoplay();
            autoplay = setInterval(nextSlide, 4500);
        };

        const stopAutoplay = () => clearInterval(autoplay);

        track.addEventListener('mouseenter', stopAutoplay);
        track.addEventListener('mouseleave', startAutoplay);

        let touchStartX = 0;
        track.addEventListener('touchstart', e => {
            touchStartX = e.touches[0].clientX;
        }, { passive: true });

        track.addEventListener('touchend', e => {
            const diff = touchStartX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) diff > 0 ? nextSlide() : goTo(current - 1);
        }, { passive: true });

        buildDots();
        startAutoplay();

        window.addEventListener('resize', () => {
            buildDots();
            goTo(current);
        });
    }

    // ─────────────────────────────────────────
    // 6. FAQ ACCORDION
    // ─────────────────────────────────────────
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const btn = item.querySelector('.faq-question');
        if (!btn) return;

        btn.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');

            faqItems.forEach(f => f.classList.remove('open'));
            if (!isOpen) item.classList.add('open');
        });
    });

    // ─────────────────────────────────────────
    // 7. CONTACT FORM (UNCHANGED)
    // ─────────────────────────────────────────
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const btn = document.getElementById('submitBtn');
            const loader = document.getElementById('btnLoader');
            const btnText = btn.querySelector('.btn-text');

            btn.disabled = true;
            if (btnText) btnText.style.display = 'none';
            if (loader) loader.style.display = 'inline';

            try {
                await emailjs.send(
                    "service_eku5bnc",
                    "template_efnyzx9",
                    {
                        first_name: document.getElementById('firstName').value,
                        last_name: document.getElementById('lastName').value,
                        email: document.getElementById('email').value,
                        phone: document.getElementById('phone').value,
                        service: document.getElementById('service').value,
                        message: document.getElementById('message').value,
                    }
                );

                contactForm.reset();

            } catch (error) {
                console.error(error);
                alert("Failed to send message.");
            }

            btn.disabled = false;
            if (btnText) btnText.style.display = 'inline';
            if (loader) loader.style.display = 'none';
        });
    }

    // ─────────────────────────────────────────
    // 8. SMOOTH SCROLL
    // ─────────────────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
            const target = document.querySelector(a.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // ─────────────────────────────────────────
    // 9. SERVICE CARD TILT
    // ─────────────────────────────────────────
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            const rotX = (-y / rect.height) * 6;
            const rotY = (x / rect.width) * 6;

            card.style.transform =
                `translateY(-6px) perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // ─────────────────────────────────────────
    // 10. GOOGLE MAP
    // ─────────────────────────────────────────
    window.initMap = function () {
        const mapEl = document.getElementById('map');
        if (!mapEl || typeof google === 'undefined') return;

        const center = { lat: 33.4484, lng: -112.0742 };

        const map = new google.maps.Map(mapEl, {
            zoom: 11,
            center,
        });

        new google.maps.Marker({
            position: center,
            map,
            title: 'Alive Senior Home Care',
        });
    };

})();