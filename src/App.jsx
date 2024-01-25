import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from './Pages/LoginPage'
import ErrorPage from './Pages/ErrorPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage/>}/>
        <Route path='/LoginPage' element={<LoginPage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
