export const Query = {
  /* CONTINENT */
  continent: (_, args, { db }) => {
    const code = args.code.toUpperCase()
    const continent = db.continents?.[code]
    if (!continent) return

    return { name: continent }
  },
  continents: (_, __, { db }) => Object.values(db.continents)
    .map((name) => ({ name })),

  /* COUNTRY */
  country: (_, args, { db }) => {
    const code = args.code.toUpperCase()
    const country = db.countries?.[code]
    if (!country) return

    return country
  },
  countries: (_, __, { db }) => Object.values(db.countries),

  /* LANGUAGE */
  language: (_, args, { db }) => {
    const code = args.code.toLowerCase()
    const language = db.languages?.[code]
    if (!language) return

    return {
      ...language,
      rtl: !!language.rtl
    }
  },
  languages: (_, __, { db }) => Object.values(db.languages)
    .map((language) => ({ ...language, rtl: !!language.rtl }))
}
