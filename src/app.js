const searchBtn = document.getElementById('searchBtn')
const query = document.getElementById('searchBar').innerText
let dasbeers = []

searchBtn.addEventListener('click', () => {
    const searchString = query;
    const filteredBeers = dasbeers.filter((beers) => {
        return (
            beers.name.includes(searchString) ||
            beers.description.includes(searchString)
        )
    })

    console.log(filteredBeers)

})


const loadBeer = async() => {
    try {
        const res = await fetch('http://localhost:3000/beers')
        dasbeers = await res.json()
        displayBeer(dasbeers)
    } catch (err) {
        console.error(err);
    }
}


const displayBeer = (beers) => {
    const htmlString = beers.map((beers) => {
        return `
        <li class="beer">
            <h2>${beers.name}</h2>
            <p>${beers.description}</p>
        </li>
        `
    }).join('');
    beerList.innerHTML = htmlString

}

loadBeer()