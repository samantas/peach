function init() {
    if ($(window).width() < 667) {
        $('#hero').removeClass("flex-row");
        $('#hero').addClass("flex-column");
        $('#taglineSection').addClass("center");
        $('.hero-content').css('margin-bottom', '25px');
        $('#childDiv').removeClass("flex-row");
        $('#childDiv').addClass("flex-column");
        $('.section').css('max-height', 'unset');
        $('#childDiv > div:nth-child(1)').removeClass("container");
        $('#childDiv > div.container.flex-column.justify-center.padding-left').addClass("center");
        $('body > div.footer > div.footer-bottom > div').css('flex-direction', 'column');
        $('#featureOverviewSubheader').removeClass("cushion");
        $('#featureOverviewSubheader').css('margin', '20px 0 0');

        $('#hi-p').removeClass("width-half");

        $('#menuNavItems > div.nav-item.btn-primary').addClass('hidden');
        $('#menuNavItems > .nav-item').addClass('nav-item-mobile');

        $('#navMobileIcon').click(function() {
            $('#menuNavItems').addClass('nav-mobile-overlay');
            $('#menuNavItems').removeClass('nav-desktop');
        });

        $('.close-icon').removeClass("hidden");

        $('#closeMobileMenu').click(function() {
            $('#menuNavItems').removeClass('nav-mobile-overlay');
            $('#menuNavItems').addClass('nav-desktop');
        });

        $('#hiwStepsContainer').addClass("flex-column");


    } else {
        $('.close-icon').addClass("hidden");
        $('#hi-p').addClass("width-half");
        $('#hiwStepsContainer').removeClass("flex-column");
    }

}

$(function() { document.body.style.display = "block";
    init() });