import './App.scss';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import RootLayout from './layout/RootLayout.jsx';
//Pages
import Home from './pages/Home.jsx';
import Menu from './pages/Menu.jsx';
import Drinks from './pages/Drinks.jsx';
import Foods from './pages/Foods.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home />}/>
        <Route path="home" element={<Home />}/>
        <Route path="menu" element={<Menu />}/>
        <Route path="menu/drinks" element={<Drinks />}/>
        <Route path="menu/foods" element={<Foods />}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;