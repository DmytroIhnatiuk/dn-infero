import {getElement, getElements} from "../core/index.js";
import {preloader} from "../core/elementsNodeList.js";
import {appendArrayToFormData} from "./helpers.js";


export default function filter() {

    if (!getElements('[data-filter]').length) return;
    const filterArgs = {
        category: [],
        level: []
    }
    getElements('.category__filter_item-select select').forEach(select => {
        select.addEventListener('change', async () => {
            filterArgs[select.name] = select.value;
            preloader.classList.add('show')
            const formData = new FormData();
            formData.append('action', 'infero_get_filtered_products');
            for (let key in filterArgs) {

                if (Array.isArray(filterArgs[key]) && filterArgs[key].length) {
                    appendArrayToFormData(formData, filterArgs[key], key);
                } else {
                    if (filterArgs[key].length) {
                        formData.append(key, filterArgs[key]);
                    }
                }
            }

            try {
                const response = await fetch(ajaxUrl, {
                    method: 'POST',
                    body: formData,
                })
                console.log(response)
                if (!response.ok) throw new Error('text error');
                const data = await response.json();
                if (data.products && data.products.length) {
                    getElement('.courses-list').innerHTML = ''
                    data.products.forEach(product => {
                        getElement('.courses-list').innerHTML += renderCourseItem(product)
                    })
                    getElement('.woocommerce-pagination')?.remove()
                    // if (data.pagination) {
                    //     getElement('.woocommerce-pagination').innerHTML = data.pagination
                    // } else {
                    //     getElement('.woocommerce-pagination')?.remove()
                    // }


                }
                console.log(data)
            } catch (e) {
                console.log(e)
            } finally {
                preloader.classList.remove('show')
            }

        })
    })
    getElements('[data-filter]').forEach(filter => {

        const filterBtns = getElements('.filter-check input', filter);
        filterBtns.forEach(filterBtn => {
            filterBtn.addEventListener('click', async () => {

                if (!filterArgs[filter.dataset.filter].includes(filterBtn.value)) {
                    filterArgs[filter.dataset.filter].push(filterBtn.value)
                } else {
                    filterArgs[filter.dataset.filter] = filterArgs[filter.dataset.filter].filter(item => item !== filterBtn.value)
                }
                preloader.classList.add('show')
                const formData = new FormData();
                formData.append('action', 'infero_get_filtered_products');
                for (let key in filterArgs) {
                    // if (filterArgs[key].length) {
                    //     appendArrayToFormData(formData, filterArgs[key], key);
                    // }
                    if (Array.isArray(filterArgs[key]) && filterArgs[key].length) {
                        appendArrayToFormData(formData, filterArgs[key], key);
                    } else {
                        if (filterArgs[key].length) {
                            formData.append(key, filterArgs[key]);
                        }
                    }
                }
                console.log(222, filterArgs)
                try {
                    const response = await fetch(ajaxUrl, {
                        method: 'POST',
                        body: formData,
                    })
                    if (!response.ok) throw new Error('text error');
                    const data = await response.json();
                    if (data.products && data.products.length) {
                        getElement('.courses-list').innerHTML = ''
                        data.products.forEach(product => {
                            getElement('.courses-list').innerHTML += renderCourseItem(product)
                        })
                        getElement('.woocommerce-pagination')?.remove()
                    }
                    console.log(data)
                } catch (e) {
                    console.log(e)
                } finally {
                    preloader.classList.remove('show')
                }


                console.log('filter', filterArgs, filterBtn.value, filterArgs[filter.dataset.filter])
            })
        });
    });
}


function renderCourseItem({duration, title, link, image, price}) {
    return `
    <li class="category__filter_item">
        <a href="${link}" class="category__filter_item-img">
            ${image}
        </a>
        <div class="category__filter_item-text">
        <a href="${link}" class="h4">
            ${title}
        </a>
        <div class="category__filter_item-price"><p>Duration: <b>${duration}</b></p>
            <p>Price: <b>${price} + VAT</b></p>

                <a href="${link}" class=" button">
                    Book Now
                </a>


        </div>
    </div>
</li>`
}