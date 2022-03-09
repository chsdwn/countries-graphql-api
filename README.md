# Queries


## 1. Continent
```graphql
query getContinentByCode {
	continent(code: "eu") {
    name
    countries {
      name
    }
  }
}
```

```graphql
query getContinents {
  continents {
    name
    countries {
      name
    }
  }
}
```

## 2. Country
```graphql
query getCountryByCode {
  country(code: "gb") {
    name
    native
    phone
    capital
    currency
    continent {
      name
    }
    languages {
      name
      countries {
        name
      }
    }
  }
}
```

```graphql
query getCountries {
  countries {
    name
    native
    phone
    capital
    currency
    continent {
      name
    }
    languages {
      name
      countries {
        name
      }
    }
  }
}
```

- ## 3. Language
```graphql
query getLanguageByCode {
  language(code: "ar") {
    name
    native
    rtl
    countries {
      name
    }
  }
}
```

```graphql
query getLanguages {
  languages{
    name
    native
    rtl
    countries {
      name
    }
  }
}
```