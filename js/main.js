import Swiper from "swiper";
import { Navigation } from 'swiper/modules';

  window.onload = fontsize;
  window.onresize = fontsize;

  function fontsize(){
    var el = document.querySelectorAll('.fontsize');
    for (let i = 0; i <= el.length-1; i++ ){
      let block = el[i];
      let text = el[i].querySelector('.text');
      let wBlock = block.offsetWidth;
      let wText = text.offsetWidth;
      let num = 32;
      
      while (wText > wBlock){
        num--; 
        text.style.fontSize = num + 'px';
        wBlock = block.offsetWidth;
        wText = text.offsetWidth;	
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    const header = document.querySelector(".header");
    const menuBtn = document.querySelector(".menu-btn");

    if (!header || !menuBtn) {
        console.error("Элемент `.header` или `.menu-btn` не найден!");
        return;
    }

    const overlay = document.createElement("div");
    overlay.classList.add("site-overlay");
    header.appendChild(overlay);

    body.addEventListener("click", (event) => {
        if (event.target.classList.contains("menu-btn") || event.target.closest(".menu-btn")) {
            body.classList.toggle("menuActive");
        }

        if (event.target.classList.contains("site-overlay")) {
            body.classList.remove("menuActive");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".swiper-container", {
    loop: true,
    modules: [Navigation],
    spaceBetween: 20,
    slidesPerView: 'auto',
    /*breakpoints: {
      220: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1100: { slidesPerView: 3 },
      1300: { slidesPerView: 4 },
      1500: { slidesPerView: 5 },
      1700: { slidesPerView: 6 },
    },*/
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {

  document.querySelectorAll('.tabs-wrapper').forEach(function (tabsWrapper) {
    tabsWrapper.querySelectorAll('.tabs-box').forEach(function (tabsBox) {
      tabsBox.classList.remove('activated');
    });
  });

  document.querySelectorAll('.tabs li.active a').forEach(function (activeTab) {
    var tabId = activeTab.getAttribute('href') + '_';
    var tabElement = document.querySelector(tabId);
    if (tabElement) tabElement.classList.add('activated');
  });

  document.querySelectorAll('.tabs li').forEach(function (tab) {
    tab.addEventListener('click', function (e) {
      e.preventDefault();

      var menuActive = tab.querySelector('a').getAttribute('href') + '_';
      menuActive = menuActive.substring(menuActive.indexOf('#'));

      var tabsWrapper = tab.closest('.tabs-wrapper');
      
      if (tabsWrapper) {
        tabsWrapper.querySelectorAll('.tabs-box').forEach(function (tabsBox) {
          tabsBox.classList.remove('activated');
        });
        tabsWrapper.querySelectorAll('.tabs li').forEach(function (tabItem) {
          tabItem.classList.remove('active');
        });
        
        tab.classList.add('active');
        
        var activeTabContent = document.querySelector(menuActive);
        if (activeTabContent) activeTabContent.classList.add('activated');
      }
    });
  });
});

