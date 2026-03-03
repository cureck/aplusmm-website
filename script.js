/* =============================================
   A+ Mobile Mechanic LLC - JavaScript
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {

                            // ---- Mobile Navigation Toggle ----
                            const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

                            if (navToggle) {
                                  navToggle.addEventListener('click', function () {
                                          navToggle.classList.toggle('active');
                                          navMenu.classList.toggle('active');
                                  });
                            }

                            // Close mobile menu when a link is clicked
                            document.querySelectorAll('.nav-link').forEach(function (link) {
                                  link.addEventListener('click', function () {
                                          navToggle.classList.remove('active');
                                          navMenu.classList.remove('active');
                                  });
                            });

                            // ---- Navbar Scroll Effect ----
                            const navbar = document.getElementById('navbar');

                            window.addEventListener('scroll', function () {
                                  if (window.scrollY > 50) {
                                          navbar.classList.add('scrolled');
                                  } else {
                                          navbar.classList.remove('scrolled');
                                  }
                            });

                            // ---- Active Nav Link Highlighting ----
                            const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

                            function highlightNav() {
                                  var scrollPos = window.scrollY + 120;
                                  sections.forEach(function (section) {
                                          var top = section.offsetTop;
                                          var height = section.offsetHeight;
                                          var id = section.getAttribute('id');

                                                         if (scrollPos >= top && scrollPos < top + height) {
                                                                   navLinks.forEach(function (link) {
                                                                               link.classList.remove('active');
                                                                               if (link.getAttribute('href') === '#' + id) {
                                                                                             link.classList.add('active');
                                                                               }
                                                                   });
                                                         }
                                  });
                            }

                            window.addEventListener('scroll', highlightNav);

                            // ---- Contact Form Handling ----
                            // This form is set up to work with Formspree (https://formspree.io).
                            // To configure email delivery:
                            // 1. Go to https://formspree.io and create a free account
                            // 2. Create a new form and get your form endpoint URL
                            // 3. Replace "YOUR_FORM_ID" in the form action attribute in index.html
                            //    with your actual Formspree form ID (e.g., "xpznqkdl")
                            // 4. Formspree will forward all form submissions to your email address
                            //
                            // Alternative: You can also use EmailJS (https://www.emailjs.com)
                            // for client-side email sending without a backend server.

                            var contactForm = document.getElementById('contactForm');

                            if (contactForm) {
                                  contactForm.addEventListener('submit', function (e) {
                                          var formAction = contactForm.getAttribute('action');

                                                                     // If Formspree is not yet configured, show a message
                                                                     if (formAction.indexOf('YOUR_FORM_ID') !== -1) {
                                                                               e.preventDefault();

                                            // Show success message as a demo
                                            var wrapper = document.querySelector('.contact-form-wrapper');
                                                                               wrapper.innerHTML =
                                                                                           '<div class="form-success">' +
                                                                                           '<i class="fas fa-check-circle"></i>' +
                                                                                           '<h3>Thank You!</h3>' +
                                                                                           '<p>Your appointment request has been received.</p>' +
                                                                                           '<p>We will contact you shortly to confirm your appointment.</p>' +
                                                                                           '<p style="margin-top: 16px; font-size: 0.85rem; color: #B0B0B0;">' +
                                                                                           '<strong>Note to site owner:</strong> To enable email notifications, ' +
                                                                                           'set up a free <a href="https://formspree.io" target="_blank" style="color: #7AB648;">Formspree</a> ' +
                                                                                           'account and replace YOUR_FORM_ID in index.html with your form ID.</p>' +
                                                                                           '</div>';

                                            // Scroll to the success message
                                            wrapper.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                                                               return;
                                                                     }

                                                                     // If Formspree is configured, let the form submit naturally
                                                                     // Formspree handles the POST request and sends the email
                                  });
                            }

                            // ---- Smooth Scroll for Anchor Links ----
                            document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
                                  anchor.addEventListener('click', function (e) {
                                          var targetId = this.getAttribute('href');
                                          if (targetId === '#') return;

                                                                var target = document.querySelector(targetId);
                                          if (target) {
                                                    e.preventDefault();
                                                    target.scrollIntoView({ behavior: 'smooth' });
                                          }
                                  });
                            });

                            // ---- Scroll Reveal Animation ----
                            var observerOptions = {
                                  threshold: 0.1,
                                  rootMargin: '0px 0px -50px 0px'
                            };

                            var observer = new IntersectionObserver(function (entries) {
                                  entries.forEach(function (entry) {
                                          if (entry.isIntersecting) {
                                                    entry.target.style.opacity = '1';
                                                    entry.target.style.transform = 'translateY(0)';
                                                    observer.unobserve(entry.target);
                                          }
                                  });
                            }, observerOptions);

                            // Animate cards on scroll
                            var animatedElements = document.querySelectorAll(
                                  '.about-card, .service-card, .review-card, .contact-item'
                                );

                            animatedElements.forEach(function (el, index) {
                                  el.style.opacity = '0';
                                  el.style.transform = 'translateY(30px)';
                                  el.style.transition = 'opacity 0.6s ease ' + (index % 4) * 0.1 + 's, transform 0.6s ease ' + (index % 4) * 0.1 + 's';
                                  observer.observe(el);
                            });

});
