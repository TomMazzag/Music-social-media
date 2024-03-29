import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Welcome } from './pages/Welcome/WelcomePage';
import { Success } from './pages/Success/Success';
import { Feed } from './pages/WebApp/Feed/Feed';
import SearchPage from './pages/Search/SongSearch/Search';


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
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
};

export default App
