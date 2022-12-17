import { rest } from "msw";

const urlGetOK = '/api/collections/weather/records';
const urlGet404 = 'api/collections/weather/records?filter=(place~"Oslo")';

export const handlers = [
  rest.all('http://127.0.0.1/api/', (req, res, ctx) => {
    
    // TODO:
    // use req.url.searchParams to distinguish between 'place~"London"' and 'place~"Oslo"'
    console.log("I'm inside the msw GET handler.")
    
    return res(
      ctx.status(200),
      ctx.json({
        air_pressure: 1007,
        humidity: 91,
        place: "London, UK",
        sky: "overcast",
        temperature: 1,
        wind: 4,
      })
    );
  }),
];
