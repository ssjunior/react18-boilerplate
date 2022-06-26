import { Clean, prepareInitialState } from "tomato";

import { List } from "./views";

export const sample = {
  id: "sample",
  initialState: prepareInitialState({}),
  icon: "Email",
  name: "Sample",
};

sample.routes = [
  {
    module: sample,
    admin: false,
    authenticated: false,
    route: "/",
    layout: Clean,
    views: { main: List },
  },
];
