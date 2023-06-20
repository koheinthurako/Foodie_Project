import './style.scss'
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';
import "waypoints/lib/noframework.waypoints";


let typed = new Typed('#element', {
    strings: ['Food ...', 'Drink ...'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 3000,
    loop: true
  });

let toDown = {
    distance: '50px',
    origin: 'top',
    interval: 300,
    duration: 800
};

ScrollReveal().reveal('.to-down', toDown);


let toRight = {
    distance: '50px',
    origin: 'left',
    interval: 300,
    duration: 800
};

ScrollReveal().reveal('.to-right', toRight);


let toLeft = {
    distance: '50px',
    origin: 'right',
    interval: 300,
    duration: 800
};

ScrollReveal().reveal('.to-left', toLeft); 


new Waypoint({
    element: document.getElementById('home-content'),
    handler: function(direction) {
        let oldNavLink = document.querySelector(".nav-link.active")
        if(oldNavLink != null) {
            oldNavLink.classList.remove('active');
        }
        let currentNavLink = document.querySelector(`[href="#home"]`);
        currentNavLink.classList.add('active');
    },
    offset: "10%"
  })

  let sections = ['about', 'services', 'menus', 'contact'];
  sections.forEach(function(section) {
    new Waypoint({
        element: document.getElementById(section),
        handler: function(direction) {
            let oldNavLink = document.querySelector(".nav-link.active")
            oldNavLink.classList.remove('active');
            let currentNavLink = document.querySelector(`[href="#${section}"]`);
            currentNavLink.classList.add('active');
        },
        offset: "20%"
    })
  });

  const menuLists = [
    {
        id: 1,
        img: "./img/plate1.png",
        title: "Barbecue Salad",
        description: "Special Delicious Dish",
        price: 22.2,
        currency: "$",
    },
    {
        id: 2,
        img: "./img/plate2.png",
        title: "Salad with fish",
        description: "Special Delicious Dish",
        price: 30.5,
        currency: "$",
    },
    {
        id: 3,
        img: "./img/plate3.png",
        title: "Spanich Salad",
        description: "Special Delicious Dish",
        price: 50,
        currency: "$",
    }
  ];

  let menuRow = document.getElementById('menuRow');
  menuLists.forEach(function(menuList) {
    let div = document.createElement('div');
    div.classList.add("col-8", "col-md-4", "col-lg-3");
    div.innerHTML = `
        <div class="card plate-card mb-5 to-left">
            <img src="${menuList.img}" class="w-75 mx-auto d-block my-4 card-img" alt="">
            <div class="card-body">
                <p class="fw-bold m-0">${menuList.title}</p>
                <p class="text-black-50 small">
                    ${menuList.description}
                </p>
                <div class="d-flex justify-content-between align-items-center">
                    <p class="m-0">${menuList.currency} ${menuList.price}</p>
                    <button class="btn btn-primary">
                    <i class="bi bi-cart-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    menuRow.append(div);
  });