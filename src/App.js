import './App.css';
import { RouterProvider } from 'react-router-dom';
import routesConfig from './routesConfig';

const App = () =>{

  return (
    <>
      <RouterProvider router={routesConfig} />
    </>
  );
}

export default App;
