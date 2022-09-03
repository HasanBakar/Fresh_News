const navCatagories = (news) => {
    news.navCatagories = true;

    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(tamp => displayNavCatagories(tamp.data.news_category))
};

const displayNavCatagories = (dataArray) => {

    const container = document.getElementById('navigation_bar');
    const home = document.getElementById('show_home');
    home.classList.remove('hidden');
    dataArray.forEach(differentNews => {
        const { category_name, category_id } = differentNews;
        const containerDiv = document.createElement('div');
        containerDiv.innerHTML = ` 
        <button onclick="cardNews('${category_id}')"  class="font-semibold text-lg mt-6 md:flex md:flex-wrap md:justify-end md:items-end sm:flex sm:flex-wrap  sm:items-end sm:justify-end  hover:text-white hover:rounded hover:bg-blue-600 px-1"onclick="cardNews('${category_id}')" >${category_name}</button>
        `;
        container.appendChild(containerDiv);
    });
};






// testing

