// Rotate icon on collapse toggle
document.querySelectorAll('.card-header').forEach(header => {
    header.addEventListener('click', function () {
        const icon = header.querySelector('.collapse-icon');
        icon.classList.toggle('rotate');
    });
});
$(document).ready(function () {
    // Smooth scroll for nav links
    $('.nav-link').on('click', function (event) {
        event.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({ scrollTop: target.offset().top - 60 }, 1000);
        }
    });

    // Show scroll-to-top button after scrolling 200px
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#scrollToTopBtn').fadeIn();
        } else {
            $('#scrollToTopBtn').fadeOut();
        }
    });

    // Scroll to top button functionality
    $('#scrollToTopBtn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        $('.nav-link').removeClass('active'); // Remove 'active' class from all links
        $('#home').addClass('active'); // Add 'active' class to the clicked link
        return false;
    });

    // Animate sections on scroll
    $(window).on('scroll', function () {
        $('.section').each(function () {
            if ($(window).scrollTop() > $(this).offset().top - 400) {
                $(this).addClass('fadeIn');
            }
        });
    });
});
// jQuery to add 'active' class to the clicked nav-link and remove it from others
$(document).ready(function () {
    $('.nav-link').on('click', function () {
        $('.nav-link').removeClass('active'); // Remove 'active' class from all links
        $(this).addClass('active'); // Add 'active' class to the clicked link
    });
});