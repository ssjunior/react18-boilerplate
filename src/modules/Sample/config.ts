import { Clean, prepareInitialState } from "tomato";

import { List } from "./views";

const routes = [
  {
    moduleId: "sample",
    admin: false,
    authenticated: false,
    path: "/",
    layout: Clean,
    view: List,
  },
];

export const sample = {
  id: "sample",
  endpoint: "/sample",
  name: "Sample",
  routes,
  initialState: prepareInitialState({}),
};
