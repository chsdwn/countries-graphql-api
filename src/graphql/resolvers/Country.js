export const Country = {
  continent: (parent, _, { db }) => {
    const continent = db.continents[parent.continent]
    const countries = Object.values(db.countries)
      .filter((country) => country.continent === parent.continent)

    return {
      name: continent,
      countries
    }
  },
  languages: (parent, _, { db }) => {
    const languages = []

    for (const languageCode of parent.languages) {
      const language = db.languages[languageCode]
      const countries = Object.values(db.countries)
        .filter((country) => country.languages.includes(languageCode))

      language.countries = countries
      languages.push(language)
    }

    return languages
  }
}
