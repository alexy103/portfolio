var menuOuvert = false;
var previousMenu = 'welcome';

// Tableau contenant les éléments qui ne sont pas encore créés, on bouclera dessus par la suite
var enConstruction = [
    document.getElementById('menuenvies'),
    document.getElementById('menusejour'),
    document.getElementById('menupratique'),
    document.getElementById('meteo'),
    document.getElementById('carte'),
    document.getElementById('blog'),
    document.getElementById('disponibilites'),
    document.getElementById('sous-menu-gras').children[0],
    document.getElementById('sous-menu-gras').children[1]
]

// Gère l'ouverture et la fermeture du menu pour les petits écrans (<700px)
function switchMenu(){
    if (window.innerWidth < 700) {
        if(menuOuvert){
            document.getElementById('menu').style.left = '-100vw';
            if(previousMenu.localeCompare('decouvrir')==0){
                document.getElementById('content').style.display = 'block';
                menuOuvert = false;
                return
            }
            document.getElementsByClassName(previousMenu)[0].style.display = 'flex';
            menuOuvert = false;
        } else {
            document.getElementById('content').style.display = 'none';
            document.getElementsByClassName('build')[0].style.display = 'none';
            document.getElementById('menu').style.left = '0vw';
            document.getElementsByClassName('welcome')[0].style.display = 'none';
            menuOuvert = true;
        }
    } else {
        document.getElementById('content').style.display = 'flex';
        document.getElementById('menu').style.left = '-100vw';
        menuOuvert = false;
    }
}

// Affiche le menu correspondant à celui sur lequel l'utilisateur a cliqué
function showMenu(newMenu) {
    if(menuOuvert){
        switchMenu();
    }
    document.getElementsByClassName('welcome')[0].style.display = 'none';
    document.getElementsByClassName(previousMenu)[0].style.display = 'none';
    previousMenu = newMenu;
    if(newMenu.localeCompare('decouvrir')==0 && window.innerWidth<700){
        document.getElementById('content').style.display = 'block';
        document.getElementById('maincontent').style.display = 'block';
        document.getElementById('boutons').style.display = 'flex';
        document.getElementById('photo').style.display = 'block';
        return
    }
    document.getElementsByClassName(newMenu)[0].style.display = 'flex';
}

// Fait en sorte que le resize de fenêtre place correctement les éléments
window.addEventListener('resize', function(){
    if(window.innerWidth>699){
        document.getElementById('menu').style.left = '15%';
    } else {
        document.getElementById('menu').style.left = '-100vw';
        if(previousMenu.localeCompare('decouvrir')==0){
            document.getElementById('content').style.display = 'block';
            document.getElementById('maincontent').style.display = 'block';
            document.getElementById('boutons').style.display = 'flex';
            document.getElementById('photo').style.display = 'block';
        }
    }
});

// Ajout des événements lors du clic
document.getElementById("croix").addEventListener("click", switchMenu);

document.getElementById('menudecouvrir').addEventListener("click", function() {
    showMenu('decouvrir');
});

document.getElementById('logo').addEventListener("click", function() {
    showMenu('welcome');
});

enConstruction.forEach(element => {
    element.addEventListener('click', function(){
        showMenu('build');
    })
    console.log(element)
});

// Gère le changement des images
const photo = document.getElementById("photo");
const sousMenuItems = document.getElementById("sous-menu").children;

for (let i = 0; i < sousMenuItems.length; i++) {
    sousMenuItems[i].addEventListener('click', function () {
        const images = [
            'https://raw.githubusercontent.com/alexy103/portfolio/main/test%20int%C3%A9gration/img/beach-golden-hour-grass-1192671.jpg',
            'https://raw.githubusercontent.com/alexy103/portfolio/main/test%20int%C3%A9gration/img/beautiful-daylight-environment-709552.jpg',
            'https://raw.githubusercontent.com/alexy103/portfolio/main/test%20int%C3%A9gration/img/bloom-blossom-flora-60006.jpg',
            'https://raw.githubusercontent.com/alexy103/portfolio/main/test%20int%C3%A9gration/img/conifer-daylight-environment-338936.jpg',
            'https://raw.githubusercontent.com/alexy103/portfolio/main/test%20int%C3%A9gration/img/pexels-photo-688660.jpeg',
            'https://raw.githubusercontent.com/alexy103/portfolio/main/test%20int%C3%A9gration/img/pexels-photo-730256.jpeg',
            'https://raw.githubusercontent.com/alexy103/portfolio/main/test%20int%C3%A9gration/img/pexels-photo-891252.jpeg'
        ];
    photo.src = images[i];
    });
}