import { createBrowserRouter, RouteObject } from 'react-router';
import { RouterProvider as ReactRouterDOMRouterProvider } from 'react-router/dom';
import { App } from '../App';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
  },
];

const router = createBrowserRouter(routes);

export const RouterProvider = () => {
  return <ReactRouterDOMRouterProvider router={router} />;
};
