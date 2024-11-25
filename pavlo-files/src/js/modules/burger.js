import {header} from "../core/elementsNodeList.js";
import {disableScrollAndSwipes, enableScrollAndSwipes} from "../core/index.js";

const burger = () => {
    if (header) {
        const menuBtn = document.querySelector('.menu-btn');
        const menu = document.querySelector('.nav');
        // const menuItem = document.querySelectorAll('.nav__link');

        menuBtn.addEventListener('click', function () {
            const scrollPosition = menuBtn.dataset.position && menuBtn.dataset.position !== '0' ? menuBtn.dataset.position : scrollY || document.documentElement.scrollTop;
            if (menuBtn.classList.contains('active')) {
                enableScrollAndSwipes(scrollPosition);
                menuBtn.dataset.position = '0';
                setTimeout(() => {
                    menuBtn.classList.remove("active");
                    menu.classList.remove("active");
                }, 100)


            } else {
                menuBtn.dataset.position = scrollPosition;
                disableScrollAndSwipes(scrollPosition);
                menuBtn.classList.add("active");
                menu.classList.add("active");
            }

        })


        // menuItem.forEach(function (menuItem) {
        //     menuItem.addEventListener('click', function () {
        //         menuBtn.classList.toggle('active');
        //         menu.classList.toggle('active');
        //     })
        // })
    }
};
export default burger;
