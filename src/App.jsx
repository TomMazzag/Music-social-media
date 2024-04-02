import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Welcome } from './pages/Welcome/WelcomePage';
import { Success } from './pages/Success/Success';
import { Feed } from './pages/WebApp/Feed/Feed';
import SearchPage from './pages/Search/SongSearch/Search';
import { UsersAccount } from './pages/Account/UsersAccount';
import { Follows } from './pages/Account/Connections/Follows';
import { PublicAccount } from './pages/Account/PublicAccount';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/success",
    element: <Success />,
  },
  {
    path: "/feed",
    element: <Feed />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/account",
    element: <UsersAccount />,
  },
  {
    path: "/user/:userId/followers",
    element: <Follows followType={"followers"}/>,
  },
  {
    path: "/user/:userId/following",
    element: <Follows followType={"following"}/>,
  },
  {
    path: "/users/:userId",
    element: <PublicAccount/>,
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
};

export default App
