let theme = localStorage.getItem('theme')

let themeDots = document.getElementsByClassName('theme-dot')

if(themeDots == null) {
    setTheme('light')
} else {
    setTheme(theme)
}

for (var i=0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('clicked', mode)
        setTheme(mode)
    })
}

function setTheme(mode) {
    if(mode == 'light') {
        document.getElementById('theme-style').href = 'css/default.css'
        // document.getElementById('logo').src='img/logo_black.png'
    }

    if(mode == 'blue') {
        document.getElementById('theme-style').href = 'css/blue.css'
        // document.getElementById('logo').src='img/logo_white.png'
    }

    if(mode == 'green') {
        document.getElementById('theme-style').href = 'css/green.css'
        // document.getElementById('logo').src='img/logo_white.png'
    }

    if(mode == 'purple') {
        document.getElementById('theme-style').href = 'css/purple.css'
        // document.getElementById('logo').src='img/logo_white.png'
    }

    localStorage.setItem('theme', mode)
}

var container = document.querySelectorAll(".theme-options-container")[0];
var theChanger = document.getElementById("themeChanger");

theChanger.addEventListener("click", function() {
    console.log("you clicked me");
    if (!container.classList.contains('alert-is-shown')){
        container.classList.add("alert-is-shown");
    }
    else{
        container.classList.remove("alert-is-shown");

}
});


$('.navbar-nav').on('click', 'a', function() {
    $('.navbar-nav a.nav-link.link-scroll.active').removeClass('active');
    $(this).addClass('active');
});

$('body').scrollspy({
    target: '.navbar',
    offset: 80
});

$(window).resize(function() {
    if (document.documentElement.clientWidth < 1000) {    
        $('nav').addClass('sticky');
        
    } else {
        $('nav').removeClass('sticky');

        $(window).on("scroll", function() {
            var scroll = $(window).scrollTop();
            
            if (scroll < 100) {
                    $('nav').removeClass('sticky');
                
            } else {
                $('nav').addClass('sticky');
            }
        })
    }

}).resize()
