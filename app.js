// app.js - Ganador Smooth Interactions

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Elegant Custom Cursor
    const cursor = document.querySelector('.elegant-cursor');
    const magneticElements = document.querySelectorAll('.magnetic-el');

    if (window.innerWidth > 1024 && cursor) {
        document.addEventListener('mousemove', (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.15,
                ease: "power2.out"
            });
        });

        magneticElements.forEach((el) => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hovered');
                gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
            });
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                gsap.to(el, { x: x * 0.15, y: y * 0.15, duration: 0.3, ease: "power2.out" });
            });
        });
    }

    // 2. Soft Hero Entrance
    gsap.from(".hero-reveal", {
        y: 40,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.2
    });

    // Subtle Parallax on the Hero Image to simulate depth
    gsap.to(".hero-parallax", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
            trigger: "#home",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // 3. Staggered Corporate Section Reveal
    gsap.utils.toArray('.reveal-up').forEach(el => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
    });

    // 4. Menu Cards Cascade
    gsap.from(".menu-card", {
        scrollTrigger: {
            trigger: "#menus",
            start: "top 70%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
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
