const searchBar = document.getElementById('searchBar')
const beersList = document.getElementById('beersList')

const searchBeers = async searchText => {
    const res = await fetch('http://localhost:3000/beers')
    const beers = await res.json()
        // console.log(beers)

    // filter matches
    let matches = beers.filter(beer => {
        const regex = new RegExp(`^${searchText}`, 'gi')
        return beer.name.match(regex) || beer.description.match(regex) || beer.brand.match(regex)
    })
    console.log(matches)
}

searchBar.addEventListener('input', () => searchBeers(searchBar.value))