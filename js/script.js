// menu

let menu = document.getElementById("menu");
let menuButton = document.getElementById("menuButton");
let burgerMenu1 = document.getElementById("burgerMenu1");
let burgerMenu2 = document.getElementById("burgerMenu2");
let burgerMenu3 = document.getElementById("burgerMenu3");
console.log(menu);




function burgerMenu() {
    console.log(menu);
    burgerMenu1.classList.toggle("checked1");
    burgerMenu2.classList.toggle("checked2");
    burgerMenu3.classList.toggle("checked3");
    menu.classList.toggle("opened");
    menuButton.classList.toggle("opened-menu");
}

function closeMenu() {
    burgerMenu1.classList.toggle("checked1");
    burgerMenu2.classList.toggle("checked2");
    burgerMenu3.classList.toggle("checked3");
    menu.classList.toggle("opened");
    menuButton.classList.toggle("opened-menu");
}



// switcher

// let catalogSwitcher = document.getElementById("catalogSwitcher");
// let catalogItems1 = document.getElementById("catalogItems1");

// function switchCatalog() {
//     catalogItems1.classList.toggle("catalog-opened");
//     catalogSwitcher.classList.toggle("switcher-opened");
// }

let catalogContainer = document.getElementsByClassName("catalog-container"); 
let catalogSwitcher = document.getElementsByClassName("catalog-switcher"); 
let catalogItems = document.getElementsByClassName("catalog_items"); 




catalogContainer[0].addEventListener('click', switchCatalog0);

function switchCatalog0() {
    catalogSwitcher[0].classList.toggle("switcher-opened");
    catalogItems[0].classList.toggle("catalog-opened");
  }


  
catalogContainer[1].addEventListener('click', switchCatalog1);

function switchCatalog1() {
    catalogSwitcher[1].classList.toggle("switcher-opened");
    catalogItems[1].classList.toggle("catalog-opened");
  }


    
catalogContainer[2].addEventListener('click', switchCatalog2);

function switchCatalog2() {
    catalogSwitcher[2].classList.toggle("switcher-opened");
    catalogItems[2].classList.toggle("catalog-opened");
  }


catalogContainer[3].addEventListener('click', switchCatalog3);

function switchCatalog3() {
    catalogSwitcher[3].classList.toggle("switcher-opened");
    catalogItems[3].classList.toggle("catalog-opened");
  }

  
catalogContainer[4].addEventListener('click', switchCatalog4);

function switchCatalog4() {
    catalogSwitcher[4].classList.toggle("switcher-opened");
    catalogItems[4].classList.toggle("catalog-opened");
  }


  catalogContainer[5].addEventListener('click', switchCatalog5);

function switchCatalog5() {
    catalogSwitcher[5].classList.toggle("switcher-opened");
    catalogItems[5].classList.toggle("catalog-opened");
  }


  catalogContainer[6].addEventListener('click', switchCatalog6);

  function switchCatalog6() {
      catalogSwitcher[6].classList.toggle("switcher-opened");
      catalogItems[6].classList.toggle("catalog-opened");
    }
  
    catalogContainer[7].addEventListener('click', switchCatalog7);

    function switchCatalog7() {
        catalogSwitcher[7].classList.toggle("switcher-opened");
        catalogItems[7].classList.toggle("catalog-opened");
      }
      

        
    catalogContainer[8].addEventListener('click', switchCatalog8);

    function switchCatalog8() {
        catalogSwitcher[8].classList.toggle("switcher-opened");
        catalogItems[8].classList.toggle("catalog-opened");
      }
    
      catalogContainer[9].addEventListener('click', switchCatalog9);

      function switchCatalog9() {
          catalogSwitcher[9].classList.toggle("switcher-opened");
          catalogItems[9].classList.toggle("catalog-opened");
        }


