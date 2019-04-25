function init() {
    if ($(window).width() < 667) {
        $('#hero').removeClass("flex-row");
        $('#hero').addClass("flex-column");
        $('#taglineSection').addClass("center");
        $('.hero-content').css('margin-bottom','25px');
        $('#childDiv').removeClass("flex-row");
        $('#childDiv').addClass("flex-column");
        $('.section').css('max-height','unset');
        $('#childDiv > div:nth-child(1)').removeClass("container");
        $('#childDiv > div.container.flex-column.justify-center.padding-left').addClass("center");
        $('body > div.footer > div.footer-bottom > div').css('flex-direction','column');
    } else {

    }

}

$(document).ready(init);