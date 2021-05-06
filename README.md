## Movies WebApp

Run in local
```
npm run dev
```

Check lint
```
npm run lint
```

### How it works
Movie page -> Fetch one time when the page loads, and filter based on that results
instead of refetching everytime. This is because I find that the API is unavailable sometimes,
so it is easier to just use one result instead of keep refreshing when API is unavailable.

Movie detail -> Fetch one time and find by movie name