        // Enhanced loader
        window.addEventListener('load', function() {
            setTimeout(function() {
                document.getElementById('loader').classList.add('fade-out');
                // Trigger initial animations
                document.querySelectorAll('.hero-content > *').forEach((el, i) => {
                    setTimeout(() => el.style.opacity = '1', i * 200);
                });
            }, 1500);
        });

        // Scroll progress bar
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById('scrollProgress').style.width = scrolled + '%';
        });

        // Enhanced navbar scroll effect
        let lastScroll = 0;
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Hide/show navbar on scroll
            if (currentScroll > lastScroll && currentScroll > 100) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
            lastScroll = currentScroll;
        });

        // Reveal on scroll
        const revealElements = document.querySelectorAll('.reveal');
        const revealOnScroll = () => {
            revealElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('active');
                }
            });
        };
        
        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll(); // Initial check

        // Enhanced mobile menu toggle
        function toggleMenu() {
            const navLinks = document.getElementById('navLinks');
            const menuToggle = document.getElementById('menuToggle');
            
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        }

        // Language toggle with animation
        function toggleLanguage() {
            const body = document.body;
            const langBtn = document.querySelector('.lang-switch');
            
            body.style.transition = 'opacity 0.3s';
            body.style.opacity = '0.5';
            
            setTimeout(() => {
                if (body.classList.contains('rtl')) {
                    body.classList.remove('rtl');
                    langBtn.textContent = 'AR';
                } else {
                    body.classList.add('rtl');
                    langBtn.textContent = 'EN';
                }
                body.style.opacity = '1';
            }, 300);
        }

        // Smooth scrolling with easing
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offset = 70;
                    const targetPosition = target.offsetTop - offset;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    document.getElementById('navLinks').classList.remove('active');
                    document.getElementById('menuToggle').classList.remove('active');
                }
            });
        });

        // Enhanced form submission
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const button = this.querySelector('.btn');
            const originalText = button.textContent;
            
            button.textContent = 'Sending...';
            button.style.opacity = '0.7';
            
            setTimeout(() => {
                button.textContent = '✓ Sent!';
                button.style.background = '#4CAF50';
                
                setTimeout(() => {
                    alert('Thank you for your message! We will get back to you soon.');
                    this.reset();
                    button.textContent = originalText;
                    button.style.background = '#AEB938';
                    button.style.opacity = '1';
                }, 1000);
            }, 1500);
        });

        // Cursor effect (desktop only)
        if (window.innerWidth > 768) {
            const cursor = document.getElementById('cursorDot');
            
            document.addEventListener('mousemove', (e) => {
                cursor.style.left = e.clientX - 5 + 'px';
                cursor.style.top = e.clientY - 5 + 'px';
            });
            
            document.querySelectorAll('a, button').forEach(el => {
                el.addEventListener('mouseenter', () => {
                    cursor.style.transform = 'scale(2)';
                });
                el.addEventListener('mouseleave', () => {
                    cursor.style.transform = 'scale(1)';
                });
            });
        } else {
            document.getElementById('cursorDot').style.display = 'none';
        }

        // Parallax effect
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.hero');
            if (parallax) {
                parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });

        // Add intersection observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.service-features li').forEach(el => {
            el.style.animationPlayState = 'paused';
            observer.observe(el);
        });

        // Vision section title underline animation
        const visionTitle = document.querySelector('.vision-content h2');
        if (visionTitle) {
            const visionObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            });
            visionObserver.observe(visionTitle);
        }

