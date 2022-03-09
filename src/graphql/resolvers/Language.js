export const Language = {
  countries: (parent, _, { db }) => {
    let languageCode = ''
    for (const code in db.languages) {
      if (parent.name === db.languages[code].name) languageCode = code
    }

    const countries = Object.values(db.countries)
      .filter((country) => country.languages.includes(languageCode))
    return countries
  }
}
