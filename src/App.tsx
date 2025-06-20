import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import { Home } from './Pages/Home'
import { Register } from './Pages/Register'
import { Login } from './Pages/Login'
import { Contact } from './Pages/Contact'
import Error from './Pages/Error'
import { About } from './Pages/About'
import { Dashboard } from './Pages/Dashboard'
import { ProfileComponent } from './Components/Dashboard/ProfileComponent'
import { Orders } from './Components/Dashboard/Orders'
import { MyPayment } from './Components/Dashboard/MyPayment'
import ProtectedRoute from './Components/ProtectedRoute'


function App() {
const router = createBrowserRouter([
{ 
  path:'/',
  element:<Home/>,
  errorElement:<Error/>
},
{
  path:'/register',
  element:<Register/>,
  errorElement:<Error/>
},
{
  path:'/login',
  element:<Login/>,
  errorElement:<Error/>
},
{
  path:'/dashboard',
  element:(<ProtectedRoute><Dashboard/></ProtectedRoute>),
  errorElement:<Error/>,
  children:[{
    path:'profile',
    element:<ProfileComponent/>
  },
  {
    path:'orders',
    element:<Orders/>
  },
{
  path:'my-payments',
  element:<MyPayment/>
}]
},
{
  path:'/about',
  element:<About/>,
  errorElement:<Error/>
},
{
  path:'/contact',
  element:<Contact/>,
  errorElement:<Error/>
}
])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
