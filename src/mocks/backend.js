import { rest } from "msw";

const urlGetOK = 'api/collections/weather/records?filter=(place~"London")';
const urlGet404 = 'api/collections/weather/records?filter=(place~"Oslo")';

export const handlers = [
  rest.get(urlGetOK, (req, res, ctx) => {
    
    // TODO:
    // use req.url.searchParams to distinguish between 'place~"London"' and 'place~"Oslo"'
    
    
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
