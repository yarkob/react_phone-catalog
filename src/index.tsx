import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import { ProductsProvider } from './context/ProductsContextProvider';
import { App } from './App';

import './styles/index.scss';

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </HashRouter>,
);
