
const cardNews = (id) => {
    const newsId = id;
    // console.log(newsId);
    fetch(`https://openapi.programming-hero.com/api/news/category/${newsId}`)
        .then(res => res.json())
        .then(data => display(data.data))
}
cardNews();
const display = (data) => {

    const newsCardContainer = document.getElementById('news_cards');
    newsCardContainer.innerHTML = '';

    data.forEach(element => {
        // console.log(element)
        const { author, category_id, details, others_info, image_url, rating, thumbnail_url, title, total_view } = element;
        const { name, published_date, img } = author;
        const { is_todays_pick, is_trending } = others_info;
        // console.log(details, image_url, thumbnail_url)


        const newsCardDiv = document.createElement('div');

        newsCardDiv.classList.add('bg-gray-100')
        newsCardDiv.innerHTML = `
        <div class="mt-8 lg:-mx-6 lg:flex">
        <img class="object-cover w-40 md:w-full sm:w-full lg:mx-6 lg:w-60 rounded-xl h-40 lg:h-80"
            src="${thumbnail_url}"
            alt="">

        <div class="m-6 lg:w-1/2 lg:mt-0 lg:mx-4">

            <h1 class="block text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl pt-8">
                ${title}
            </h1>

            <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
               ${details}
            </p>
            <div class="flex items-center justify-between">
                <div class="flex items-center mt-6">
                    <img class="object-cover object-center w-10 h-10 rounded-full"
                        src="${img}"
                        alt="">

                    <div class="mx-4">
                        <h1 class="text-sm text-gray-700 dark:text-gray-200">${name}</h1>
                        <p class="text-sm text-gray-500 dark:text-gray-400">${published_date}</p>
                    </div>
                </div>
                <div class="flex mt-2 items-center">
                    <img class="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                        src="images/carbon_view.svg" alt="">
                    <h2>${total_view}M</h2>
                </div>

                <div class="flex mt-2 items-center">
                    <img class="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                        src="images/bxs_star-half.svg" viewBox="0 0 24 24" alt="">

                    <img class="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                        src="images/unshadow_star.svg" viewBox="0 0 24 24" alt="">

                    <img class="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                        src="images/unshadow_star.svg" viewBox="0 0 24 24" alt="">

                    <img class="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                        src="images/unshadow_star.svg" viewBox="0 0 24 24" alt="">

                    <img class="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                        src="images/unshadow_star.svg" viewBox="0 0 24 24" alt="">


                </div>
                <div class="flex mt-2 items-center">
                    <img src="images/arrow.svg" alt="">
                </div>

            </div>
        </div>
    </div>
        `;
        newsCardContainer.appendChild(newsCardDiv)


        // newsCardContainer.innerHTML = '';
        /**
         const {name,published_date,img} = author;
         const {is_todays_pick,is_trending} = others_info;
   */
    });
}
