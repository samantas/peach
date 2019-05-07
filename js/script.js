// detect if element is in view code from http://jsfiddle.net/bseth99/kej64/
(function($) {

    var $window = $(window),
        _watch = [],
        _buffer;

    function test($el) {
        var docViewTop = $window.scrollTop(),
            docViewBottom = docViewTop + $window.height(),
            elemTop = $el.offset().top,
            elemBottom = elemTop + $el.height();

        return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) &&
            (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    $window.on('scroll', function(e) {

        if (!_buffer) {

            _buffer = setTimeout(function() {

                checkInView(e);

                _buffer = null;

            }, 300);
        }

    });

    function checkInView(e) {

        $.each(_watch, function() {

            if (test(this.element)) {
                if (!this.invp) {
                    this.invp = true;
                    if (this.options.scrolledin)
                        this.options.scrolledin.call(this.element, e);

                    this.element.trigger('scrolledin', e);
                }
            } else if (this.invp) {
                this.invp = false;
                if (this.options.scrolledout)
                    this.options.scrolledout.call(this.element, e);

                this.element.trigger('scrolledout', e);
            }
        });
    }

    function monitor(element, options) {
        var item = { element: element, options: options, invp: false };
        _watch.push(item);
        return item;
    }

    function unmonitor(item) {
        for (var i = 0; i < _watch.length; i++) {
            if (_watch[i] === item) {
                _watch.splice(i, 1);
                item.element = null;
                break;
            }
        }
        console.log(_watch);
    }

    var pluginName = 'scrolledIntoView',
        settings = {
            scrolledin: null,
            scrolledout: null
        }


    $.fn[pluginName] = function(options) {

        var options = $.extend({}, settings, options);

        this.each(function() {

            var $el = $(this),
                instance = $.data(this, pluginName);

            if (instance) {
                instance.options = options;
            } else {
                $.data(this, pluginName, monitor($el, options));
                $el.on('remove', $.proxy(function() {

                    $.removeData(this, pluginName);
                    unmonitor(instance);

                }, this));
            }
        });

        return this;
    }


})(jQuery);

$('.featureImg')
    .scrolledIntoView()
    .on('scrolledin', function() {
        console.log('in ' + $(this).text());
        $(this).addClass("fadeIn");
    })
    .on('scrolledout', function() {
        console.log('out ' + $(this).text());
    });

function init() {
    if (($(window).width() < 667) || ($(window).width() < 813 && $(window).height() < 376)) {
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
            $('#menuNavItems').removeClass('center');
        });

        $('.close-icon').removeClass("hidden");

        $('#closeMobileMenu').click(function() {
            $('#menuNavItems').removeClass('nav-mobile-overlay');
            $('#menuNavItems').addClass('nav-desktop');
        });

        $('.nav-items').addClass("center");

        $('#hiwStepsContainer').addClass("flex-column");

        $('.pillar').removeClass("flex-row");
        $('.pillar').addClass("flex-column");

        $('.testimonials').removeClass("flex-row");
        $('.testimonials').addClass("flex-column");

        $('.bio-container').removeClass("flex-row");
        $('.bio-container').addClass("flex-column");

        $('#reorderMe > div').each(function() {
            $(this).prependTo(this.parentNode);
        });

        $('.feature').removeClass("flex-row");
        $('.feature').addClass("flex-column");

        $('#signUp').removeClass("flex-row flex-end");
        $('#signUp').addClass("flex-column center");


    } else {
        $('.close-icon').addClass("hidden");
        $('#hi-p').addClass("width-half");
        $('#hiwStepsContainer').removeClass("flex-column");
    }

}

$(function() {
    document.body.style.display = "block";
    init()
});