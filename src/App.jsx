import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'




function App() {


  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  )
}

export default App
