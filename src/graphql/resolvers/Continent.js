export const Continent = {
  countries: (parent, _, { db }) => {
    let continentCode = ''
    for (const code in db.continents) {
      if (db.continents[code] === parent.name) {
        continentCode = code
      }
    }
    const countries = Object.values(db.countries)
      .filter((country) => country.continent === continentCode)
    return countries
  }
}
