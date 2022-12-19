import { rest } from "msw";

const urlGetOK = "/api/collections/weather/records";
const urlGet404 = 'api/collections/weather/records?filter=(place~"Oslo")';

export const handlers = [
  rest.get(
    "http://127.0.0.1:8090/api/collections/weather/records",
    (req, res, ctx) => {
      const filter = req.url.searchParams.get("filter");
      const goodCity = filter.match(/London/);

      if (goodCity) {
        return res(
          ctx.status(200),
          ctx.json({
            items: [
              {
                air_pressure: 1007,
                humidity: 91,
                place: "London, UK",
                sky: "overcast",
                temperature: 1,
                wind: 4,
              },
            ],
          })
        );
      }

      // implicit else
      return res(ctx.status(404), ctx.json({}));
    }
  ),
];
