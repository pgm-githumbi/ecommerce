import React from "react";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Navbar from "./features/nav/Navbar";
import { Counter } from "./features/counter/Counter";

const appRouter = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route path="/" element={<Counter />} />
    </Route>
  )
);

export default appRouter;
