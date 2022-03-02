import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
import type { MetaFunction } from 'remix';
import { CartContext } from './contexts/cart.context';
import { useCartContextValue } from './hooks/useCartContextValue';

export const meta: MetaFunction = () => {
  return { title: 'Remix Shop Application' };
};

export default function App() {
  const cartContextValue = useCartContextValue();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <CartContext.Provider value={cartContextValue}>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </CartContext.Provider>
      </body>
    </html>
  );
}
