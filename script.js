$('#open').click(function() {
    $('#map-main').toggleClass("info");
})

$('#close').click(function() {
    $('#map-main').toggleClass("info");
})

$('.list-item').click(function() {
    // Redirect from list to info page
    $('#map-main').toggleClass("info");
    $('#map-main').toggleClass("list");
    $('#list-icon').removeClass("current");
    $('#map-icon').addClass("current");
})

$('#log-in').click(function() {
    // Show account information when log in button is pressed
    $(this).parent().addClass("hidden");
    $('#account-overview').addClass("logged-in");
})

$('#list-icon').click(function() {
    // Add 'currently selected' class to clicked icon
    $(this).addClass("current");
    $('#map-icon').removeClass("current");
    $('#social-icon').removeClass("current");

    $('#map-main').removeClass("info");

    $('#map-main').removeClass("social");
    $('#map-main').addClass("list");
})

$('#map-icon').click(function() {
    // Add 'currently selected' class to clicked icon
    $('#list-icon').removeClass("current");
    $(this).addClass("current");
    $('#social-icon').removeClass("current");

    $('#map-main').removeClass("list");
    $('#map-main').removeClass("social");

    $('#map-main').removeClass("info");
})

$('#social-icon').click(function() {
    // Add 'currently selected' class to clicked icon
    $('#list-icon').removeClass("current");
    $('#map-icon').removeClass("current");
    $(this).addClass("current");

    $('#map-main').removeClass("info");

    $('#map-main').removeClass("list");
    $('#map-main').addClass("social");
})

$('#see-more').click(function() {
    // Reveal more images
    if ($('.info h2 + section section:nth-of-type(n+4)').hasClass("revealed"))
    {
        $("p", this).text("See more →");
    }
    else 
    {
        $("p", this).text("See less ←");
    }
    $('.info h2 + section section:nth-of-type(n+4)').toggleClass("revealed");
})
