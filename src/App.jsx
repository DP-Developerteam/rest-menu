import './App.scss';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import RootLayout from './layout/RootLayout.jsx';
//Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store.js';
//Pages
import Home from './components/pages/Home.jsx';
import Menu from './features/products/pages/Menu.jsx';
import Drinks from './features/products/pages/Drinks.jsx';
import Foods from './features/products/pages/Foods.jsx';
// User Pages
import SignIn from './features/users/pages/SignIn.jsx';
import SignUp from './features/users/pages/SignUp.jsx';
import AllUsers from './features/users/pages/AllUsers';
import UserEditForm from './features/users/components/UserEditForm.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home />}/>
        <Route path="home" element={<Home />}/>
        <Route path="menu" element={<Menu />}/>
        <Route path="menu/drinks" element={<Drinks />}/>
        <Route path="menu/foods" element={<Foods />}/>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="users" element={<AllUsers />} />
        <Route path="/users/edit/:id" element={<UserEditForm />} />
    </Route>
  )
)

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;