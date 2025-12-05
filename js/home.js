        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.slider-dot');
        let currentSlide = 0;

        /**
         * Fungsi untuk mengubah slide dengan transisi CSS yang halus.
         */
        function changeSlide(index) {
            // Hentikan interval otomatis saat navigasi manual
            clearInterval(slideInterval); 

            const prevSlide = slides[currentSlide];
            const nextSlide = slides[index];

            // 1. Deaktivasi slide sebelumnya
            prevSlide.classList.remove('active');
            
            // 2. Aktivasi slide berikutnya (CSS akan menangani transisi)
            nextSlide.classList.add('active');

            // 3. Update dots
            dots.forEach(dot => dot.classList.remove('active-dot', 'bg-white'));
            dots[index].classList.add('active-dot', 'bg-white');

            currentSlide = index;

            // 4. Mulai kembali interval otomatis
            slideInterval = setInterval(nextSlide, 4000);
        }

        function nextSlide() {
            const next = (currentSlide + 1) % slides.length;
            // Gunakan changeSlide untuk transisi
            changeSlide(next);
        }

        // Auto slide every 4 seconds
        let slideInterval = setInterval(nextSlide, 4000);

        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                changeSlide(index);
            });
        });

        // Scroll to welcome section
        function scrollToWelcome() {
            document.getElementById('welcome').scrollIntoView({ behavior: 'smooth' });
        }

        // Intersection Observer for card animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Hanya aktifkan jika masuk viewport
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.card-hover').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease-out';
            observer.observe(card);
        });

        // Style for initial active dot
        document.querySelector('.active-dot').classList.add('bg-white');
        
        const swiper = new Swiper('.myPromoSlider', {
            loop: true,
            autoplay: { delay: 3000 },
            slidesPerView: 1,
            spaceBetween: 20,
            speed: 700,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        
