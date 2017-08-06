// when resume tab clicked, autoscroll to bottom of page to fit all content
$('#resume-tab').click(function() {
    $('html, body').animate({
        scrollTop: $(document).height()
    }, 1250);
});

// reorder tabs on selection of one
// DOM indexing is too tricky to manipulate; keep a local reference instead
// hacky solution, but it works ;)
var tab_indices = [
    'about-tab',
    'portfolio-tab',
    'resume-tab'
];

// disable tab movement on insufficient screen size
var tab_movement = ($(window).width() >= 960) ? true : false;

// detect window resize: this would also mess up tabs
$(window).resize(function() {
    if ($(window).width() < 960) {
        tab_movement = false;
    }
});

// tab reordering function
$('#tabs li').click(function() {
    // need to swap clicked tab with 0th tab
    var tab_0 = tab_indices[0];
    var $tab_0 = $('#' + tab_0);

    // animate content change; this should occur whether or not the tabs will animate
    $($(this).find('a').attr('href')).animate({
        opacity: 1
    }, 1100);
    $(($tab_0).find('a').attr('href')).animate({
        opacity: 0
    }, 1100);

    // index of clicked tab
    var idx = tab_indices.indexOf($(this).attr('id'));

    // if no movement, change the array to keep track of current tab but don't animate movement
    if (!tab_movement) {
        tab_indices[0] = tab_indices[idx];
        tab_indices[idx] = tab_0;
        return;
    }

    // animate the position change, if needed
    if (idx == 0) {
        return;
    }
    else if (idx == 1) {
        $(this).animate({
            'left': '-=' + $tab_0.width()
        }, 1000);
        $tab_0.animate({
            'left': '+=' + $(this).width()
        }, 1000);
    }
    else if (idx == 2) {
        $(this).animate({
            'left': '-=' + ($tab_0.width() + $('#' + tab_indices[1]).width())
        }, 1000);
        $tab_0.animate({
            'left': '+=' + ($('#' + tab_indices[1]).width() + $('#' + tab_indices[2]).width())
        }, 1000);
    }

    // update our reference of tab order
    tab_indices[0] = tab_indices[idx];
    tab_indices[idx] = tab_0;
});
