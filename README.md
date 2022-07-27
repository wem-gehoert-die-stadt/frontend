## Setup

1. Copy `.env.example` to `.env` and fill in the required environment variables

```bash
cp .env.example .env
```

2. Install dependencies

```bash
npm i
```

## Development

Run Gatsby

```bash
npm run develop
```

Run netlify functions

```bash
npm run serve-api-functions
```

If you run into problems with uninstalled dependencies for that functions, run `npm run install-functions` manually.

The functions are available at [/.netlify/api/\[name-of-the-function\]](//localhost:9000:/.netlify/api/\[name-of-the-function\])

## API Endpoints

The functions under `/.netlify/api/[name-of-the-function]` have the following endpoints:

* `/owners`

    - returns all owners of a specific category (public, private, individuals, etc.)
    - takes GET parameter `category` (integer ranging 1 to 6) which is the type of owner and `city` to limit search results to a specific city
* `/street`

    - performs search for house numbers of specific street to autocomplete house numbers and housenumber supplements
    - takes GET parameter `name` as street name (exact match) and `city` to limit search results to a specific city
* `/search`
    - performs search of query string across owners, subsidiaries and streets table
    - takes GET parameter `query` as search term
