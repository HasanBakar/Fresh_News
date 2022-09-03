
const category = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(category => displayCategory(category.data.news_category))
}


const displayCategory = singleCate => {
    for (const catego of singleCate) {
        const { category_id, category_name } = catego;
        // console.log(category_id, category_name)


        return category_id;
    };
    // console.log(category_id);
}
category()
/*
const newsCard = () => {
    fetch('https://openapi.programming-hero.com/api/news/category/01')
        .then(res => res.json())
        .then(data => displayNewsCard(data.data))
};

// newsCard(category_id);

const displayNewsCard = newsCard => {
    // console.log(newsCard[0])
    const card = document.getElementById('news_card');
    newsCard.forEach(singleCard => {
        const { author, category_id, details, other_info, image_url, rating, thumbnail_url, title, total_view } = singleCard;
        console.log(details)

        card.innerHTML = `
        <img class="object-cover w-40 lg:mx-6 lg:w-60 rounded-xl h-40 lg:h-72" src="${thumbnail_url}" alt="">
        <div class="m-6 lg:w-1/2 lg:mt-0 lg:mx-4">
        <h1 class="block text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl pt-8">${title}</h1>



        </div>
        `;
    });
}*/
