import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

export const responesMock = [
  {
    address: "536 Russell Street, Twilight, Ohio, 3274",
    age: "88",
    name: "Henson Hinton",
    phone: "(054) 1406649",
    portrait: "image5.png",
  },
  {
    address: "564 McKinley Avenue, Retsof, Mississippi, 6794",
    age: "88",
    name: "Eloise Porter",
    phone: "(054) 4997385",
    portrait: "image9.png",
  },
  {
    address: "458 Jefferson Street, Selma, North Carolina, 2578",
    age: "88",
    name: "Gillespie Lott",
    phone: "(053) 1315453",
    portrait: "image5.png",
  },
];

export const handlers = [
  http.get(
    "http://localhost:3001/api/yellow-pages/search?q=88",
    ({ request }) => {
      const url = new URL(request.url);
      const queryParam = url.searchParams.getAll("q");
      return HttpResponse.json(responesMock);
    }
  ),
];
