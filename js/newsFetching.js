const navCatagories = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => console.log(data.data))
}

// const displayNavbar = navbar => {
//     const { catagoryName } = navItem;
//     navbar.forEach(navItem => {
//         console.log(catagoryName)

//     })

// }
navCatagories();