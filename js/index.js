const menuButton =   document.querySelector('nav.sidebar ul.top li.menu');
const menuParagraphs = document.querySelectorAll('nav.sidebar ul li p');

for(f = 0; f < menuParagraphs.length; f++){
    menuParagraphs[f].style.display = "none";
}

menuButton.addEventListener('click', toggleMenuParagraphs);

function toggleMenuParagraphs(){
    for(f = 0; f < menuParagraphs.length; f++){
        if(menuParagraphs[f].style.display =="none"){
            menuParagraphs[f].style.display = "block";
        }
        else{
            menuParagraphs[f].style.display = "none"
        }
    }
}

