import './App.css';
import Header from './Header';
import { RouterProvider } from 'react-router-dom';
import routesConfig from './routesConfig';

const App = () =>{

  return (
    <>
      <Header />
      <RouterProvider router={routesConfig} />
    </>
  );
}

export default App;
