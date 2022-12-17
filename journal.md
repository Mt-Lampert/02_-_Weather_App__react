# TO DO NEXT

- [ ] Write the features and the wireframes
- [ ] Outline the specs as pending Unit Tests.


# Journal
## 2022-12-17

Took me 4 days to implement a working solution for a GET request using `fetch()` with search parameters and to test it using `@testing-framework/user-event` and the [Mock Service Worker (msw)](https://mswjs.io). So there were three possibilities where something could go wrong.

At the end of the day everything could be solved following the official documentation. One thing, however, gave me enormous headache: `fetch()`. I didn't know that I have to wrap my fetch URI in `encodeURI` like this:

```javascript
const city = "London";
const myURI = encodeURI(`http://127.0.0.1:8090/api/collections/weather/records?filter=(place~"${city}")`);

fetch(myURI).then((res) => { /* ... */});
```

Without this, the double quotes in the `filter` parameter led to an erroneous url that sabotaged parsing in `msw`. The trouble was tat `msw` doesn't give a damn about giving helpful error messages in a case like this.

But I finally got it!

## 2022-12-13 21:47

Finished the following Todo items:

- [x] ~~Install the Testing Environment~~

Went smoothly with the help of [Robin Wieruch](https://www.robinwieruch.de/vitest-react-testing-library/).

## 2022-12-13 20:15

Finished the following Todo items:

- [x] ~~Build a tmux environment for the project~~
- [x] ~~Install the Poppins font~~
- [x] ~~Install the Bulma Framework~~

The hardest struggle was installing the Poppins font into the project. The following code did the trick:

```scss
// file: /src/main.scss

// Import fontsource font installed as npm/yarn package
// See https://fontsource.org/ for details
@import "@fontsource/poppins/index.css";
```


## 2022-12-14 10:45

Installed the project and pushed it to Github. Nothing installed or implemented yet.
