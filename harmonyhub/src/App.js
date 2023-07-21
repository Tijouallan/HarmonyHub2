
import './App.css';
import Navbar from './components/Navbar';

import Footer from './components/Footer';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element:     <div className="App ">
    <Navbar></Navbar>
    <Home></Home>
    <Footer></Footer>
   </div>,
  },
]);

function App() {

  return (
<div>
 <RouterProvider router={router}/>
</div>
  );

}

export default App;
