import {getElements} from "../core/index.js";

export default function tabs() {
    const tabs = getElements('.tabs-control a');
    const boxes = getElements('.box');
    if (!tabs.length || !boxes.length) return;
    tabs.forEach(function (tab, index) {
        tab.addEventListener('click', function (event) {
            event.preventDefault();

            var currentTab = this.getAttribute('href');

            tabs.forEach(function (tab) {
                tab.classList.remove('active');
            });

            boxes.forEach(function (box) {
                box.classList.remove('active'); // Видаляємо клас "active" з усіх блоків
                box.style.display = 'none'; // Приховуємо всі блоки
            });

            this.classList.add('active');
            document.querySelector(currentTab).classList.add('active'); // Додаємо клас "active" до відповідного блоку
            document.querySelector(currentTab).style.display = 'block'; // Показуємо відповідний блок

            // Зберігання поточної вкладки в локальному сховищі
            // localStorage.setItem('currentTab', index);
        });
    });

    // Отримання останньої вибраної вкладки зі сховища
    let currentTab = 3;
    let getTab = currentTab ? currentTab : 3;
    tabs[getTab].classList.add('active');
    getElements('.box')[getTab].classList.add('active'); // Додаємо клас "active" до останнього вибраного блоку
    getElements('.box')[getTab].style.display = 'block'; // Показуємо останній вибраний блок
}