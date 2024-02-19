
// J.S. for Menu Button
let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}



// J.S. for Theme Toggler Button
function darktheme() {
    const body = document.body;
    const button = document.querySelector('button');
    const isDarkTheme = body.classList.toggle("dark-theme");
    
    // Change the button icon based on the theme
    if (isDarkTheme) {
        button.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        button.innerHTML = '<i class="fas fa-moon"></i>';
    }
}




/*document.addEventListener("contextmenu",function(e){
    e.preventDefault()
},false)*/

// oncontextmenu="return false"