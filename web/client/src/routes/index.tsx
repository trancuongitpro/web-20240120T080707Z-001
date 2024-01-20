import React, { ReactComponentElement, ReactElement } from "react";
import Product from "../pages/Product";

type route = {
  path: string;
  component: React.ComponentType<{}>;
};

const publicRoutes: route[] = [
  {
    path: "/product",
    component: Product,
  },
];
export { publicRoutes};
