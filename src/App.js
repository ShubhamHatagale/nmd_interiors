import React from 'react'
import Routes from './MainRoutes'
import './App.css';
import YourComponent from './pages/YourComponent'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <YourComponent />

      <ToastContainer />

    </>

  )
}

export default App