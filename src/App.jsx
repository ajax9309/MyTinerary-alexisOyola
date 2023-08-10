import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/Home/Home';
import Cities from './pages/Cities/Cities'

import {createBrowserRouter,RouterProvider} from "react-router-dom";

const router=createBrowserRouter([
  {
    path:'/',
    element:<><Home/></>
  },
  {
    path:'/Cities',
    element:<><Cities/></>
  }
])

function App() {
  
  return (
    
    <RouterProvider router={router}/>
    
  )
}

export default App
