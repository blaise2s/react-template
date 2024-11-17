import {
  createBrowserRouter,
  RouterProvider as ReactRouterDOMRouterProvider,
  RouteObject,
} from 'react-router-dom';
import { App } from '../App';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
  },
];

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    // In the docs the below config is v7_skipActionStatusRevalidation
    // https://reactrouter.com/en/6.28.0/upgrading/future#v7_skipactionstatusrevalidation
    v7_skipActionErrorRevalidation: true,
  },
});

export const RouterProvider = () => {
  return (
    <ReactRouterDOMRouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
};
