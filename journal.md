# TO DO NEXT

- [ ] Refactor the state management in `App.jsx` in favor of `useReducer()` over 5 `useState()` calls.

# Journal

## 2022-20-24 07:00

It's time for one last refactoring: Clearing up state in `Main.jsx`. At the moment, state is too cluttered there to be likable.

What I'm about to do is //reducing// ;) the state with `useReducer()`.

### __UPDATE 08:25:__

All - went - finally - well. I did the refactoring, reduced the code, reduced the clutter. Soooo nice!

## 2022-12-19 16:30

Finished these TODOs:

- [x] ~~Format and beautify the App.jsx component~~
- [x] ~~Format and beautify the MainError.jsx component~~
- [x] ~~Format and beautify the MainCenter.jsx component~~
- [x] ~~Format and beautify the Footer.jsx component~~

Was a fair load of work and labor. But I did it again, and Rowna was impressed. Bulma wasn't a big help this time, but the design wasn't everyday either.

## 2022-12-18 19:15

Finished this TODO:

- [x] ~~Write and test the Footer.jsx component~~

tests included unit tests and integration tests with `Main.jsx`



## 2022-12-18: 17:15

Finished the following TODOs:

- [x] ~~Write and test the MainCenter.jsx component~~
- [x] ~~adjust the _msw_ GET route for failure~~
- [x] ~~Write and test the MainError.jsx component~~

Nothing special to report. Works like a Swiss Watch.

## 2022-12-17 18:15

One more correction was necessary: When testing worked earlier this day, it worked because I had the backend pocketbase server running, not msw. When I took pocketbase out of the game, `fetch()` failed. The component dump showed:

```xml
  <div>
    <h1>
      This is an error!
    </h1>
    <p>
      fetch failed
    </p>
  </div>
```

I found the solution in  [this article](https://markus.oberlehner.net/blog/using-mock-service-worker-with-vitest-and-fetch/) by Markus Oberlehner. `fetch()` needs to be polyfilled in NodeJS in order to work as expected (at least in the stable version of NodeJS I am using). After updating `/src/tests/setup.js`, the test was passing.



## 2022-12-17: 11:30

Took me 4 days to implement a working solution for a GET request using `fetch()` with search parameters and to test it using `@testing-framework/user-event` and the [Mock Service Worker (msw)](https://mswjs.io). So there were three possibilities where something could go wrong.

At the end of the day everything could be solved following the official documentation. One thing, however, gave me enormous headache: `fetch()`. I didn't know that I have to wrap my fetch URI in `encodeURI` like this:

```javascript
const city = "London";
const myURI = encodeURI(
  `http://127.0.0.1:8090/api/collections/weather/records?filter=(place~"${city}")`
);

fetch(myURI).then((res) => {
  /* ... */
});
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
