const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

const cities = []

const prom = fetch(endpoint).then(blob => blob.json())
  .then((data) => cities.push(...data))
console.log(cities)

const findMatches = (match, cities) => {
  return cities.filter((place => {
    // Need to figure out if the city or state matches what was searched
    const regex = new RegExp(match, 'gi')
    return place.city.match(regex) || place.state.match(regex)
  }))
}