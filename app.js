// app.js - Ganador Expanded Interactions

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Elegant Custom Cursor
    const cursor = document.querySelector('.elegant-cursor');
    const magneticElements = document.querySelectorAll('.magnetic-el, .faq-btn');

    if (window.innerWidth > 1024 && cursor) {
        document.addEventListener('mousemove', (e) => {
            gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.15, ease: "power2.out" });
        });

        magneticElements.forEach((el) => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hovered');
                gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
            });
        });
    }

    // 2. FAQ Accordion Logic
    const faqButtons = document.querySelectorAll('.faq-btn');
    faqButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            
            // Toggle active classes
            btn.classList.toggle('active');
            content.classList.toggle('active');

            // Close others (Optional, for clean UX)
            faqButtons.forEach(otherBtn => {
                if (otherBtn !== btn && otherBtn.classList.contains('active')) {
                    otherBtn.classList.remove('active');
                    otherBtn.nextElementSibling.classList.remove('active');
                }
            });
        });
    });

    // 3. Soft Hero Entrance
    gsap.from(".hero-reveal", {
        y: 40, opacity: 0, duration: 1.5, ease: "power3.out", delay: 0.2
    });

    gsap.to(".hero-parallax", {
        yPercent: 15, ease: "none",
        scrollTrigger: { trigger: "#home", start: "top top", end: "bottom top", scrub: true }
    });

    // 4. Staggered Global Reveals
    gsap.utils.toArray('.reveal-up').forEach(el => {
        gsap.from(el, {
            scrollTrigger: { trigger: el, start: "top 85%" },
            y: 50, opacity: 0, duration: 1, ease: "power2.out"
        });
    });

    // 5. Sticky Glass Nav Dynamic Shadow
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.nav-container');
        if (window.scrollY > 50) {
            nav.classList.add('shadow-md');
            nav.classList.replace('border-white/20', 'border-forest/10');
        } else {
            nav.classList.remove('shadow-md');
            nav.classList.replace('border-forest/10', 'border-white/20');
        }
    });
});
