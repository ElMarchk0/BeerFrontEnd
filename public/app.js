const searchBar = document.getElementById('searchBar')
const beersList = document.getElementById('beersList')

const searchBeers = async searchText => {
    const res = await fetch('http://localhost:3000/beers')
        // const res = await fetch('./api/beersV1.json')
    const beers = await res.json()
        // console.log(beers)

    // filter matches
    let matches = beers.filter(beer => {
        const regex = new RegExp(`^${searchText}`, 'gi')
        return beer.name.match(regex) || beer.description.match(regex) || beer.brand.match(regex)
    })
    console.log(matches)

    if (searchText.length === 0) {
        matches = []
    }

    outputHtml(matches)
}

const outputHtml = matches => {
    if (matches.length > 0) {
        const html = matches.map(match => `
            <div class="card card-body mb-1>
                <h4>${match.name} by ${match.brand}</h4>
                <p>${match.description}</p>
                <p>ABV: ${match.ABV}</p>
            </div>
        `).join('')
        beersList.innerHTML = html
    }


}

searchBar.addEventListener('input', () => searchBeers(searchBar.value))