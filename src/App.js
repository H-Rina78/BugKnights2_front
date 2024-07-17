import './App.css';
import { RouterProvider } from 'react-router-dom';
import routesConfig from './routesConfig';
import { CookiesProvider } from 'react-cookie';

const App = () =>{

  return (
    <>
      <CookiesProvider>
        <RouterProvider router={routesConfig} />
      </CookiesProvider>
    </>
  );
}

export default App;
