

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




let items1 = [
    {
id: "catalog__item1",
photo1: "images/item1.png",
photo2: "images/items/item1-1.jpg",
photo3: "images/items/item1-3.jpg",
heading: "Чехол1 под бронежилет 6094 TV-103",
text: "<span>Артикул</span>: TV-103-ATFGN-B1",
price: "200 BYN / 15 804 RUB",
color: "Олива",
},
{
  id: "catalog__item2",
  photo1: "images/items/item1-1.jpg",
  heading: "Чехол2 под бронежилет 6094 TV-103",
  text: "<span>Артикул</span>: TV-103-ATFGN-B2",
  price: "200 BYN / 15 804 RUB",
  color: "Олива",
},
{
  id: "catalog__item3",
  photo: "images/item1.png",
  heading: "Чехол3 под бронежилет 6094 TV-103",
  text: "<span>Артикул</span>: TV-103-ATFGN-B3",
  price: "200 BYN / 15 804 RUB",
  color: "Олива",
},
{
  id: "catalog__item4",
  photo: "images/item1.png",
  heading: "Чехол4 под бронежилет 6094 TV-103",
  text: "<span>Артикул</span>: TV-103-ATFGN-B4",
  price: "200 BYN / 15 804 RUB",
  color: "Олива",
},
]


let itemCards1 = "";


for (i=0; i<items1.length; i++) {
  itemCards1 += `
<div id="${items1[i].id}" class="catalog__item">
                    <div class="images">
                      <img src="${items1[i].photo1}" class="item-photo">
                      <img src="${items1[i].photo2}" class="item-photo">
                      <img src="${items1[i].photo3}" class="item-photo">
                    </div>
                    <p class="item-heading">
                    ${items1[i].heading}
                    </p> 
                    <p class="item-text">
                    ${items1[i].text}
                    </p> 
                    <p class="item-color">
                    <span>Цвет</span>: ${items1[i].color}
                    </p>
                    <p class="item-price">
                    ${items1[i].price}
                    </p>
                </div>
`;
}


catalogItems1.innerHTML = itemCards1;


// slider






class HvrSlider {
  constructor(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
      if (el.querySelectorAll('img').length > 1) {
        const hvr = document.createElement('div');
        hvr.classList.add('hvr');

        const hvrImages = document.createElement('div');
        hvrImages.classList.add('hvr__images');
        hvr.appendChild(hvrImages);

        const hvrSectors = document.createElement('div');
        hvrSectors.classList.add('hvr__sectors');
        hvrImages.appendChild(hvrSectors);

        const hvrDots = document.createElement('div');
        hvrDots.classList.add('hvr__dots');
        hvr.appendChild(hvrDots);

        el.parentNode.insertBefore(hvr, el);
        hvrImages.prepend(el);

        const hvrImagesArray = hvr.querySelectorAll('img');
        hvrImagesArray.forEach(() => {
          hvrSectors.insertAdjacentHTML('afterbegin', '<div class="hvr__sector"></div>');
          hvrDots.insertAdjacentHTML('afterbegin', '<div class="hvr__dot"></div>');
        });
        hvrDots.firstChild.classList.add('hvr__dot--active');
        const setActiveEl = function (targetEl) {
          const index = [...hvrSectors.children].indexOf(targetEl);
          hvrImagesArray.forEach((img, idx) => {
            if (index == idx) {
              img.style.display = 'block';
            } else {
              img.style.display = 'none';
            }
          });
          hvr.querySelectorAll('.hvr__dot').forEach((dot, idx) => {
            if (index == idx) {
              dot.classList.add('hvr__dot--active');
            } else {
              dot.classList.remove('hvr__dot--active');
            }
          });
        };
        hvrSectors.addEventListener('mouseover', function (e) {
          if (e.target.matches('.hvr__sector')) {
            setActiveEl(e.target);
          }
        });
        hvrSectors.addEventListener('touchmove', function (e) {
          const position = e.changedTouches[0];
          const target = document.elementFromPoint(position.clientX, position.clientY);
          if (target.matches('.hvr__sector')) {
            setActiveEl(target);
          }
        });
      }
    });
  }
}

new HvrSlider('.images');