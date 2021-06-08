var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disappear")
}


/* 
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
    }

    if(mode == 'blue') {
        document.getElementById('theme-style').href = 'css/blue.css'
    }

    if(mode == 'green') {
        document.getElementById('theme-style').href = 'css/green.css'
    }

    if(mode == 'purple') {
        document.getElementById('theme-style').href = '/css/purple.css'
    }

    localStorage.setItem('theme', mode)
}
*/