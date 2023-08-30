import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import { store } from "./redux/store";
import {
  AroundYou,
  ArtistDetails,
  Discover,
  Search,
  SongDetails,
  TopArtists,
  TopCharts,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/",
    element: <Discover />,
  },
  {
    path: "/top-artists",
    element: <TopArtists />,
  },
  {
    path: "/top-charts",
    element: <TopCharts />,
  },
  {
    path: "/around-you",
    element: <AroundYou />,
  },
  {
    path: "/artists/:id",
    element: <ArtistDetails />,
  },
  {
    path: "/songs/:songid",
    element: <SongDetails />,
  },
  {
    path: "/search/:searchTerm",
    element: <Search />,
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
